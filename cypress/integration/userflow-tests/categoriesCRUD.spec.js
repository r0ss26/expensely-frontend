/// <reference types="cypress" />

let token;

before(function getUser() {
  cy.request('POST', 'http://localhost:5000/auth/login', {
    email: Cypress.env('testUser').email,
    password: Cypress.env('testUser').password,
  })
    .its('body')
    .then((res) => {
      console.log(res);
      token = res.token;
    });
});

beforeEach(function setUser() {
  window.localStorage.setItem('token', token);
});

afterEach(function logout() {
  window.localStorage.removeItem('token');
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
    cy.url().should('include', 'dashboard');
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
    cy.get('.categoryName').click().type('A test category');
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
    cy.get('.modal-overlay').click({ force: true });
    cy.get('.links > :nth-child(7) > a > p').click();
    cy.url().should('include', 'categories');
  });

  it('displays the new category', () => {
    cy.get('tr').contains('A Test Category').should('be.visible');
  });
});

describe('edits the category', () => {
  it('opens the edit modal', () => {
    cy.contains('A Test Category').click({
      force: true,
    });
  });

  it('edits the category', () => {
    cy.get('tr')
      .contains('A Test Category')
      .parent()
      .children('.edit-category')
      .click();
    cy.get('.category_name').type(' edited', { force: true });
    cy.get('#save-category').click();
    cy.get('.modal-overlay').click({ force: true });
    cy.get('tr').contains('A Test Category Edited').should('be.visible');
  });
});
