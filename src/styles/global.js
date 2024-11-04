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
   scroll-behavior: smooth;
}

body {
   font-size: 1.6rem;
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center center;
   background-color: ${props => props.theme.Homebackground};
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   text-align: center;
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

`;