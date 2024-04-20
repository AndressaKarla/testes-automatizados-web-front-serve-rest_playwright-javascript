import { expect } from '@playwright/test'
import playwrightConfig from '../../../playwright.config'

class Api {
    constructor(request) {
        this.request = request
        this.baseUri = playwrightConfig.use.baseURL
    }

    async obterPorEmailEincluirUsuarioAdmin(nomeSobrenome, email, senha) {
        const getEmailUsuarioAdmin = await this.request.get(`${this.baseUri}/usuarios?email=${email}`)
        const retornoGetEmailUsuarioAdmin = JSON.parse(await getEmailUsuarioAdmin.text())

        if (retornoGetEmailUsuarioAdmin.quantidade == 0) {
            const postUsuarioAdmin = await this.request.post(`${this.baseUri}/usuarios`, {
                data: {
                    nome: nomeSobrenome,
                    email: email,
                    password: senha,
                    administrador: "true"
                }
            })

            expect(postUsuarioAdmin.ok()).toEqual(true)
        }
    }
}

module.exports = { Api: Api }

