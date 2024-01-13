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



    it('Pizza boyutu seçilmelidir', () => {
        cy.visit('http://localhost:5174/pizza');
        cy.get('[data-cy=kucukBoy]').check().should('be.checked');
        cy.get('[data-cy=ortaBoy]').check().should('be.checked');
        cy.get('[data-cy=buyukBoy]').check().should('be.checked');
        });


    it('Bir hamur seçilmelidir', () => {
        cy.visit('http://localhost:5174/pizza');
        cy.get('[data-cy=hamurSec]').select('Süpper İnce').should('have.value', 'Süpper İnce');
        cy.get('[data-cy=hamurSec]').select('İnce Kenar').should('have.value', 'İnce Kenar');
        cy.get('[data-cy=hamurSec]').select('Normal').should('have.value', 'Normal');
        cy.get('[data-cy=hamurSec]').select('Kalın Kenar').should('have.value', 'Kalın Kenar');
    });
        
         
});
        



    
