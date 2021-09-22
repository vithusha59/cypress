class example{
    nameFeild() {
        return cy.get('[id="developer-name"]');
    }
    populateButton() {
        return cy.get('[id="populate"]');
    }
    selectCheckout2ND() {
        return cy.get('[id="reusing-js-code"]');
    }
    selectCheckout3RD() {
        return cy.get('[id="background-parallel-testing"]');
    }
    selectOS() {
        return cy.get('[id="linux"]');
    }
    selectDropDown() {
        return cy.get('[id="preferred-interface"]');
    }
    selectTestCafe() {
        return cy.get('[id="tried-test-cafe"]');
    }
    selectScale() {
        return cy.get('.ui-slider-handle')
    }
    enterTextArea() {
        return cy.get('[id="comments"]');
    }
    submitButton() {
        return cy.get('[id="submit-button"]');
    }
    finalResult() {
        return cy.get('[id="article-header"]');
    }

}
export default example;