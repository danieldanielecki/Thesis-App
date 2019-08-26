import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';

/**
 * List of FAQ items.
 * Each FAQ item has category and optional list of questions.
 */
// TODO: Move this interface out.
interface FaqQuestions {
  answer?: string;
  category?: string;
  question?: string;
  questions?: FaqQuestions[];
}

export const FAQ_QUESTIONS: FaqQuestions[] = [
  {
    category: 'Basics',
    questions: [
      { answer: 'Answer 1 goes here...', question: 'Question 1?' },
      { answer: 'Answer 2 goes here...', question: 'Question 2?' },
      { answer: 'Answer 3 goes here...', question: 'Question 3?' },
      { answer: 'Answer 4 goes here...', question: 'Question 4?' },
      { answer: 'Answer 5 goes here...', question: 'Question 5?' }
    ]
  },
  {
    category: 'Company',
    questions: [
      { answer: 'Answer 1 goes here...', question: 'Question 1?' },
      { answer: 'Answer 2 goes here...', question: 'Question 2?' },
      { answer: 'Answer 3 goes here...', question: 'Question 3?' },
      { answer: 'Answer 4 goes here...', question: 'Question 4?' }
    ]
  },
  {
    category: 'Finance',
    questions: [
      { answer: 'Answer 1 goes here...', question: 'Question 1?' },
      { answer: 'Answer 2 goes here...', question: 'Question 2?' },
      { answer: 'Answer 3 goes here...', question: 'Question 3?' },
      { answer: 'Answer 4 goes here...', question: 'Question 4?' },
      { answer: 'Answer 5 goes here...', question: 'Question 5?' }
    ]
  },
  {
    category: 'Methodology',
    questions: [
      { answer: 'Answer 1 goes here...', question: 'Question 1?' },
      { answer: 'Answer 2 goes here...', question: 'Question 2?' },
      { answer: 'Answer 3 goes here...', question: 'Question 3?' },
      { answer: 'Answer 4 goes here...', question: 'Question 4?' },
      { answer: 'Answer 5 goes here...', question: 'Question 5?' }
    ]
  },
  {
    category: 'Legal',
    questions: [
      { answer: 'Answer 1 goes here...', question: 'Question 1?' },
      { answer: 'Answer 2 goes here...', question: 'Question 2?' },
      { answer: 'Answer 3 goes here...', question: 'Question 3?' },
      { answer: 'Answer 4 goes here...', question: 'Question 4?' },
      { answer: 'Answer 5 goes here...', question: 'Question 5?' },
      { answer: 'Answer 6 goes here...', question: 'Question 6?' }
    ]
  },
  {
    category: 'Services',
    questions: [
      {
        category: 'Cyber Security',
        questions: [
          { answer: 'Answer 1 goes here...', question: 'Question 1?' },
          { answer: 'Answer 2 goes here...', question: 'Question 2?' },
          { answer: 'Answer 3 goes here...', question: 'Question 3?' },
          { answer: 'Answer 4 goes here...', question: 'Question 4?' },
          { answer: 'Answer 5 goes here...', question: 'Question 5?' },
          { answer: 'Answer 6 goes here...', question: 'Question 6?' },
          { answer: 'Answer 7 goes here...', question: 'Question 7?' },
          { answer: 'Answer 8 goes here...', question: 'Question 8?' }
        ]
      },
      {
        category: 'Digital Strategy',
        questions: [
          { answer: 'Answer 1 goes here...', question: 'Question 1?' },
          { answer: 'Answer 2 goes here...', question: 'Question 2?' },
          { answer: 'Answer 3 goes here...', question: 'Question 3?' }
        ]
      },
      {
        category: 'Software Development',
        questions: [
          { answer: 'Answer 1 goes here...', question: 'Question 1?' },
          { answer: 'Answer 2 goes here...', question: 'Question 2?' },
          { answer: 'Answer 3 goes here...', question: 'Question 3?' },
          { answer: 'Answer 4 goes here...', question: 'Question 4?' },
          { answer: 'Answer 5 goes here...', question: 'Question 5?' },
          { answer: 'Answer 6 goes here...', question: 'Question 6?' }
        ]
      }
    ]
  },
  {
    category: 'Technical keywords',
    questions: [{ answer: 'Answer 1 goes here...', question: 'Question 1?' }]
  }
];
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  // Control the expand/collapse state of FAQ items.
  public treeControl: NestedTreeControl<FaqQuestions> = new NestedTreeControl<
    FaqQuestions
  >(node => node.questions);
  // Data source for nested FAQ items.
  public dataSource: MatTreeNestedDataSource<
    FaqQuestions
  > = new MatTreeNestedDataSource<FaqQuestions>();

  /**
   * @constructor
   * @description Create a new instance of this component.
   */
  constructor() {
    this.dataSource.data = FAQ_QUESTIONS; // Get data source of FAQ questions.
  }

  /**
   * @description Check if FAQ item (parent) has a subcategory (child) item(s).
   * @param {_} Number of FAQ items.
   * @param {node} Object of FAQ items.
   * @returns {boolean}
   */
  public hasChild = (_: number, node: FaqQuestions): boolean =>
    !!node.questions && node.questions.length > 0; // '!!' is truthiness (represented as a boolean) - it's simply casting. It gives the ability to check the truthiness of multiple variables against each other in a repeatable, standardized (and JSLint friendly) fashion.
}
