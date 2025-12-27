import commum_page from "../support/pages/commum_page"
import cadastro_usuario_page from "../support/pages/cadastro_usuario_page"
import login_usuario_page from "../support/pages/login_usuario_page"
import { mensagens_erro_login } from "../support/constants/mesagens_login"  
import { faker } from "@faker-js/faker"

describe('Login', () => {

    let usuario

    beforeEach(() => {
        usuario = {
            nome: faker.person.fullName(),
            email: faker.internet.email(),
            senha: faker.internet.password({ length: 8 })
        }

        // Cadastro
        commum_page.acessarCadastrouduario()
        cadastro_usuario_page.preencherNome(usuario.nome)
        cadastro_usuario_page.preencherEmail(usuario.email)
        cadastro_usuario_page.preencherSenha(usuario.senha)
        cadastro_usuario_page.clicaCadastrar()
        cadastro_usuario_page.clicarOk()

        // Login
        commum_page.acessarLogin()
    })

    it('Login com sucesso', () => {
        login_usuario_page.preencherEmail(usuario.email)
        login_usuario_page.preencherSenha(usuario.senha)
        login_usuario_page.clicarLogin()

       
    })

    it('Login com senha com menos de 6 digitos', () => {
        login_usuario_page.preencherEmail(usuario.email)
        login_usuario_page.preencherSenha('123')
        login_usuario_page.clicarLogin()
        login_usuario_page.validarMensagemErroSenha(mensagens_erro_login.senhaIvalida)

    })

    it('Login com e-mail invalido', () => {
        login_usuario_page.preencherEmail('GGGgg')
        login_usuario_page.preencherSenha(usuario.senha)
        login_usuario_page.clicarLogin()
        login_usuario_page.validarMensagemErroSenha(mensagens_erro_login.emailnvalido)

    })

    it('Login com e-mail vazio', () => {
        login_usuario_page.preencherSenha(usuario.senha)
        login_usuario_page.clicarLogin()
        login_usuario_page.validarMensagemErroSenha(mensagens_erro_login.emailnvalido)

    })

    it('Login com senha vazia', () => {
        login_usuario_page.preencherEmail(usuario.email)
        login_usuario_page.clicarLogin()
        login_usuario_page.validarMensagemErroSenha(mensagens_erro_login.senhaIvalida)

    })
})