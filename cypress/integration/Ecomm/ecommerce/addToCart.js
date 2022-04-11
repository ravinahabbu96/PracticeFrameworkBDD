import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"


Given('Open E-Commerce Site', ()=>{
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
})


And('Search product which starts from ca', ()=>{
    cy.get('[class="search-keyword"]').type('ca')
    cy.get('button[type="submit"]').click()
})

And('Add to cart Cashews', ()=>{
    cy.get('h4[class="product-name"]').each((el, i)=>{
        cy.log(el.text())
        if(el.text().replace(' - 1 Kg', ' ').trim() == 'Cashews'){
            cy.get('div[class="product-action"]> button').eq(i).click()
        }
    })

})

When('Place order and select country', ()=>{
    cy.get('img[alt="Cart"]').click()
    cy.get('[class="action-block"]> button').first().click()
    cy.contains('Place Order').click()
    cy.get('select').select('India')
    cy.get('[type="checkbox"]').click()
    cy.get('button').click()

})


Then('Validate the Thank you message', ()=>{
    cy.contains("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!").should('be.visible')

})








