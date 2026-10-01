const { test, expect } = require('@playwright/test')
const { LoginPage } = require('./pages/login-page')
const { HomePage } = require('./pages/home-page')
const { Api } = require('./support/api/api')
const { carregarFixture } = require('./support/utils')

test.describe('Funcionalidade: Tela Login \n- Como usuário da Tela Login do front do ServeRest \n- Quero clicar no botão Entrar \n- Para validar o comportamento da funcionalidade', () => {
  let usuarioFixture, apiRequest, loginPage, homePage

  test.beforeAll(async ({ request }) => {
    usuarioFixture = await carregarFixture('usuario')
    apiRequest = new Api(request)
    await apiRequest.obterPorEmailEcadastrarUsuarioAdminPelaAPI(usuarioFixture.adminValido.nomeValido, usuarioFixture.adminValido.emailValido, usuarioFixture.adminValido.senhaValida)
  })

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    homePage = new HomePage(page)

    // Acessar a tela de Login do front do ServeRest
    await loginPage.acessarBaseURLFront()
  })

  test('Cenário: Login com usuário administrador - Apresentar tela Home com textos de boas vindas e de administrar ecommerce', async ({ page }) => {
    // Informar os campos de email e senha de um usuário administrador
    await loginPage.realizarLogin(usuarioFixture.adminValido.emailValido, usuarioFixture.adminValido.senhaValida)

    // Apresentar a tela Home com texto Bem Vindo
    await page.waitForURL('admin/home')
    await expect(page).toHaveURL('admin/home')
    await expect(homePage.textoBemVindo).toHaveText(/Bem Vindo/)

    // Apresentar a tela Home com texto Este é seu sistema para administrar seu ecommerce
    await expect(homePage.textoSistemaAdministrarEcommerce).toHaveText('Este é seu sistema para administrar seu ecommerce.')
  })

  const exemplos = [
    { email: 'emailInvalidoVazio', senha: 'senhaInvalidaVazia', mensagem: '×Email é obrigatório×Password é obrigatório' },
    { email: 'emailInvalidoDominioSemPonto', senha: 'senhaValida', mensagem: 'Email deve ser um email válido' },
    { email: 'emailInvalidoNaoCadastrado', senha: 'senhaInvalidaNaoCadastrada', mensagem: 'Email e/ou senha inválidos' },
  ]

  exemplos.forEach((ex) => {
    test(`Cenário: Login com usuário inválido (${ex.email} e ${ex.senha}) - Apresentar mensagem ${ex.mensagem}`, async () => {
      // Informar os campos de email e senha inválidos
      await loginPage.realizarLogin(usuarioFixture.invalido[ex.email], usuarioFixture.invalido[ex.senha])

      // Na tela Login apresentar mensagens de obrigatoriedade ou de campos inválidos
      await expect(loginPage.formLogin).toContainText(ex.mensagem)
    })
  })
})



