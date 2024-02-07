before(() => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');

    cy.log('Get the 3rd element with header text Light and click on it');
    cy.get('nb-card:nth-of-type(3) nb-card-header').contains('Light').click();

    cy.log('Get the side-menu Modal and Overlays drop-dowm menu open');
    cy.get('a.ng-tns-c141-19').click();

    cy.log('Get the side menu button Form Layout from the drop down menu and click on it');
    cy.get('a.ng-tns-c141-23').click();

})

describe ('test toast', () => {
    const tableTestData = [
        {
            inputTest: {
                position: 'top-right',
                title: 'test title 1',
                content: 'test content 1',
                time: '10000',
                type: 'primary'
            },
            expectedTest: {
                icon: 'email',
                title: 'test title 1',
                content: 'test content 1',
                color: 'rgb(51, 102, 255)',
                position: {
                    justifyContent: "flex-end",
                    alignItems: "flex-start"
                }
            }
        }
    ];

    it('Create toast', () => {
        cy.get('div.col-md-6.col-sm-12 button.select-button').eq(0).click();
        cy.get(`nb-option[ng-reflect-value="${tableTestData[0].inputTest.position}"]`).click();
        cy.get(`input[name="title"]`).clear().type(`${tableTestData[0].inputTest.title}`);
        cy.get(`input[name="content"]`).clear().type(`${tableTestData[0].inputTest.content}`);
        cy.get(`input[name="timeout"]`).clear().type(`${tableTestData[0].inputTest.time}`);
        cy.get('div.col-md-6.col-sm-12 button.select-button').eq(1).click();
        cy.get(`nb-option[ng-reflect-value="${tableTestData[0].inputTest.type}"]`).click();
        cy.contains('button', 'Show toast').click();

        cy.get(`div.icon-container.ng-star-inserted g`).eq(1).then(toast => {
            expect(toast).to.have.attr('data-name', `${tableTestData[0].expectedTest.icon}`);
        })
        cy.get('div.content-container span').then(toast => {
            expect(toast).to.have.class('title subtitle');//.to.equal(`${tableTestData[0].expectedTest.title}`); - не розумію чому не працює
        })
        cy.get('div.content-container div').then(toast => {
            expect(toast).to.have.class('message');
        })
        //cy.get('#cdk-overlay-0').invoke('css', 'background-color').as('backgroundColor');
        //cy.get('@backgroundColor').should('eq', `${tableTestData[0].expectedTest.color}`); - я так розумію тут також має бути then але як побудувати це із then
        cy.get(`div [dir="ltr"]`).then(toast => {
            const expectedStyle = `justify-content: ${tableTestData[0].expectedTest.position.justifyContent}; align-items: ${tableTestData[0].expectedTest.position.alignItems};`;
            expect(toast).to.have.attr('style', expectedStyle); //можливо можна якось краще це записати?
        })
    })
})
