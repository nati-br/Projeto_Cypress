/// <reference types="cypress" />
import commum_page from "../support/pages/commum_page"
import cadastro_usuario_page from "../support/pages/cadastro_usuario_page"
import { mensagens_validacao_cadastro, mensagens_erro_cadastro } from "../support/constants/mensagens_cadastro"
import { faker} from "@faker-js/faker"
describe('Cadastro de usuário ', ()=>{
    beforeEach('Acessar cadastro de usuário', ()=>{
        commum_page.acessarCadastrouduario()
    })

    it('cadastro Nome vazio', () =>{
        cadastro_usuario_page.clicaCadastrar()
        cadastro_usuario_page.validarMensagemErro(mensagens_erro_cadastro.nomeObrigatorio)

    })

     it('cadastro E-mail vazio', () => {
         cadastro_usuario_page.preencherNome(faker.person.fullName())
         cadastro_usuario_page.clicaCadastrar()
        cadastro_usuario_page.validarMensagemErro(mensagens_erro_cadastro.emailObrigatorio)
    })

     it('cadastro E-mail inválido', () =>{
        cadastro_usuario_page.preencherNome(faker.person.fullName())
        cadastro_usuario_page.preencherEmail(faker.person.fullName())
        cadastro_usuario_page.clicaCadastrar()
        cadastro_usuario_page.validarMensagemErro(mensagens_erro_cadastro.emailObrigatorio)
    })

     it('cadastro Senha vazia', () =>{
         cadastro_usuario_page.preencherNome(faker.person.fullName())
         cadastro_usuario_page.preencherEmail(faker.internet.email())
         cadastro_usuario_page.clicaCadastrar()
        cadastro_usuario_page.validarMensagemErro(mensagens_erro_cadastro.senhaObrigatoria)
    })

    it('cadastro Senha inválida', () =>{
        cadastro_usuario_page.preencherNome(faker.person.fullName())
        cadastro_usuario_page.preencherEmail(faker.internet.email())
        cadastro_usuario_page.preencherSenha(faker.internet.password({ length: 5 }))
        cadastro_usuario_page.clicaCadastrar()
        cadastro_usuario_page.validarMensagemErro(mensagens_erro_cadastro.senhaObrigatoria)
    })

     it('cadastro com sucesso', () =>{

        const nomeGerado = faker.person.fullName();
        cadastro_usuario_page.preencherNome(nomeGerado)
        cadastro_usuario_page.preencherEmail(faker.internet.email())
        cadastro_usuario_page.preencherSenha(faker.internet.password({ length: 8 }))
        cadastro_usuario_page.clicaCadastrar()
        cadastro_usuario_page.validarMensagemSucesso(mensagens_validacao_cadastro.cadastroSucesso)
        cadastro_usuario_page.validarMensagemSucesso2(nomeGerado)
        cadastro_usuario_page.clicarOk()
        
    })
  
})