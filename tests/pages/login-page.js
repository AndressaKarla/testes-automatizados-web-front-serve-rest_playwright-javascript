class LoginPage {
    constructor(page) {
        this.page = page;
        this.campoEmail = page.locator('#email')
        this.campoSenha = page.locator('input[id="password"]')
        this.botaoEntrar = page.locator('button[type="submit"]')
        this.formLogin = page.locator('form[class="form"]')
    }

    async acessarBaseURLFront() {
        await this.page.goto('/login')
    }

    async realizarLoginBotaoEntrar(email, senha) {
        await this.campoEmail.waitFor('visible')
        await this.campoEmail.fill(email)

        await this.campoSenha.waitFor('visible')
        await this.campoSenha.fill(senha)

        await this.botaoEntrar.waitFor('visible')
        await this.botaoEntrar.click()
    }
}

module.exports = { LoginPage: LoginPage }