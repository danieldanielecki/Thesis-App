import { getTitle, getParagraph } from '../support/app.po';

describe('Page: About us', () => {
  beforeEach(() => cy.visit('/about-us'));

  it('should display about us title', () => {
    getTitle().contains('About us');
  });
});

describe('Page: Contact', () => {
  beforeEach(() => cy.visit('/contact'));

  it('should display contact title', () => {
    getTitle().contains('Contact');
  });
});

describe('Page: Copyrights', () => {
  beforeEach(() => cy.visit('/copyrights'));

  it('should display copyrights title', () => {
    getTitle().contains('Copyrights');
  });
});

describe('Page: Cyber Security', () => {
  beforeEach(() => cy.visit('/cyber-security'));

  it('should display cyber security paragraph', () => {
    getParagraph().contains('cyber-security works!');
  });
});

describe('Page: Digital Strategy', () => {
  beforeEach(() => cy.visit('/digital-strategy'));

  it('should display digital strategy paragraph', () => {
    getParagraph().contains('digital-strategy works!');
  });
});

describe('Page: FAQ', () => {
  beforeEach(() => cy.visit('/faq'));

  it('should display faq title', () => {
    getTitle().contains('FAQ');
  });
});

describe('Page: Glossary', () => {
  beforeEach(() => cy.visit('/glossary'));

  it('should display glossary paragraph', () => {
    getParagraph().contains('glossary works!');
  });
});

describe('Page: Methodology', () => {
  beforeEach(() => cy.visit('/methodology'));

  it('should display methodology title', () => {
    getTitle().contains('Methodology');
  });
});

describe('Page: Partnerships', () => {
  beforeEach(() => cy.visit('/partnerships'));

  it('should display partnerships paragraph', () => {
    getParagraph().contains('partnerships works!');
  });
});

describe('Page: Privacy & Security', () => {
  beforeEach(() => cy.visit('/privacy-and-security'));

  it('should display privacy & security title', () => {
    getTitle().contains('Privacy & Security');
  });
});

describe('Page: Services', () => {
  beforeEach(() => cy.visit('/services'));

  it('should display services paragraph', () => {
    getParagraph().contains('services works!');
  });
});

describe('Page: Sitemap', () => {
  beforeEach(() => cy.visit('/sitemap'));

  it('should display sitemap paragraph', () => {
    getParagraph().contains('sitemap works!');
  });
});

describe('Page: Software Development', () => {
  beforeEach(() => cy.visit('/software-development'));

  it('should display software development works paragraph', () => {
    getParagraph().contains('software development works!');
  });
});

describe('Page: Terms of Use', () => {
  beforeEach(() => cy.visit('/terms-of-use'));

  it('should display terms of use title', () => {
    getTitle().contains('Terms of Use');
  });
});

// describe('Page: Not found', () => {
//   beforeEach(() => cy.visit('/not-found'));

//   it('should display page not found paragraph', () => {
//     getParagraph().contains(
//       'Page not found.'
//     );
//   });
// });
