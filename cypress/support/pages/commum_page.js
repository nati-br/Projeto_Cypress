/// <reference types="cypress" />

export default{
    acessarCadastrouduario(){
        cy.visit('/').get('#top_header')
        cy.get('.fa-lock').click()
    },

    acessarLogin() {
        cy.visit('/').get('#top_header')
        cy.contains('a', 'Login').click()
    }
}