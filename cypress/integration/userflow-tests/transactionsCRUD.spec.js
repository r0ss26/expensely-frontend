/// <reference types="cypress" />

let token;

describe('Hooks', () => {
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
    if (window.localStorage.token) window.localStorage.removeItem('token');
  });

  describe('authenticate test user', () => {
    it('makes authenticated request', () => {
      cy.request({
        url: 'http://localhost:5000/auth',
        headers: {
          authorization: token,
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

  describe('create new transaction', () => {
    it('opens modal', () => {
      cy.get('.blue').click({ force: true });
    });
  });

  describe('fills out the form', () => {
    it('selects a date', () => {
      cy.get('#create-transaction-date').click({ force: true });
      cy.get('.is-today > .datepicker-day-button').click();
    });
    it('selects a category', () => {
      cy.get('#transaction-category').click();
      cy.get('#transaction-category ul li:nth-of-type(2)').click();
    });
    it('enters an amount', () => {
      cy.get('#amount').click({ force: true }).type('100');
    });
    it('enters a comment', () => {
      cy.get('#comment').click({ force: true }).type('This is a comment');
    });
    it('submits the form', () => {
      cy.get('#submit-new-transaction').click();
    });
  });

  describe('saves the transaction', () => {
    it('visits transactions page', () => {
      cy.get('.modal-overlay').click({ force: true });
      cy.get('.links > :nth-child(5) > a > p').click();
      cy.contains('Transactions').should('be.visible');
    });

    it('displays the new transaction', () => {
      cy.contains('This is a comment').should('be.visible');
    });
  });

  describe('edits the transaction', () => {
    it('opens the edit modal', () => {
      cy.get('tr > :nth-child(6) > .waves-effect').click();
    });

    it('edits the transaction', () => {
      cy.get(
        '#edit-transaction-modal > .center-align > form > :nth-child(4) > #comment'
      )
        .click()
        .type(' edited');
      cy.get('#save-transaction').click();
      cy.get('.modal-overlay').click({ force: true });
      cy.contains('This is a comment edited').should('be.visible');
    });
  });

  describe('deletes the transaction', () => {
    it('opens the delete confirmation', () => {
      cy.get(':nth-child(1) > :nth-child(7) > .waves-effect').click();
    });

    it('removes the transaction', () => {
      cy.get('#confirmationModal').contains('Delete').click();
      cy.contains('This is a comment edited').should('not.be.visible');
    });
  });
});
