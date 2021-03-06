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
    window.localStorage.removeItem('token');
  });

  describe('authenticate test user', () => {
    it('makes authenticated request', () => {
      cy.request({
        url: 'http://localhost:5000/auth',
        headers: {
          authorization: window.localStorage.token,
        },
      })
        .its('status')
        .should('equal', 200);
    });
  });

  describe('access dashboard', () => {
    it('visits dashboard page', () => {
      cy.visit('http://localhost:3000/dashboard');
      cy.contains('Dashboard').should('be.visible');
      cy.url().should('include', 'dashboard');
    });
  });

  describe('create new budget', () => {
    it('opens modal', () => {
      cy.get('a[href="#create-budget-modal"]').click({ force: true });
    });
  });

  describe('fills out the form', () => {
    it('enters a name', () => {
      cy.get('#budget-name').click({ force: true }).type('A test budget');
    });
    it('enters an amount', () => {
      cy.get('#budget-amount').click({ force: true }).type('200');
    });
    it('selects a time period', () => {
      cy.get('#budget-time-period').select('weekly', { force: true });
    });
    it('selects a category', () => {
      cy.get('#budget-category').click();
      cy.get('#budget-category ul li:nth-of-type(2)').click({ force: true });
    });
    it('submits the form', () => {
      cy.get('#submit-new-budget').click();
    });
  });

  describe('saves the budget', () => {
    it('visits budgets page', () => {
      cy.get('.modal-overlay').click({ force: true });
      cy.get('.links > :nth-child(6) > a > p').click();
      cy.contains('Budgets').should('be.visible');
      cy.url().should('include', 'budget');
    });

    it('displays the new transaction', () => {
      cy.contains('A Test Budget').should('be.visible');
    });
  });

  describe('edits the budget', () => {
    it('opens the edit modal', () => {
      cy.get('tr > :nth-child(5) > .waves-effect').click();
    });

    it('edits the transaction', () => {
      cy.get('#edit-budget-name').click().type(' edited');
      cy.get('#save-budget').click();
      cy.get('.modal-overlay').click({ force: true });
      cy.contains('A Test Budget Edited').should('be.visible');
    });
  });

  describe('deletes the budget', () => {
    it('opens the delete confirmation', () => {
      cy.get('tr > :nth-child(6) > .waves-effect').click({ force: true });
    });

    it('removes the budget', () => {
      cy.get('#confirmationModal').contains('Delete').click();
      cy.contains('This is a comment edited').should('not.be.visible');
    });
  });
});
