import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

/* Reset e Configurações Globais */
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
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   text-align: center;
}

/* Background da Home */
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
   align-items: center;
   text-align: center;
   min-height: 100vh;

   @media (max-width: 768px) {
      padding: 1rem;
      background-size: cover;
   }
}

/* Barra de Navegação */
nav {
   width: 100%;
   background-color: ${props => props.theme.barra};
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 1rem 3rem;
   position: relative;

   @media (max-width: 768px) {
      flex-direction: column;
      padding: 1rem;
   }
}

nav img {
   height: 50px;
   margin-right: 1rem;

   @media (max-width: 768px) {
      margin-bottom: 1rem;
   }
}

nav a {
   font-family: 'Kanit', sans-serif;
   color: ${props => props.theme.white};
   text-decoration: none;
   font-size: 2rem;
   font-weight: bold;
   margin: 0 2rem;

   @media (max-width: 768px) {
      font-size: 1.6rem;
      margin: 0.5rem 0;
   }
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
  animation: bounce 2s infinite;

  @media (max-width: 768px) {
      font-size: 2rem;
      bottom: 10px;
  }
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
   background-image: ${props => props.theme.fundo};
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

   @media (max-width: 768px) {
      padding: 3rem 1rem;
   }
}

.materials-section h2 {
   font-size: 4rem;
   margin-bottom: 3rem;

   @media (max-width: 768px) {
      font-size: 3rem;
      margin-bottom: 2rem;
   }
}

.material-item {
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-bottom: 3rem;

   @media (max-width: 768px) {
      margin-bottom: 2rem;
   }
}

.material-item img {
   max-width: 100%;
   width: 200px;
   height: auto;
   margin-bottom: 2rem;

   @media (max-width: 768px) {
      width: 150px;
      margin-bottom: 1.5rem;
   }
}

.material-item h3 {
   font-size: 2.5rem;
   margin-bottom: 1rem;
   font-family: "Shanti", sans-serif;

   @media (max-width: 768px) {
      font-size: 2rem;
      margin-bottom: 0.8rem;
   }
}

.material-item p {
   font-size: 1.8rem;
   margin-bottom: 0.5rem;
   font-family: "Shanti", sans-serif;

   @media (max-width: 768px) {
      font-size: 1.6rem;
      margin-bottom: 0.4rem;
   }
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

   @media (max-width: 768px) {
      padding: 1.5rem;
   }
}

.main-content h1 {
   font-size: 10rem;
   line-height: 1.1;
   font-weight: bold;
   margin: 0;
   letter-spacing: 0.2rem;
   font-family: "Spirax", sans-serif;

   @media (max-width: 768px) {
      font-size: 6rem;
      letter-spacing: 0.1rem;
   }
}

.main-content .subtitle {
   font-size: 3rem;
   margin-top: 1rem;
   font-weight: normal;
   letter-spacing: 0.15rem;

   @media (max-width: 768px) {
      font-size: 2rem;
      margin-top: 0.5rem;
   }
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

/* Carousel */
.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-inner {
  display: flex;
  transition: transform 0.3s ease-in-out;
}

.carousel-item {
  min-width: 100%;
  flex: 0 0 auto;
  text-align: center;
  padding: 1rem 0; /* Espaçamento vertical reduzido */

  @media (max-width: 768px) {
      padding: 0.5rem 0;
  }
}

.carousel img {
  max-width: 20%; /* Reduz significativamente o tamanho das imagens no desktop */
  height: auto;
  margin: 0 auto;

  @media (max-width: 768px) {
      max-width: 30%; /* Reduz ainda mais o tamanho das imagens no mobile */
  }
}

.prev, .next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 1.6rem;
  padding: 0.8rem;
  cursor: pointer;
  z-index: 1;

  @media (max-width: 768px) {
      font-size: 1.2rem;
      padding: 0.6rem;
  }
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

/* Carousel Content Responsividade */
.carousel-item h3, 
.carousel-item p {
  text-align: center;
  margin: 0.8rem 0;
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  font-family: "Shanti", sans-serif;

  @media (max-width: 768px) {
      width: 80%;
  }
}

.carousel-item h3 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  font-family: "Shanti", sans-serif;

  @media (max-width: 768px) {
      font-size: 1.6rem;
      margin-bottom: 1.2rem;
      font-family: "Shanti", sans-serif;
  }
}

.carousel-item p {
  font-size: 1.6rem;
  margin-bottom: 2rem;
  font-family: "Shanti", sans-serif;

  @media (max-width: 768px) {
      font-size: 1.4rem;
      margin-bottom: 1.5rem;
      font-family: "Shanti", sans-serif;
  }
}

/* Responsividade */
@media (max-width: 768px) {
  .carousel-item h3 {
    font-size: 1.6rem;
    font-family: "Shanti", sans-serif;
  }

  .carousel-item p {
    font-size: 1.4rem;
    font-family: "Shanti", sans-serif;
  }
}


`;