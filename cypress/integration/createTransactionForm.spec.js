describe('Create a new transaction', () => {
  it('Registers a user', () => {
    cy.request('POST', '/users/register', { })
  })

  it('Logs in', () => {
    cy.get(':nth-child(1) > .input-field').type()
  })
})