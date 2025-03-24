---
# :test_tube: Projeto de Testes Funcionais Automatizados Web | Playwright | Javascript | Page Objects | GitHub Actions 
[![Badge ServeRest](https://img.shields.io/badge/API-ServeRest-green)](https://github.com/ServeRest/ServeRest/)
---
# :information_source: Introdução
Me baseei e adaptei parte do que foi ensinado nos cursos ["Playwright eXpress"](https://www.udemy.com/course/playwright-express) e ["Playwright Zombie Edition"](https://www.udemy.com/course/playwright-zombie) da ["QAx"](https://cursos.qaxperience.com/pt) para esse projeto "testes-automatizados-web-front-serve-rest_playwright-javascript" que é executado em um ambiente de produção no ["front"](https://front.serverest.dev) e na ["API REST"](https://serverest.dev) do ["ServeRest"](https://github.com/ServeRest) que simula uma loja virtual, nos navegadores Chrome e Firefox, Sistemas Operacionais Windows e Linux Ubuntu, e que foi desenvolvido com o objetivo de praticar ainda mais testes automatizados web em Playwright, Javascript, Page Objects e GitHub Actions.

---
# :warning: _Instruções considerando Windows 10, para outras versões do Windows ou outros sistemas operacionais talvez seja necessário algumas adaptações_
# :dart: Executar os testes automatizados Web no navegador chrome, firefox, etc em modo headless (2º plano) em um ambiente de produção e Gerar os resultados dos testes no GitHub Actions
- Nesse repositório, acessar a aba "Actions"
- Na seção "Actions", clicar em "Pipeline Testes Automatizados Web Front ServeRest Playwright"
- Em "This workflow has a workflow_dispatch event trigger.", clicar em "Run workflow" > "Run workflow" para executar testes automatizados Web no navegador chrome, firefox, etc em modo headless (2º plano) em um ambiente de produção e Gerar os resultados dos testes no GitHub Actions [com os conteúdos de "secrets.USUARIO_ENV", etc (baseado nos arquivos ["usuario.example.json"](https://github.com/AndressaKarla/testes-automatizados-web-front-serve-rest_playwright-javascript/blob/main/tests/support/fixtures/usuario.example.json), etc, e configurados na aba "Settings" desse repositório > "Secrets and variables" > "Actions" > "Secrets" > "Repository secrets") que foram redirecionados para os arquivos "usuario.json", etc]
- Após o término da execução, clicar na run "Pipeline Testes Automatizados Web Front ServeRest Playwright"
- Na seção "Artifacts", clicar em "playwright-report-html-chrome", "playwright-report-html-firefox, etc 
- Na janela aberta, escolher um diretório para baixar a pasta compactada "playwright-report-html-chrome.zip", "playwright-report-html-firefox.zip", etc
- Na seção "Artifacts", clicar em "playwright-screenshots-videos-chrome", "playwright-screenshots-videos-firefox", etc
- Na janela aberta, escolher um diretório para baixar a pasta compactada "playwright-screenshots-videos-chrome.zip", "playwright-screenshots-videos-firefox.zip", etc

# :mag_right: Verificar no navegador padrão o report html gerado e armazenado anteriormente no GitHub Actions e descompactado no computador 
- No Windows 10, abrir uma janela do "Windows Explorer"
- Acessar o diretório onde foi baixada a pasta compactada "playwright-report-html-chrome.zip", "playwright-report-html-firefox", etc anteriormente
- Descompactar a pasta
- Acessar a pasta descompactada "playwright-report-html-chrome", "playwright-report-html-firefox", etc
- Clicar 2 vezes sob o report "index.html" gerado e armazenado anteriormente no GitHub Actions e descompactado para ser aberto e verificado no navegador padrão no computador

# :mag_right: Verificar os screenshots e vídeos gerados e armazenados anteriormente no GitHub Actions e descompactados no computador
- Abrir uma outra janela do "Windows Explorer"
- Acessar o diretório onde foi baixada a pasta compactada "playwright-screenshots-videos-chrome.zip", "playwright-screenshots-videos-firefox.zip", etc anteriormente
- Descompactar a pasta
- Acessar a pasta descompactada "playwright-screenshots-videos-chrome", "playwright-screenshots-videos-firefox", etc 
- Na pasta descompactada "playwright-screenshots-videos-chrome", "playwright-screenshots-videos-firefox", etc acessada anteriormente, acessar "test-results > nome-arquivo-nome-describe-nome-cenario1-navegador1", "test-results > nome-arquivo-nome-describe-nome-cenariox-navegadorx", etc
- Clicar 2 vezes sob os screenshots gerados e armazenados anteriormente no GitHub Actions e descompactados para ser abertos e verificados no computador
```
- test-finished-x.png
  . . .
- test-failed-x.png
```

Ex.1: "test-results > login-entrar-Funcionalidade-Tela-Login---Botão-cca59-te-é-seu-sistema-para-administrar-seu-ecommerce-chromium"
```
- test-finished-1.png
``` 

Ex.2: "test-results > login-entrar-Funcionalidade-Tela-Login---Botão-227d2-gem-×Email-é-obrigatório×Password-é-obrigatório-firefox"
```
- test-failed-1.png
``` 

- Na pasta descompactada "playwright-screenshots-videos-chrome", "playwright-screenshots-videos-firefox", etc acessada anteriormente, acessar "test-results > nome-arquivo-nome-describe-nome-cenario1-navegador1", "test-results > nome-arquivo-nome-describe-nome-cenariox-navegadorx", etc
- Clicar 2 vezes sob os vídeos gerados e armazenados anteriormente no GitHub Actions e descompactados para ser abertos e verificados no computador
```
- video.webm
```

Ex.1: "test-results > login-entrar-Funcionalidade-Tela-Login---Botão-cca59-te-é-seu-sistema-para-administrar-seu-ecommerce-chromium"
```
- video.webm
``` 

Ex.2: "test-results > login-entrar-Funcionalidade-Tela-Login---Botão-227d2-gem-×Email-é-obrigatório×Password-é-obrigatório-firefox"
```
- video.webm
```

---
# :warning: Antes de clonar ou executar esse projeto localmente no computador, é necessário ter os pré-requisitos e seguir as instruções abaixo :point_down:
## :hammer_and_wrench: Janela do "Windows Explorer" > aba "Exibir" e marcar algumas opções
- Abrir uma janela do "Windows Explorer"
- Clicar na aba "Exibir" 
- Marcar a opção "Extensões de nomes de arquivos"
- Marcar a opção "Itens ocultos"

## :hammer_and_wrench: Baixar e instalar o git e gitbash; configurar o git
- Caso ainda não tenha o git e gitbash baixado e instalado, acessar o link do [git e gitbash](https://git-scm.com/download/win), baixar e instalar como administrador
- Caso ainda não tenha configurado o git, seguir os passos apresentados nesse link [Configure a ferramenta](https://training.github.com/downloads/pt_BR/github-git-cheat-sheet/#:~:text=Configure%20a%20ferramenta) e configurar

## :hammer_and_wrench: Instalar todas as dependências necessárias 
### Desinstalar completamente Node.js e npm que já foram instalados em algum outro momento
- Seguir os passos apresentados nesse link ["Guia Passo a Passo para Remover o Node.js no Windows"](https://cursos.qaxperience.com/pt/blog/guia-passo-a-passo-para-remover-o-node-no-windows)
  
### Node versão 18.12.1
- Baixar e instalar o [node v18.12.1](https://nodejs.org/dist/v18.12.1/) > node-v18.12.1-x64.msi
- Abrir um novo gitbash ou outro terminal 
- Informar o comando abaixo para confirmar se o node realmente foi instalado
```
node --version
```
- Verificar se foi retornada a mesma versão do node instalada anteriormente:
```
v18.12.1
```
- Informar o comando abaixo para confirmar se o npm realmente foi instalado
```
npm --version
```
- E verificar se foi retornada essa mesma versão do npm:
```
8.19.2
```
- Fechar esse gitbash ou terminal

---
# :hammer_and_wrench: Clonar o projeto 
- Abrir uma janela do "Windows Explorer"
- Acessar o diretório onde será clonado o projeto "testes-automatizados-web-front-serve-rest_playwright-javascript"
- Copiar esse diretório 
- Abrir um novo gitbash 
- Informar o comando abaixo para acessar onde será clonado o projeto
```
cd "<diretório\copiado\anteriormente>"
```
Ex.: 
```
cd "C:\Projetos\Automação"
```
- Informar o comando abaixo para clonar este repositório via "HTTPS"
```
git clone https://github.com/AndressaKarla/testes-automatizados-web-front-serve-rest_playwright-javascript.git
```
- Ou informar o comando abaixo para clonar este repositório via "SSH"
```
git clone git@github.com:AndressaKarla/testes-automatizados-web-front-serve-rest_playwright-javascript.git
```

# :hammer_and_wrench: Instalar todas as dependências necessárias
- No gitbash aberto anteriormente, informar o comando abaixo para acessar o projeto "testes-automatizados-web-front-serve-rest_playwright-javascript" clonado anteriormente
```
cd "testes-automatizados-web-front-serve-rest_playwright-javascript"
```
Ex.: 
```
C:\Projetos\Automação\testes-automatizados-web-front-serve-rest_playwright-javascript
```
- Informar o comando abaixo para forçar, mesmo tendo possíveis conflitos, a instalação das dependências do projeto
```
npm install --force
```

---
# :hammer_and_wrench: Instalar as extensões no Visual Studio Code (VS Code)
- Caso ainda não tenha o VS Code baixado e instalado, acessar o site do [Visual Studio Code](https://code.visualstudio.com/download), baixar e instalar com a opção "System Installer"
- Com o Visual Studio Code aberto, caso seja apresentado alguma mensagem de "Instalar pacote de idiomas ...", clicar no ícone de configurações > "Don't Show Again"
- Clicar na opção "Manage > Profiles > Create Profile"
- Em "Profile name", informar "Playwright"
- Clicar na opção "Create"
- Clicar na opção "Extensions", informar e instalar as extensões abaixo:
  - Hyper Term Theme
    - HasseNasse
      - Clicar na opção "Hyper Term Black" apresentada para habilitar a extensão
  - Material Icon Theme
    - Philipp Kief
      - Clicar na opção "Material Icon Theme" apresentada para habilitar a extensão 
  - Playwright Test for VSCode
    - Microsoft
- Fechar o VS Code
    
# :bookmark_tabs: Abrir o VS Code diretamente na pasta do projeto "testes-automatizados-web-front-serve-rest_playwright-javascript"
- No gitbash aberto anteriormente, informar o comando abaixo para abrir o VS Code diretamente na pasta do projeto "testes-automatizados-web-front-serve-rest_playwright-javascript"
```
code .
```
- Aguardar o VS Code ser aberto
- Fechar esse gitbash
- No VS Code aberto, caso seja apresentado "Do you trust the authors on the files in this folder?", marcar a opção "Trust the authors of all files in the parent folder ...."
  - Clicar no botão "Yes, I trust the authors ...."

# :hammer_and_wrench: Criar arquivos "usuario.json", etc, informando os dados com base nos arquivos "usuario.example.json", etc
- No VS Code aberto anteriormente, acessar "tests > support > fixtures"
- Criar o arquivo "usuario.json"
  - Informar os dados com base no arquivo ["usuario.example.json"](https://github.com/AndressaKarla/testes-automatizados-web-front-serve-rest_playwright-javascript/blob/main/tests/support/fixtures/usuario.example.json)
  - Salvar o arquivo "usuario.json" com os dados informados anteriormente

---
# :dart: Executar testes e Gerar os resultados dos testes no computador
## :triangular_flag_on_post: Executar os testes automatizados Web no navegador chrome em um ambiente de produção na interface gráfica do Playwright e Gerar os resultados dos testes no computador (test-results)
- Abrir uma janela do "Windows Explorer"
- Acessar o diretório onde foi clonado o projeto "testes-automatizados-web-front-serve-rest_playwright-javascript"
- Copiar esse diretório 
- Abrir um novo gitbash
- Informar o comando abaixo para acessar o projeto "testes-automatizados-web-front-serve-rest_playwright-javascript"
```
cd "<diretório\copiado\anteriormente>"
```
Ex.: 
```
cd "C:\Projetos\Automação\testes-automatizados-web-front-serve-rest_playwright-javascript"
```
- Informar o comando abaixo para abrir a interface gráfica do Playwright 
```
npm run pw:ui
```
- NÃO fechar esse gitbash
- Na interface gráfica do Playwright, em "Filter", clicar no ícone à esquerda ">" para expandir
- Marcar a opção "chromium" e desmarcar outra opção que esteja marcada
- Em "TESTS" > "... spec.js", ir clicando no ícone à esquerda ">" para ir expandindo
- Em "TESTS", clicar na opção verde "Run all" para executar todas as funcionalidades e/ou cenários do projeto no navegador chrome na interface gráfica do Playwright e Gerar os resultados dos testes no computador (test-results)
- Após executar os testes, fechar a interface gráfica do Playwright 
- Fechar esse gitbash

## :triangular_flag_on_post: Ou executar os testes automatizados Web no navegador chrome em um ambiente de produção na interface gráfica e Gerar os resultados dos testes no computador (test-results, playwright-report)
- Abrir uma janela do "Windows Explorer"
- Acessar o diretório onde foi clonado o projeto "testes-automatizados-web-front-serve-rest_playwright-javascript"
- Copiar esse diretório 
- Abrir um novo gitbash
- Informar o comando abaixo para acessar o projeto "testes-automatizados-web-front-serve-rest_playwright-javascript"
```
cd "<diretório\copiado\anteriormente>"
```
Ex.: 
```
cd "C:\Projetos\Automação\testes-automatizados-web-front-serve-rest_playwright-javascript"
```
- Informar o comando abaixo para executar todas as funcionalidades e/ou cenários do projeto no navegador chrome em um ambiente de produção na interface gráfica e Gerar os resultados dos testes no computador (test-results, playwright-report):
```
npm run test:headed
```
- Após executar os testes, fechar esse gitbash

## :triangular_flag_on_post: Ou executar os testes automatizados Web no navegador chrome em modo headless (2º plano) em um ambiente de produção e Gerar os resultados dos testes no computador (test-results, playwright-report)
- Abrir uma janela do "Windows Explorer"
- Acessar o diretório onde foi clonado o projeto "testes-automatizados-web-front-serve-rest_playwright-javascript"
- Copiar esse diretório 
- Abrir um novo gitbash
- Informar o comando abaixo para acessar o projeto "testes-automatizados-web-front-serve-rest_playwright-javascript"
```
cd "<diretório\copiado\anteriormente>"
```
Ex.: 
```
cd "C:\Projetos\Automação\testes-automatizados-web-front-serve-rest_playwright-javascript"
```
- Informar o comando abaixo para executar todas as funcionalidades e/ou cenários do projeto no navegador chrome em modo headless (2º plano) em um ambiente de produção (mesmo comando que é utilizado no "Passo 6" do job "playwright-chrome" da "Pipeline Testes Automatizados Web Front ServeRest Playwright" em ".github > workflows > [workflow-testes-automatizados-web-front-serve-rest-playwright.yml](https://github.com/AndressaKarla/testes-automatizados-web-front-serve-rest_playwright-javascript/blob/main/.github/workflows/workflow-testes-automatizados-web-front-serve-rest-playwright.yml)" no GitHub Actions) e Gerar os resultados dos testes no computador (test-results, playwright-report):
```
npm run test
```
- Após executar os testes, fechar esse gitbash

## :triangular_flag_on_post: Executar os testes automatizados Web no navegador firefox em um ambiente de produção na interface gráfica do Playwright e Gerar os resultados dos testes no computador (test-results)
- Abrir uma janela do "Windows Explorer"
- Acessar o diretório onde foi clonado o projeto "testes-automatizados-web-front-serve-rest_playwright-javascript"
- Copiar esse diretório 
- Abrir um novo gitbash
- Informar o comando abaixo para acessar o projeto "testes-automatizados-web-front-serve-rest_playwright-javascript"
```
cd "<diretório\copiado\anteriormente>"
```
Ex.: 
```
cd "C:\Projetos\Automação\testes-automatizados-web-front-serve-rest_playwright-javascript"
```
- Informar o comando abaixo para abrir a interface gráfica do Playwright 
```
npm run pw:ui
```
- NÃO fechar esse gitbash
- Na interface gráfica do Playwright, em "Filter", clicar no ícone à esquerda ">" para expandir
- Marcar a opção "firefox" e desmarcar outra opção que esteja marcada
- Em "TESTS" > "... spec.js", ir clicando no ícone à esquerda ">" para ir expandindo
- Em "TESTS", clicar na opção verde "Run all" para executar todas as funcionalidades e/ou cenários do projeto no navegador firefox na interface gráfica do Playwright e Gerar os resultados dos testes no computador (test-results)
- Após executar os testes, fechar a interface gráfica do Playwright 
- Fechar esse gitbash

## :triangular_flag_on_post: Ou executar os testes automatizados Web no navegador firefox em um ambiente de produção na interface gráfica e Gerar os resultados dos testes no computador (test-results, playwright-report)
- Abrir uma janela do "Windows Explorer"
- Acessar o diretório onde foi clonado o projeto "testes-automatizados-web-front-serve-rest_playwright-javascript"
- Copiar esse diretório 
- Abrir um novo gitbash
- Informar o comando abaixo para acessar o projeto "testes-automatizados-web-front-serve-rest_playwright-javascript"
```
cd "<diretório\copiado\anteriormente>"
```
Ex.: 
```
cd "C:\Projetos\Automação\testes-automatizados-web-front-serve-rest_playwright-javascript"
```
- Informar o comando abaixo para executar todas as funcionalidades e/ou cenários do projeto no navegador firefox em um ambiente de produção na interface gráfica e Gerar os resultados dos testes no computador (test-results, playwright-report):
```
npm run test:headed:ff
```
- Após executar os testes, fechar esse gitbash

## :triangular_flag_on_post: Ou executar os testes automatizados Web no navegador firefox em modo headless (2º plano) em um ambiente de produção e Gerar os resultados dos testes no computador (test-results, playwright-report)
- Abrir uma janela do "Windows Explorer"
- Acessar o diretório onde foi clonado o projeto "testes-automatizados-web-front-serve-rest_playwright-javascript"
- Copiar esse diretório 
- Abrir um novo gitbash
- Informar o comando abaixo para acessar o projeto "testes-automatizados-web-front-serve-rest_playwright-javascript"
```
cd "<diretório\copiado\anteriormente>"
```
Ex.: 
```
cd "C:\Projetos\Automação\testes-automatizados-web-front-serve-rest_playwright-javascript"
```
- Informar o comando abaixo para executar todas as funcionalidades e/ou cenários do projeto no navegador firefox em modo headless (2º plano) em um ambiente de produção (mesmo comando que é utilizado no "Passo 6" do job "playwright-firefox" da "Pipeline Testes Automatizados Web Front ServeRest Playwright" em ".github > workflows > [workflow-testes-automatizados-web-front-serve-rest-playwright.yml](https://github.com/AndressaKarla/testes-automatizados-web-front-serve-rest_playwright-javascript/blob/main/.github/workflows/workflow-testes-automatizados-web-front-serve-rest-playwright.yml)" no GitHub Actions) e Gerar os resultados dos testes no computador (test-results, playwright-report):
```
npm run test:ff
```
- Após executar os testes, fechar esse gitbash

---
# :mag_right: Verificar os resultados das execuções dos testes automatizados Web no computador 
## :bookmark_tabs: Report html no computador
- No VS Code aberto anteriormente, acessar "playwright-report > index.html" 
- Clicar com botão direito do mouse sob o report "index.html" > "Reveal in File Explorer" 
- Na janela do "Windows Explorer" aberta automaticamente, clicar 2 vezes sob o report "index.html" gerado e armazenado anteriormente no computador para ser aberto e verificado no navegador padrão

## :bookmark_tabs: Screenshots no computador
- No VS Code aberto anteriormente, acessar "test-results > nome-arquivo-nome-describe-nome-cenario1-navegador1", "test-results > nome-arquivo-nome-describe-nome-cenariox-navegadorx", etc
- Clicar 2 vezes sob os screenshots 
```
- test-finished-x.png
  . . .
- test-failed-x.png
```

Ex.1: "test-results > login-entrar-Funcionalidade-Tela-Login---Botão-cca59-te-é-seu-sistema-para-administrar-seu-ecommerce-chromium"
```
- test-finished-1.png
``` 

Ex.2: "test-results > login-entrar-Funcionalidade-Tela-Login---Botão-227d2-gem-×Email-é-obrigatório×Password-é-obrigatório-firefox"
```
- test-failed-1.png
``` 

## :bookmark_tabs: Vídeos no computador
- No VS Code aberto anteriormente, acessar "test-results > nome-arquivo-nome-describe-nome-cenario1-navegador1", "test-results > nome-arquivo-nome-describe-nome-cenariox-navegadorx", etc
- Clicar 2 vezes sob os vídeos 
```
- video.webm
```

Ex.1: "test-results > login-entrar-Funcionalidade-Tela-Login---Botão-cca59-te-é-seu-sistema-para-administrar-seu-ecommerce-chromium"
```
- video.webm
``` 

Ex.2: "test-results > login-entrar-Funcionalidade-Tela-Login---Botão-227d2-gem-×Email-é-obrigatório×Password-é-obrigatório-firefox"
```
- video.webm
```

---
### Feito com ❤️ por Andressa Karla :wave: 

### [![Medium](https://img.shields.io/badge/-Medium-595D60?style=plastic&logo=Medium&logoColor=white&link=https://medium.com/@andressakarla)](https://medium.com/@andressakarla) [![Linkedin](https://img.shields.io/badge/-LinkedIn-595D60?style=plastic&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/andressakarla/)](https://www.linkedin.com/in/andressakarla/)

---
