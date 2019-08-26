// TODO: Add "Not found" when from search there's nothing to give back.

import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Subject } from 'rxjs';
import { Term } from './term.model';

const GLOSSARY_DATA: Term[] = [
  { position: 1, name: 'Term 1', description: 'Some description goes here...' },
  { position: 2, name: 'Term 2', description: 'Some description goes here...' },
  { position: 3, name: 'Term 3', description: 'Some description goes here...' },
  { position: 4, name: 'Term 4', description: 'Some description goes here...' },
  { position: 5, name: 'Term 5', description: 'Some description goes here...' },
  {
    position: 6,
    name: 'Term 6',
    description: 'ASome description goes here...'
  },
  {
    position: 7,
    name: 'Term 7',
    description: 'ASome description goes here...'
  },
  { position: 8, name: 'Term 8', description: 'Some description goes here...' },
  { position: 9, name: 'Term 9', description: 'Some description goes here...' },
  {
    position: 10,
    name: 'Term 10',
    description: 'Some description goes here...'
  },
  {
    position: 11,
    name: 'Term 11',
    description: 'Some description goes here...'
  },
  {
    position: 12,
    name: 'Term 12',
    description: 'Some description goes here...'
  },
  {
    position: 13,
    name: 'Term 13',
    description: 'CSome description goes here...'
  },
  {
    position: 14,
    name: 'Term 14',
    description: 'Some description goes here...'
  },
  {
    position: 15,
    name: 'Term 15',
    description: 'Some description goes here...'
  },
  {
    position: 16,
    name: 'Term 16',
    description: 'FSome description goes here...'
  },
  {
    position: 17,
    name: 'Term 17',
    description: 'Some description goes here...'
  },
  {
    position: 18,
    name: 'Term 18',
    description: 'Some description goes here...'
  },
  {
    position: 19,
    name: 'Term 19',
    description:
      'Some description goes here...Some description goes here...Some description goes here...'
  },
  {
    position: 20,
    name: 'Term 20',
    description: 'Some description goes here...'
  },
  {
    position: 21,
    name: 'Term 21',
    description: 'Some description goes here...'
  },
  {
    position: 22,
    name: 'Term 22',
    description: 'Some description goes here...'
  },
  {
    position: 23,
    name: 'Term 23',
    description: 'Some description goes here...'
  },
  {
    position: 24,
    name: 'Term 24',
    description: 'Some description goes here...'
  },
  {
    position: 25,
    name: 'Term 25',
    description: 'Some description goes here...'
  },
  {
    position: 26,
    name: 'Term 26',
    description: 'Some description goes here...'
  },
  {
    position: 27,
    name: 'Term 27',
    description: 'Some description goes here...'
  }
];

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.scss']
})
export class GlossaryComponent implements AfterViewInit {
  private searchSubject$: Subject<string> = new Subject<string>();
  public dataSource: MatTableDataSource<Term> = new MatTableDataSource<Term>(
    GLOSSARY_DATA
  );
  public displayedColumns: string[] = ['position', 'name', 'description'];

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator; // Non-null assertion operator is required to let know the compiler that this value is not empty and exists.
  @ViewChild(MatSort, { static: false }) sort: MatSort = new MatSort();

  public ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // Display desired results after 1 second.
    this.searchSubject$
      .pipe(
        debounceTime(1000), // Limit requests to maximum one per second.
        distinctUntilChanged() // Eliminate duplicate values.
      )
      .subscribe((filterValue: string) => {
        this.dataSource.filter = filterValue.trim().toLowerCase(); // Filter data in books table.
      });
  }

  public applyFilter(filterValue: string): void {
    this.searchSubject$.next(filterValue);
  }
}
