import Example from "../POM/example"

describe('Example', function () {
    const example = new Example();
    it('Example', function () {
        cy.visit('https://devexpress.github.io/testcafe/example/');
        cy.wait(1000);
        example.nameFeild().type('test');
        cy.wait(1000);
        example.populateButton().click();
        cy.wait(1000);
        example.selectCheckout2ND().check();
        cy.wait(1000);
        example.selectCheckout3RD().check();
        cy.wait(1000);
        example.selectOS().check();
        cy.wait(1000);
        example.selectDropDown().select('JavaScript API');
        cy.wait(1000);
        example.selectTestCafe().check();
        cy.wait(1000);
        example.selectScale().invoke('attr', 'style', 'left: 44.4444%');
        cy.wait(1000);
        example.enterTextArea().type('Please let us know what you think;');
        cy.wait(1000);
        example.submitButton().click();
        cy.wait(1000);
        example.finalResult().contains('Thank you, Peter Parker!').should('be.visible');
        // example.
    })
})