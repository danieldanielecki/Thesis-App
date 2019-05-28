import { getCanvas, getParagraph, getTitle } from '../support/app.po';

describe('Page: About us', () => {
  beforeEach(() => cy.visit('/about-us'));

  it('should display about us title', () => {
    cy.wait(2000); // Required in order to pass the test due to the Agastya XHR request.
    getTitle().contains('About us');
  });
});

describe('Page: Contact', () => {
  beforeEach(() => cy.visit('/contact'));

  it('should display contact title', () => {
    cy.wait(2000); // Required in order to pass the test due to the Agastya XHR request.
    getTitle().contains('Contact');
  });
});

describe('Page: Copyrights', () => {
  beforeEach(() => cy.visit('/copyrights'));

  it('should display copyrights title', () => {
    cy.wait(2000); // Required in order to pass the test due to the Agastya XHR request.
    getTitle().contains('Copyrights');
  });
});

describe('Page: Cyber Security', () => {
  beforeEach(() => cy.visit('/cyber-security'));

  it('should display cyber security paragraph', () => {
    cy.wait(2000); // Required in order to pass the test due to the Agastya XHR request.
    getParagraph().contains('cyber-security works!');
  });
});

describe('Page: Digital Strategy', () => {
  beforeEach(() => cy.visit('/digital-strategy'));

  it('should display digital strategy paragraph', () => {
    cy.wait(2000); // Required in order to pass the test due to the Agastya XHR request.
    getParagraph().contains('digital-strategy works!');
  });
});

describe('Page: FAQ', () => {
  beforeEach(() => cy.visit('/faq'));

  it('should display faq title', () => {
    cy.wait(2000); // Required in order to pass the test due to the Agastya XHR request.
    getTitle().contains('FAQ');
  });
});

describe('Page: Glossary', () => {
  beforeEach(() => cy.visit('/glossary'));

  it('should display glossary paragraph', () => {
    cy.wait(2000); // Required in order to pass the test due to the Agastya XHR request.
    getParagraph().contains('glossary works!');
  });
});

describe('Page: Methodology', () => {
  beforeEach(() => cy.visit('/methodology'));

  it('should display methodology title', () => {
    cy.wait(2000); // Required in order to pass the test due to the Agastya XHR request.
    getTitle().contains('Methodology');
  });
});

describe('Page: Partnerships', () => {
  beforeEach(() => cy.visit('/partnerships'));

  it('should display partnerships paragraph', () => {
    cy.wait(2000); // Required in order to pass the test due to the Agastya XHR request.
    getParagraph().contains('partnerships works!');
  });
});

describe('Page: Privacy & Security', () => {
  beforeEach(() => cy.visit('/privacy-and-security'));

  it('should display privacy & security title', () => {
    cy.wait(2000); // Required in order to pass the test due to the Agastya XHR request.
    getTitle().contains('Privacy & Security');
  });
});

describe('Page: Services', () => {
  beforeEach(() => cy.visit('/services'));

  it('should display services paragraph', () => {
    cy.wait(2000); // Required in order to pass the test due to the Agastya XHR request.
    getParagraph().contains('services works!');
  });
});

describe('Page: Sitemap', () => {
  beforeEach(() => cy.visit('/sitemap'));

  it('should display sitemap paragraph', () => {
    cy.wait(2000); // Required in order to pass the test due to the Agastya XHR request.
    getParagraph().contains('sitemap works!');
  });
});

describe('Page: Software Development', () => {
  beforeEach(() => cy.visit('/software-development'));

  it('should display software development works paragraph', () => {
    cy.wait(2000); // Required in order to pass the test due to the Agastya XHR request.
    getParagraph().contains('software development works!');
  });
});

describe('Page: Terms of Use', () => {
  beforeEach(() => cy.visit('/terms-of-use'));

  it('should display terms of use title', () => {
    cy.wait(2000); // Required in order to pass the test due to the Agastya XHR request.
    getTitle().contains('Terms of Use');
  });
});

// describe('Page: Not found', () => {
//   beforeEach(() => cy.visit('/not-found'));

//   it('should display not found animation', () => {
//     cy.wait(2000); // Required in order to pass the test due to the Agastya XHR request.
//     getCanvas();
//   });
// });
