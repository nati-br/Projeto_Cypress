/// <reference types="cypress" />
export default{
   clicaCadastrar(){
    cy.get('#btnRegister').click()
   },

   preencherNome(nome){
    cy.get('#user').type(nome)
   },

   preencherEmail(email){
    cy.get('#email').type(email)
   },

    preencherSenha(senha){
    cy.get('#password').type(senha)
   },

    validarMensagemErro(mensagem) {
    cy.get('.errorLabel')
    .should('be.visible')
    .and('have.text', mensagem)
    }


}