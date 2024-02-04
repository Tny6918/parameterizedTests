beforeEach(() => {
  cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');

  cy.log('Get the 3rd element with header text Light and click on it');
  cy.get('nb-card:nth-of-type(3) nb-card-header').contains('Light').click();

  cy.log('Get the side-menu Forms drop-dowm menu open');
  cy.get('a.ng-tns-c141-9.ng-star-inserted').click();

  cy.log('Get the side menu button Form Layout from the drop down menu and click on it');
  cy.get('a.ng-tns-c141-11').click();

})

describe('filling out the form', () => {

  let testData = [{
    "firstName": "Anton",
    "lastName": "Savenko",
    "email": "antonsave69@gmail.com",
    "website": "google.com"
  }]

  testData.forEach(({firstName, lastName, email, website}) => {
    it(`adding field value`, () => {
      cy.get('#inputFirstName').type(`${firstName}`);
      cy.get('#inputLastName').type(`${lastName}`);
      cy.get('#inputEmail').type(`${email}`);
      cy.get('#inputWebsite').type(`${website}`);
    })
  })
})