
describe('suite name', () => {

    it('Verify Title - Positive Test', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")

        cy.title().should('eq','OrangeHRM')

    })

    it('Verify Title - Negative Test', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")

        cy.title().should('eq','OrangeHRsdfgM')

    })
})