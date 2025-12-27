/// <reference types="cypress" />

export default {
    preencherEmail(Email) {
        cy.get('#user').type(Email)
    },

    preencherSenha(Senha){
        cy.get('#password').type(Senha)
    },

    clicarLogin() {
        cy.get('#btnLogin').click()
    },

    validarMensagemErroSenha(mensagem) {
        cy.contains('span', mensagem).should('be.visible')
    },

    validarMensagemErroEmail(mensagem) {
        cy.contains('span', mensagem).should('be.visible')
    }

}