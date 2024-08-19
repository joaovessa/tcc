import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

 .home-background {
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

/* Estilos Globais */
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: "Suez One", sans-serif;
}

:root {
   font-size: 62.5%;
}

html, body {
   height: 100%;
   width: 100%;
   scroll-behavior: smooth; /* Scroll suave */
}

body {
   font-size: 1.6rem;
   background-image: ${props => props.theme.fundo};
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center center;
   background-color: ${props => props.theme.Homebackground};
   display: block;
   flex-direction: column;
   justify-content: space-between;
   text-align: center;
}

/* Barra de Navegação */
nav {
   width: 100%;
   background-color: ${props => props.theme.barra};
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 1rem 3rem;
}

nav img {
   height: 50px;
   margin-right: 2rem;
}

nav a {
   font-family: 'Kanit', sans-serif;
   color: ${props => props.theme.white};
   text-decoration: none;
   font-size: 2rem;
   font-weight: bold;
   margin: 0 2rem;
}

/* Scroll Down Button */
.scroll-down {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 3rem;
  cursor: pointer;
  color: white;
  animation: bounce 2s infinite; /* Efeito de "pulsação" */
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Materiais e Peças Section */
.materials-section {
   background-image: url(${props => props.theme.fundo});
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center center;
   padding: 5rem 2rem;
   color: white;
   text-align: center;
   min-height: 100vh;
   display: flex;
   flex-direction: column;
   justify-content: center;
}

.materials-section h2 {
   font-size: 4rem;
   margin-bottom: 3rem;
}

.material-item {
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-bottom: 3rem;
}

.material-item img {
   max-width: 100%;
   width: 200px;
   height: auto;
   margin-bottom: 2rem;
}

.material-item h3 {
   font-size: 2.5rem;
   margin-bottom: 1rem;
   font-family: "Shanti", sans-serif;
}

.material-item p {
   font-size: 1.8rem;
   margin-bottom: 0.5rem;
   font-family: "Shanti", sans-serif;
}

/* Conteúdo Principal */
.main-content {
   color: ${props => props.theme.textColor};
   flex: 1;
   display: flex;
   min-height: 100vh;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 2rem;
   transition: background 0.5s ease-in-out;
}

.main-content h1 {
   font-size: 10rem;
   line-height: 1.1;
   font-weight: bold;
   margin: 0;
   letter-spacing: 0.2rem;
   font-family: "Spirax", sans-serif;
}

.main-content .subtitle {
   font-size: 3rem;
   margin-top: 1rem;
   font-weight: normal;
   letter-spacing: 0.15rem;
}

/* Responsividade para telas grandes */
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

.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-item {
  min-width: 100%;
  flex: 0 0 auto;
  text-align: center;
  padding: 2rem 0; /* Adiciona espaçamento vertical ao conteúdo */
}

.carousel img {
  max-width: 60%;
  height: auto;
  margin: 0 auto;
  border-radius: 10px; /* Bordas arredondadas para um efeito mais estético */
}

.prev, .next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 2rem;
  padding: 1rem;
  cursor: pointer;
  z-index: 1;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

/* Responsividade */
@media (min-width: 768px) {
  .carousel img {
    max-width: 40%;
  }
}

@media (min-width: 1024px) {
  .carousel img {
    max-width: 30%;
  }
}

@media (min-width: 1440px) {
  .carousel img {
    max-width: 25%;
  }
}

.carousel-item h3, 
.carousel-item p {
  text-align: center; /* Centraliza o texto para uma estética limpa */
  margin: 1rem 0; /* Espaçamento padrão entre os elementos */
  width: 90%; /* Define uma largura que se adapta bem a diferentes tamanhos de tela */
  margin-left: auto; /* Centraliza horizontalmente */
  margin-right: auto; /* Centraliza horizontalmente */
}

.carousel-item h3 {
  font-size: 2.4rem; /* Tamanho do título ajustado */
  margin-bottom: 2rem; /* Espaçamento maior abaixo do título */
}

.carousel-item p {
  font-size: 1.8rem; /* Tamanho de texto legível */
  margin-bottom: 3rem; /* Espaçamento maior abaixo do parágrafo */
}

/* Responsividade */
@media (max-width: 768px) {
  .carousel-item h3 {
    font-size: 2rem; /* Tamanho do título para dispositivos menores */
  }

  .carousel-item p {
    font-size: 1.6rem; /* Tamanho do texto para dispositivos menores */
  }
}


`