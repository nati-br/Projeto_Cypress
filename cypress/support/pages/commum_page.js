/// <reference types="cypress" />
export default{
    acessarCadastrouduario(){
        cy.visit('/').get('#top_header')
        cy.get('.fa-lock').click()
    }
}