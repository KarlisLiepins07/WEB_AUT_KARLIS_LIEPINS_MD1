class SelectablePage {
    // Define methods to interact with the page elements

    // Method to click on the "Grid" option
    clickGrid() {
        cy.contains('Grid').click();
    }

    // Method to click on specific items - "Two", "Four", "Six", "Eight"
    clickItems(items) {
        items.forEach(item => {
            cy.contains(item).click();
        });
    }

    // Method to validate selected items are highlighted
    validateSelectedItems() {
        cy.get('.list-group-item', {timeout: 10000}).should('have.length', 13);
    }

    // Method to validate unselected items are not highlighted
    validateUnselectedItems() {
        cy.contains('One').should('not.have.class', 'ui-selected');
        cy.contains('Three').should('not.have.class', 'ui-selected');
        cy.contains('Five').should('not.have.class', 'ui-selected');
        cy.contains('Seven').should('not.have.class', 'ui-selected');
        cy.contains('Nine').should('not.have.class', 'ui-selected');
    }
}

// Export the SelectablePage class/module
export default new SelectablePage();