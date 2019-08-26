// TODO: Add SweetAlerts with a progressbar on form reset, control behaviour of the form with errors.
// TODO: After moving ErrorsStateMatcher try to resetForm of contactForm in order to clear validators after submit.

import { AngularFirestore } from '@angular/fire/firestore';
import {
  AngularFireStorage,
  AngularFireStorageReference,
  AngularFireUploadTask
} from '@angular/fire/storage';
import { catchError, finalize } from 'rxjs/operators';
import { Component } from '@angular/core';
import { FileValidator } from 'ngx-material-file-input';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { throwError } from 'rxjs';

// TODO: Add verbose datepicker with custom formats.
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public acceptedTerms = false;
  public currentDate: Date = new Date();
  public maxFileSize = 20971520;
  public servicesItems: string[] = [
    'Cyber Security',
    'Digital Strategy',
    'Software Development'
  ];
  public downloadURL: string[] = [];

  // Create max deadline dynamically 5 years from now.
  public day: number = this.currentDate.getDate();
  public month: number = this.currentDate.getMonth();
  public year: number = this.currentDate.getFullYear();
  public maxDate: Date = new Date(this.year + 5, this.month, this.day);

  /**
   * @constructor
   * @description Creates a new instance of this component.
   * @param  {formBuilder} - an abstraction class object to create a form group control for the contact form.
   */
  constructor(
    private angularFirestore: AngularFirestore,
    private angularFireStorage: AngularFireStorage,
    private formBuilder: FormBuilder
  ) {}

  // Create contact form with all required validators.
  public contactForm: FormGroup = this.formBuilder.group({
    acceptedTerms: ['', Validators.required],
    fileUploader: [
      '',
      Validators.compose([
        FileValidator.maxContentSize(this.maxFileSize),
        Validators.maxLength(512),
        Validators.minLength(2)
      ])
    ].toString(),
    formControlContactPreference: '',
    formControlDeadline: '',
    formControlDescription: [
      '',
      Validators.compose([
        Validators.maxLength(5000),
        Validators.minLength(30),
        Validators.required
      ])
    ],
    formControlEmail: [
      '',
      Validators.compose([
        Validators.email,
        Validators.maxLength(512),
        Validators.minLength(6),
        Validators.required
      ])
    ],
    formControlName: [
      '',
      Validators.compose([
        Validators.maxLength(64),
        Validators.minLength(2),
        Validators.pattern('^[a-zA-Z ]*$'),
        Validators.required
      ])
    ],
    formControlPhone: [
      '',
      Validators.compose([
        Validators.maxLength(14),
        Validators.minLength(4),
        Validators.pattern('^[0-9]*$')
      ])
    ],
    formControlService: '',
    recaptchaCheck: ['', Validators.required]
  });

  /**
   * @description Filter available days in the datepicker to choose.
   * @param {date} - instance of date.
   * @returns {boolean}
   */
  public filterAvailableDays = (date: Date): boolean => {
    const day = date.getDay();
    return day !== 0 && day !== 6; // Prevent Saturday and Sunday from being selected.
  };

  /**
   * @description Handle state of accepted terms.
   * @returns {void}
   */
  public handleTerms(): void {
    this.acceptedTerms = !this.acceptedTerms;
  }

  /**
   * @description Check if phone in contact form has an error.
   * @param {event} - event for handling the error.
   * @returns {void}
   */
  public hasError(event: any): void {
    if (!event && this.contactForm.value.formControlPhone !== '') {
      this.contactForm
        .get('formControlPhone')! // Non-null assertion operator is required to let know the compiler that this value is not empty and exists.
        .setErrors(['invalid_cell_phone', true]);
    }
  }

  // TODO: Shall it be a separated service?
  /**
   * @description Perform certain behaviours on button submit of the contact form.
   * @param {form} - object of submitted contact form.
   * @returns {void}
   */
  public onSubmit(form: any): void {
    form.fileUploader = this.downloadURL;

    this.angularFirestore
      .collection(String(process.env.FIRESTORE_COLLECTION_MESSAGES)) // Make sure the environmental variable is a string. TODO: Problem on CI.
      .add(form)
      .then(() => {
        this.contactForm.reset(); // Reset form once user will click "Send Message".
        this.acceptedTerms = false;
      })
      .catch(() => {
        throw new Error('Error with submitting contact form.'); // throw an Error
      });
  }

  // TODO: Add progressbar and controlling upload button (cancel, pause, running).
  // TODO: Shall it be a separated service?
  // TODO: Not working on deployment, fix it.
  /**
   * @description Upload additional files to Cloud Firestore and get URL to the files.
   * @param {event} - object of sent files.
   * @returns {void}
   */
  public uploadFile(event: any): void {
    // Iterate through all uploaded files.
    for (let i = 0; i < event.target.files.length; i++) {
      const randomId = Math.random()
        .toString(36)
        .substring(2); // Create random ID, so the same file names can be uploaded to Cloud Firestore.

      const file = event.target.files[i]; // Get each uploaded file.

      // Get file reference.
      const fileRef: AngularFireStorageReference = this.angularFireStorage.ref(
        randomId
      );

      // Create upload task.
      const task: AngularFireUploadTask = this.angularFireStorage.upload(
        randomId,
        file
      );

      // Upload file to Cloud Firestore.
      task
        .snapshotChanges()
        .pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((downloadURL: string) => {
              this.angularFirestore
                .collection(String(process.env.FIRESTORE_COLLECTION_FILES)) // Make sure the environmental variable is a string. TODO: Problem on CI.
                .add({ downloadURL: downloadURL });
              this.downloadURL.push(downloadURL);
            });
          }),
          catchError((error: any) => {
            return throwError(error);
          })
        )
        .subscribe();
    }
  }
}
