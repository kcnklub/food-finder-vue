// https://docs.cypress.io/api/introduction/api.html

describe('Signing Up for Food finder', () => {
    it('Sign Up Fails', () => {
        cy.visit('/signup');
        cy.get('.sign-up-button').click();
        cy.get(".error-message").contains("Username is empty.")
    })
})
