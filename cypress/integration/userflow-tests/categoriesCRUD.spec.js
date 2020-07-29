// <reference types="crypress" />

let token;

before(function getUser() {
});

beforeEach(function setUser() {
  console.log(Cypress.env('testUser'));
  cy.request('POST', 'http://localhost:5000/auth/login', {
    email: Cypress.env('testUser').email,
    password: Cypress.env('testUser').password,
  })
    .its('body')
    .then((res) => {
      token = res.token;
    });
  window.localStorage.setItem('token', token);
});

describe('authenticate test user', () => {
  it('makes authenticated request', () => {
    cy.request({
      url: 'http://localhost:5000/auth',
      headers: {
        authorization: window.localStorage.token,
      },
    });
  });
});

describe('access dashboard', () => {
  it('visits dashboard page', () => {
    cy.visit('http://localhost:3000/dashboard');
    cy.contains('Dashboard').should('be.visible');
  });
});

describe('create new category', () => {
  it('opens modal', () => {
    cy.get('.green').click({ force: true });
  });
});

describe('fills out the form', () => {
  it('selects a type', () => {
    cy.get('#expense').click();
  });
  it('enters a category name', () => {
    cy.get(
      '#create-category-modal > .modal-content > form > :nth-child(1) > .category_name'
    )
      .click()
      .type('A test category');
  });
  it('selects a color', () => {
    cy.get('.hue-horizontal').click({ multiple: true, force: true });
  });
  it('submits the form', () => {
    cy.get('#submit-category').click();
  });
});

describe('saves the category', () => {
  it('visits categories page', () => {
    cy.get('.links > :nth-child(7) > a > p').click();
    cy.contains('Categories').should('be.visible');
  });

  it('displays the new transaction', () => {
    cy.contains('A test category').should('be.visible');
  });
});

describe('edits the category', () => {
  it('opens the edit modal', () => {
    cy.get(':nth-child(20) > .icons > .modal-trigger > .material-icons').click({
      force: true,
    });
  });

  it('edits the category', () => {
    cy.get('#edit-category-modal > .modal-content > form > :nth-child(1) > .category_name')
      .click()
      .type(' edited');
    cy.get('#save-category').click();
    cy.get('.modal-overlay').click({ force: true });
    cy.contains('A test category edited').should('be.visible');
  });
});