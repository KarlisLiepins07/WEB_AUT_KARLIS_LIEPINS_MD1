import SelectablePage from '../support/page_objects/selectablePage'; // Check this import statement
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe('Selectable Test', () => {
    it('Should select specific items', () => {
        // Navigate to the Selectable page
        cy.visit('https://demoqa.com/selectable');

        // Click "Grid"
        SelectablePage.clickGrid(); // Check this method call

        // Click specific items - "Two", "Four", "Six", "Eight"
        SelectablePage.clickItems(['Two', 'Four', 'Six', 'Eight']); // Check this method call

        // Validate selected items are highlighted
        SelectablePage.validateSelectedItems(['Two', 'Four', 'Six', 'Eight']); // Check this method call

        // Validate unselected items are not highlighted
        SelectablePage.validateUnselectedItems(['One', 'Three', 'Five', 'Seven', 'Nine']); // Check this method call
    });
});
