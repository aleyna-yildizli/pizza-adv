import React from 'react';
<reference types="cypress" />

describe('Open Pizza Order Application', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should navigate to /pizza when order-pizza button is clicked', () => {
        cy.get('#order-pizza').click();
        cy.url().should('include', '/pizza');
    });
  });

describe('Fill Order Form and Navigate the Result Page', () => {
    beforeEach(() => {
      cy.visit('/pizza');
    });
  
    it('Fill order Form and Navigate', () => {
      cy.get('[data-cy=name-input]').type('Aleyna Yıldızlı');
      cy.get('[data-cy=name-input]').should('have.value', 'Aleyna Yıldızlı');

      cy.get('[data-cy=ingredient-checkbox]').check([
        'Pepporini',
        'Sosis',
        'Kanada Jambonu',
        'Tavuk Izgara',
      ]);
      cy.get('[data-cy=ingredient-checkbox]:checked').should('have.length.gte', 4);
 
      cy.get('[data-cy=kucukBoy]').check().should('be.checked');

      cy.get('[data-cy=hamurSec]').select('Süpper İnce').should('have.value', 'Süpper İnce');

      cy.get('[data-cy=order-button]').click();
      cy.url().should('include', '/result');
    });
});

    
    





    
