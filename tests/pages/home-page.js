class HomePage {
    constructor(page) {
        this.page = page;
        this.textoBemVindo = page.locator('h1')
        this.textoSistemaAdministrarEcommerce = page.locator('p.lead')
    }
}

module.exports = { HomePage: HomePage }