describe('Validate Orange hrm site', () => {


    it('login with valid crentials', () => {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('[class="search-keyword"]').type('ca')
        cy.get('button[type="submit"]').click()
        cy.get('h4[class="product-name"]').each((el, i) => {
            cy.log(el.text())
            if (el.text().replace(' - 1 Kg', ' ').trim() == 'Cashews') {
                cy.get('div[class="product-action"]> button').eq(i).click()
            }
        })
        cy.get('[class="action-block"]> button').first().click()
        cy.contains('Place Order').click()
        cy.get('select').select('India')
        cy.get('[type="checkbox"]').click()
        cy.get('button').click()

        cy.contains("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!").should('be.visible')




    })
})

