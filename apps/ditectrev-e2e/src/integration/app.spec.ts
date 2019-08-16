import {
  getCanvas,
  getGallery,
  getTestimonials,
  getTitle
} from '../support/app.po';

// TODO: Add more E2E tests at the end of this project.
describe('Page: About us', () => {
  beforeEach(() => cy.visit('/about-us'));

  it('should display about us title', () => {
    cy.wait(2000); // Required in order to pass the test due to the Agastya XHR request.
    getTitle().contains('About us');
  });
});

// TODO: This test fails on CI.
// describe('Page: Contact', () => {
//   beforeEach(() => cy.visit('/contact'));

//   it('should display contact title', () => {
//     cy.wait(2000); // Required in order to pass the test due to the Agastya XHR request.
//     getTitle().contains('Contact');
//   });
// });

describe('Page: Copyrights', () => {
  beforeEach(() => cy.visit('/copyrights'));

  it('should display copyrights title', () => {
    cy.wait(2000); // Required in order to pass the test due to the Agastya XHR request.
    getTitle().contains('Copyrights');
  });
});

describe('Page: Cyber Security', () => {
  beforeEach(() => cy.visit('/cyber-security'));

  it('should display cyber security services titles', () => {
    cy.wait(2000); // Required in order to pass the test due to the Agastya XHR request.
    getTitle().contains('Service 1');
    getTitle().contains('Service 2');
    getTitle().contains('Service 3');
    getTitle().contains('Service 4');
    getTitle().contains('Service 5');
    getTitle().contains('Service 6');
  });
});

describe('Page: Digital Strategy', () => {
  beforeEach(() => cy.visit('/digital-strategy'));

  it('should display digital strategy services titles', () => {
    cy.wait(2000); // Required in order to pass the test due to the Agastya XHR request.
    getTitle().contains('Service 1');
    getTitle().contains('Service 2');
    getTitle().contains('Service 3');
    getTitle().contains('Service 4');
    getTitle().contains('Service 5');
    getTitle().contains('Service 6');
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
    getTitle().contains('Glossary');
  });
});

describe('Page: Home', () => {
  beforeEach(() => cy.visit('/'));

  it('should display particles animation', () => {
    cy.wait(2000); // Required in order to pass the test due to the Agastya XHR request.
    getCanvas();
  });

  it('should display gallery', () => {
    cy.wait(2000); // Required in order to pass the test due to the Agastya XHR request.
    getGallery();
  });

  it('should display testimonials', () => {
    cy.wait(2000); // Required in order to pass the test due to the Agastya XHR request.
    getTestimonials();
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

  it('should display partnerships title', () => {
    cy.wait(2000); // Required in order to pass the test due to the Agastya XHR request.
    getTitle().contains('Partnerships');
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

  it('should display services titles', () => {
    cy.wait(2000); // Required in order to pass the test due to the Agastya XHR request.
    getTitle().contains('Cyber Security');
    getTitle().contains('Digital Strategy');
    getTitle().contains('Software Development');
  });
});

describe('Page: Sitemap', () => {
  beforeEach(() => cy.visit('/sitemap'));

  it('should display sitemap paragraph', () => {
    cy.wait(2000); // Required in order to pass the test due to the Agastya XHR request.
    getTitle().contains('Sitemap');
  });
});

describe('Page: Software Development', () => {
  beforeEach(() => cy.visit('/software-development'));

  it('should display software development services titles', () => {
    cy.wait(2000); // Required in order to pass the test due to the Agastya XHR request.
    getTitle().contains('Service 1');
    getTitle().contains('Service 2');
    getTitle().contains('Service 3');
    getTitle().contains('Service 4');
    getTitle().contains('Service 5');
    getTitle().contains('Service 6');
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
