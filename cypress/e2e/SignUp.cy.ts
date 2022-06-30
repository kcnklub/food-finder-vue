// https://docs.cypress.io/api/introduction/api.html

describe('Signing Up for Food finder', () => {
    it('Sign Up Fails', () => {
        cy.visit('/signup');
        cy.get('button').click();
        cy.get('.error-message').contains('Username is empty.')
    })

    it('Sign up successful', () => {
        cy.visit('/signup')
        cy.get('#username').type('username')
        cy.get('#email').type('kylemiller@gmail.come')
        cy.get('#password').type('myPassword')
        cy.get('#confirm-password').type('myPassword')
        cy.get('button').click();
        cy.get('.error-message').should('be.empty');
    })
})
