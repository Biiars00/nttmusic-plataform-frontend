# 🎵 NTT Music - Frontend

Interface web do **NTT Music**, uma plataforma de streaming que permite visualizar álbuns, músicas de cada álbum, criar playlists, adicionar músicas à playlist, e muito mais, com integração à [Deezer Public API](https://developers.deezer.com/api) e [backend próprio](https://github.com/Biiars00/nttmusic-plataform) em Node.js/Typescript + Firebase.

[Deploy na Vercel](https://nttmusic-plataform-frontend.vercel.app)

---

## Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Scripts disponíveis](#scripts-disponíveis)
- [Estrutura de Diretórios](#estrutura-de-diretórios)
- [Deploy na Vercel](#deploy-na-vercel)
- [Backend](#backend)
- [Licença](#licença)


## Tecnologias utilizadas

- **React** – Framework para construção da interface.
- **TypeScript** – Tipagem estática.
- **Axios** – Para comunicação com APIs.
- **React Router** – Navegação entre páginas.
- **TailwindCSS** – Estilização moderna e utilitária.
- **Vercel** – Hospedagem do frontend.


## Funcionalidades

- Cadastro de usuário
- Login de usuário
- Busca de álbuns da API Deezer
- Listagem de faixas do álbum
- Criação de playlists
- Adição de músicas à playlist
- Visualização de todas as playlists
- Atualização do nome da playlist
- Exclusão de música da playlist
- Exclusão de playlist


## Pré-requisitos

Antes de começar, você precisará ter os seguintes softwares instalados:

- [Node.js](https://nodejs.org) (v18 ou superior)
- [npm](https://www.npmjs.com) (gerenciador de pacotes do Node.js)
- Variáveis de ambiente.


## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/*seu-usuario*/ntt-music-frontend.git
cd ntt-music-frontend
```

2. Instale as dependências:

```bash
npm install
```

3. Crie o arquivo `.env` com as variáveis:

```
REACT_APP_API_URL_PROD_BACK=
REACT_APP_API_URL_DEV_BACK=
PORT=
```

4. Execute em modo desenvolvimento:

```bash
npm run dev
```

## Scripts disponíveis

`npm start` – Inicia em modo desenvolvimento

`npm build` – Gera a build de produção

## Estrutura de Diretórios

```bash
src/
├── api/         
├── components/      
├── pages/          
├── routes/          
├── services/                       
├── styles/          
├── App.tsx/          
└── index.tsx         
```

## Deploy na Vercel

Este projeto está publicado em: [NttMusic Plataform](https://nttmusic-plataform-frontend.vercel.app)

## Backend
- Documentação:  [Swagger](https://nttmusic-plataform.onrender.com/docs)
- Deploy: [API](https://nttmusic-plataform.onrender.com)

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/license/mit).

#### Desenvolvido por [Beatriz Ribeiro](https://github.com/Biiars00) ❤️