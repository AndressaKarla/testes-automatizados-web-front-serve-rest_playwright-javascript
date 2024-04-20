const { test, expect } = require('@playwright/test')
const { LoginPage } = require('./pages/login-page')
const { HomePage } = require('./pages/home-page')
const { Api } = require('./support/api/api')
const { carregarFixture } = require('./support/helpers')

/*
  Funcionalidade: Tela Login - Botão Entrar
    Como usuário da Tela Login do front do ServeRest
    Quero clicar no Botão Entrar
    Para validar o comportamento da funcionalidade
*/

test.describe('Funcionalidade: Tela Login - Botão Entrar', () => {
  let usuarioFixture, apiRequest, loginFixture, loginPage, homePage 

  test.beforeAll(async ({ request }) => {
    usuarioFixture = await carregarFixture('usuario')
    apiRequest = new Api(request)
    await apiRequest.obterPorEmailEincluirUsuarioAdmin(usuarioFixture.adminValido.nomeValido, usuarioFixture.adminValido.emailValido, usuarioFixture.adminValido.senhaValida)
  })

  test.beforeEach(async ({ page }) => {
    loginFixture = await carregarFixture('login')
    loginPage = new LoginPage(page)
    homePage = new HomePage(page)
    await loginPage.acessarBaseURLFront()
  })

  test.describe('Cenário: Validar Login usuário administrador', () => {
    test('Então deverá apresentar a tela Home com o texto Bem Vindo e com o texto Este é seu sistema para administrar seu ecommerce', async ({ page }) => {
      await loginPage.realizarLoginBotaoEntrar(loginFixture.adminValido.emailValido, loginFixture.adminValido.senhaValida)

      await page.waitForURL('admin/home')
      await expect(page).toHaveURL('admin/home')

      await expect(homePage.textoBemVindo).toHaveText(/Bem Vindo/)
      await expect(homePage.textoSistemaAdministrarEcommerce).toHaveText('Este é seu sistema para administrar seu ecommerce.')
    })
  })

  const exemplos = [
    { email: 'emailInvalidoVazio', senha: 'senhaInvalidaVazia', mensagem: '×Email é obrigatório×Password é obrigatório' },
    { email: 'emailInvalidoDominioSemPonto', senha: 'senhaValida', mensagem: 'Email deve ser um email válido' },
    { email: 'emailInvalidoNaoCadastrado', senha: 'senhaInvalidaNaoCadastrada', mensagem: 'Email e/ou senha inválidos' },
  ]

  exemplos.forEach((ex) => {
    test.describe(`Esquema do Cenário: Validar Login usuários inválidos: ${ex.email} e ${ex.senha}`, async () => {
      test(`Então na tela Login deverá apresentar a mensagem: ${ex.mensagem}`, async () => {
        await loginPage.realizarLoginBotaoEntrar(loginFixture.invalido[ex.email], loginFixture.invalido[ex.senha])

        await expect(loginPage.formLogin).toContainText(ex.mensagem)
      })
    })
  })
})



