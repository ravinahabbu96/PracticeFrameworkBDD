import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


Given('User send the request for get multiple users', () => {
    cy.request({
        method: "GET",
        url: 'https://reqres.in/api/users?page=2',
    }).as('getUser')
})


Then('Users should be display', () => {

    cy.get('@getUser').then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).property('page')
        expect(response.body.page).to.eq(2)
        expect(response.body.data.length).to.eq(6)
        expect(response.body).property('data').with.lengthOf(6)
        expect(response.body).to.include.keys("total_pages", "per_page")
    })
})



Given('User send the post request to create with {word} and {word}', (name, job) => {
    cy.request({
        method: 'POST',
        url: "https://reqres.in/api/users",
        body: {
            "name": name,
            "job": job
        }
    }).as('postUser')
})


Then('User should be created with {word} and {word}', (name, job) => {

    cy.get('@postUser').then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body).property('id')
        expect(response.body).property('createdAt')
        expect(response.body.name).to.eq(name)
        expect(response.body.job).to.eq(job)
        expect(response.body).to.have.property('id')

       
    })

  
})