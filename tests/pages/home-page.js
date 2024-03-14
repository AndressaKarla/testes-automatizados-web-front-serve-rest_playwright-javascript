class HomePage {
    constructor(page) {
        this.page = page;
        this.textoBemVindo = page.locator('#root > div > div > h1')
        this.textoSistemaAdministrarEcommerce = page.locator('#root > div > div > p.lead')
    }
}

module.exports = { HomePage: HomePage }