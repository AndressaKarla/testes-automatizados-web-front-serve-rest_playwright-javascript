const carregarFixture = async (nomeArquivo) => {
    const fixture = require(`./fixtures/${nomeArquivo}`)
    return fixture
}

module.exports = { carregarFixture }