import React from 'react';
<reference types="cypress" />

describe('Pizza Siparişi Testleri', () => {
    beforeEach(() => {
   
      cy.visit('http://localhost:5174/pizza')
    });




    it('İsme metin girişi yapmalı', () => {
        cy.visit('http://localhost:5174/pizza');
    
        cy.get('[data-cy=name-input]')
                .type('Ayumi Hamasaki') 
                .should('have.value', 'Ayumi Hamasaki');
    
        });


        it('Malzeme seçimi yapılmalı', () => {
            cy.visit('http://localhost:5174/pizza');

            cy.get('[data-cy=ingredient-checkbox]').check(['Pepporini', 'Sosis', 'Kanada Jambonu', 'Tavuk Izgara', 'Soğan', 'Domates', 'Mısır', 'Sucuk', 'Jalepeno', 'Sarımsak']);
    
            cy.get('[data-cy=ingredient-checkbox]:checked').should('have.length.at.least', 10);
        });

    });
    
