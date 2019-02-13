import { getGreeting } from '../support/app.po';

describe('Hello Ditectrev', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to ditectrev!');
  });
});
