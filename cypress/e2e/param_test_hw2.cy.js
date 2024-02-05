before(() => {
  cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');

  cy.log('Get the 3rd element with header text Light and click on it');
  cy.get('nb-card:nth-of-type(3) nb-card-header').contains('Light').click();

  cy.log('Get the side-menu Modal and Overlays drop-dowm menu open');
  cy.get('a.ng-tns-c141-19').click();

  cy.log('Get the side menu button Form Layout from the drop down menu and click on it');
  cy.get('a.ng-tns-c141-23').click();

})

describe(`Check of the toast messages`, () => {
  let testDataSet1 = [{
    "title": "Success",
    "content": "It is a success message!",
    "timeShow": 5000
  }]

  it('setting the success toast', () => {
    testDataSet1.forEach(({title, content, timeShow }) =>{
      cy
          .get('nb-select.mat-ripple.position-select')
          .click();
      cy
          .get('#nb-option-24')
          .click(); //як правильно прописати в тестДатаСет1 значення айдішника,
      cy
          .get('[name="title"]')
          .clear()
          .type(`${title}`);
      cy
          .get('[name="content"]')
          .clear()
          .type(`${content}`);
      cy
          .get('[name="timeout"]')
          .clear()
          .type(`${timeShow}`);
      cy.get()
      cy
          .get('button.mat-ripple.appearance-filled.size-medium.shape-rectangle.status-basic.nb-transition')
          .should('contain', 'Show toast')
          .click()
          .then(toast => {
        expect(toast).to.have.id('cdk-overlay-0');
        expect(toast).to.have.attr('')
      })
    })
  })
})

describe('template spec', () => {
  it('passes', () => {

  })
})