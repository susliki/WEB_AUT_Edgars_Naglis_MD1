import selectablePage from './selectablePage';

// Noķer un ignorē jebkuras nenoķertas izņēmuma kļūdas
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe('Selectable Item Tests', () => {
  beforeEach(() => {
    selectablePage.visit(); // Pirms katra testa atver testējamo lapu
  });

  it('should highlight selected items and not highlight unselected items', () => {
    selectablePage.clickGridTab(); // CLick uz "Grid" tab
    selectablePage.selectItems(['Two', 'Four', 'Six', 'Eight']); // Izvēlas norādītos elementus

    selectablePage.validateItemsHighlighted(['Two', 'Four', 'Six', 'Eight']); // Pārbaude, iezīmētos elementus
    selectablePage.validateItemsNotHighlighted(['One', 'Three', 'Five', 'Seven', 'Nine']); // Pārbaude, neizīmētos elementos
  });
});