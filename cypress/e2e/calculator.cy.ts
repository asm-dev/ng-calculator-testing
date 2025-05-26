describe('Calculator E2E - Initial state and operations', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should show initial values as 0 and result as "Resultado: 0"', () => {
    cy.get('input').eq(0).should('have.value', '0');
    cy.get('input').eq(1).should('have.value', '0');
    cy.contains('Resultado: 0').should('exist');
  });

  it('should allow entering values and calculate sum correctly', () => {
    cy.get('input').eq(0).clear().type('5');
    cy.get('input').eq(1).clear().type('3');

    cy.contains('Sumar').click();
    cy.contains('Resultado: 8').should('exist');
  });

  it('should calculate subtraction correctly', () => {
    cy.get('input').eq(0).clear().type('10');
    cy.get('input').eq(1).clear().type('4');

    cy.contains('Restar').click();
    cy.contains('Resultado: 6').should('exist');
  });

  it('should calculate multiplication correctly', () => {
    cy.get('input').eq(0).clear().type('7');
    cy.get('input').eq(1).clear().type('6');

    cy.contains('Multiplicar').click();
    cy.contains('Resultado: 42').should('exist');
  });
});
