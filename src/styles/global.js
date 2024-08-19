import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

/* Global */
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: "Spirax", sans-serif;
}

:root {
   font-size: 62.5%;
}

html, body {
   height: 100%;
   width: 100%;
}

body {
   font-size: 1.6rem;
   background-image: ${props => props.theme.backgroundImage};
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center center;
   background-color: ${props => props.theme.Homebackground};
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   text-align: center;
}

/* Barra de Navegação */
nav {
   width: 100%;
   background-color: ${props => props.theme.barra};
   display: flex;
   justify-content: space-between; /* Espaçamento entre os itens */
   align-items: center;
   padding: 1rem 3rem; /* Reduzido o padding e adicionado espaçamento nas laterais */
}

nav img {
   height: 50px; /* Ajusta o tamanho do logo */
   margin-right: 2rem; /* Espaçamento entre o logo e os links */
}

nav a {
   font-family: 'Kanit', sans-serif; /* Fonte Kanit */
   color: ${props => props.theme.white};
   text-decoration: none;
   font-size: 2rem; /* Reduzido o tamanho da fonte */
   font-weight: bold;
   margin: 0 2rem;
}

/* Conteúdo Principal */
.main-content {
   color: ${props => props.theme.textColor};
   flex: 1;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 2rem;
}

.main-content h1 {
   font-size: 10rem;
   line-height: 1.1;
   font-weight: bold;
   margin: 0;
   letter-spacing: 0.2rem;
}

.main-content .subtitle {
   font-size: 3rem;
   margin-top: 1rem;
   font-weight: normal;
   letter-spacing: 0.15rem;
}

/* Responsividade para telas grandes (desktops) */
@media (min-width: 1024px) {
   :root {
      font-size: 65%;
   }

   nav a {
      font-size: 2.2rem;
      margin: 0 3rem;
   }

   .main-content h1 {
      font-size: 11rem;
   }

   .main-content .subtitle {
      font-size: 3.5rem;
   }
}

@media (min-width: 1440px) {
   :root {
      font-size: 70%;
   }

   nav a {
      font-size: 2.4rem;
      margin: 0 4rem;
   }

   .main-content h1 {
      font-size: 12rem;
   }

   .main-content .subtitle {
      font-size: 4rem;
   }
}

`