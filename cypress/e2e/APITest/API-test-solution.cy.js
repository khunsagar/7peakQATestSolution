/// <reference types="Cypress" />
import * as API from '../../support/APITestCase/APITest'

describe('API Test solution ', () => {
  it('Should validate total pages in response is always 2 ', () => {
    API.verifytotalPageCount();

  })

  it('Should validate status code = 200 ', () => {
    API.verifyResponseCode();

  })

  it('Should validate email have value byron.fields@reqres.in ', () => {
    API.verifyEmailInRes();

  })
});
