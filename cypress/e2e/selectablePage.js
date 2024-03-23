class SelectablePage {
  constructor() {
    this.url = 'https://demoqa.com/selectable'; // Lapas URL
    this.gridTab = '[id="demo-tab-grid"]'; // Selektors "Grid" tabam
    this.selectableItems = '#gridContainer .list-group-item'; // Selektors visiem izvēlētajiem elementiem
  }

  // Atver lapu 
  visit() {
    cy.visit(this.url); 
  }

  // Click uz "Grid" tab
  clickGridTab() {
    cy.get(this.gridTab).click(); 
  }

  selectItems(itemLabels) {
    itemLabels.forEach(label => {
      cy.get(this.selectableItems).contains(label).click(); // Atrod un noklikšķina uz norādītajiem elementiem pēc to nosaukumiem
    });
  }
  
  //Validacija atzimētie
  validateItemsHighlighted(itemLabels) {
    itemLabels.forEach(label => {
      cy.get(this.selectableItems)
        .contains(label)
        .should('have.class', 'active'); // Pārbaude, vai norādītie elementi ir iezīmēti 
    });
  }

  //Validacija neatzimētie
  validateItemsNotHighlighted(itemLabels) {
    itemLabels.forEach(label => {
      cy.get(this.selectableItems)
        .contains(label)
        .should('not.have.class', 'active'); // Pārbaude, vai norādītie elementi nav iezīmēti 
    });
  }
}

export default new SelectablePage();
