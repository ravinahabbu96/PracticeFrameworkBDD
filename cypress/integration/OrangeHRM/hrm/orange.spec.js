describe('Validate Prange hrm site', ()=>{


    it('login with valid crentials', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/dashboard')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()
        cy.contains('Dashboard').should('be.visible')
    })
})