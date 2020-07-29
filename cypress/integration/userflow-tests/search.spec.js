//define what suite of tests to perform
import capitalize from '../../../src/utils/capitalize'

describe('Searching an item', () => {

    context('Search', () => {
        //tests to run before each
        beforeEach(() => {
            //first thing is to visit the website
            cy.visit('http://localhost:3000')
        })

        function login() {
            cy.get('#nav-mobile > :nth-child(2) > .btn').click()
            cy.get('input[name=email]').type('test2@test.com')
            cy.get('input[name=password]').type('test123')
            cy.get('.btn').click()
            cy.contains('Dashboard')
        }

        function searchItem(input) {
            cy.get('.links > :nth-child(7) > a > .small').click()
            cy.get('#search').click().type(input)
            cy.get('tbody > tr > :nth-child(1)').contains(capitalize(input))
        }


        function updateItem(input) {
            cy.get(':nth-child(4) > .waves-effect').click()
            cy.get('.open > .modal-content > form > :nth-child(1) > .category_name').clear().type(input)
            cy.get('.open > .modal-content > .modal-footer >.btn-flat').click()
            cy.get('#search').clear()
        }


        function deleteItem(input) {
            cy.get('[href="#confirmationModal"]').click()
            cy.get('[data-tag="delete"]').click()
        }

        function addItem(input) {
            cy.get('.links > :nth-child(7) > a').click()
            cy.get('[data-tag="addBtn"]').trigger('mouseover').invoke('show')
            cy.get('a.btn-floating').should('be.visible')
            cy.get('[href="#create-category-modal"]').click({ force: true })
            cy.get('#expense').click()
            cy.get('input[name=categoryName]').click().type(input)
            cy.get('#create-category-modal > .modal-content > form > :nth-child(2) > .slider-picker > :nth-child(2) > [style="margin-top: 20px;"] > :nth-child(2) > div').click()
            cy.get('[data-tag="addCategory"]').click()
            cy.get('.modal-overlay').click({ force: true })
            cy.get('.container > :nth-child(2) > :nth-child(3)').click()

        }

        //search the category magazine
        //updates to books
        //search books
        //delete books
        //add back magazine
        //search magazine
        it('performs CRUD for item', () => {
            login()
            searchItem('magazine')
            updateItem('books')
            searchItem('books')
            deleteItem('books')
            addItem('magazine')
            searchItem('magazine')
        })
    })
})

