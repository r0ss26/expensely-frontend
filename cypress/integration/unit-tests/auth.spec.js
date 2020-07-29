/// <reference types="cypress" />

describe('Flow test for login, login and signup', () => {

    //define what suite of tests to perform
    context('Auth', () => {
        //tests to run before each
        beforeEach(() => {
            //first thing is to visit the website
            cy.visit('http://localhost:3000/')
        })

        function login() {
            cy.get('#nav-mobile > :nth-child(2) > .btn').click()
            cy.get('input[name=email]').type('test2@test.com')
            cy.get('input[name=password]').type('test123')
            cy.get('.btn').click()
            cy.contains('Dashboard')
        }

        function logout() {
            cy.contains('Logout').click()
            cy.contains('Expense.ly')
        }

        function signup() {
            cy.get('#nav-mobile > :nth-child(1) > .btn').click()
            cy.get('input[name=firstName').click().type('test')
            cy.get('input[name=lastName').click().type('123')
            cy.get('input[name=email').click().type(`${Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)}@test.com`)
            cy.get('input[name=password]').click().type('test123')
            cy.get('input[name=confirmPassword]').click().type('test123')
            cy.get('.btn').click()
            cy.contains('Dashboard')
        }

        it('user can login and logout', () => {
            login()
            logout()
        })

        it('user can signup', () => {
            signup()
            logout()
        })

    })


})