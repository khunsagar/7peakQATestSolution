/// <reference types="Cypress" />

const url = 'https://reqres.in/api/users?page=2'

export function verifyResponseCode()
{
    return cy
      .request({
        method: 'GET',
        url: url
      })
      .then((response) => {
        cy.log(JSON.stringify(response))
        // STATUS CODE = 200
        expect(response.status).to.eq(200);
})
}

export function verifytotalPageCount()
{
    return cy
      .request({
        method: 'GET',
        url: url
      })
      .then((response) => {
        cy.log(JSON.stringify(response))        // 'total_pages = 2'
        expect(response.body.total_pages).to.eq(2);
      });
}

export function verifyEmailInRes()
{   const email = [];
    return cy
      .request({
        method: 'GET',
        url: url
      })
      .then((response) => {
        cy.log(JSON.stringify(response))   
        Cypress._.each(response.body.data, (useemail) => {
          email.push(useemail.email);
          // expect(useemail.email).to.include(['byron.fields@reqres.in']);
        });
        expect(JSON.stringify(email)).to.include(['byron.fields@reqres.in']);
      });
}
