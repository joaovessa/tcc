import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/mala/icone.jpg';
import gameVideo from '../assets/video/game.mp4'; // Verifique se este caminho está correto

const PageWrapper = styled.div`
  background-image: ${props => props.theme.fundo};
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
  background-attachment: fixed; 
  padding: 5rem 2rem;
  color: white;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    min-height: calc(100vh - 80px);
  }
`;

const NavBar = styled.nav`
  width: 100%;
  background-color: ${props => props.theme.barra};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }

  a {
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

  img {
    height: 50px;
    margin-right: 1rem;

    @media (max-width: 768px) {
      margin-bottom: 1rem;
    }
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 3rem auto;
  text-align: center;

  h1 {
    font-size: 6rem;
    margin-bottom: 3rem;
    font-family: 'Suez One', sans-serif;

    @media (max-width: 768px) {
      font-size: 2.4rem;
      margin-bottom: 2rem;
    }
  }

  video {
    width: 100%;
    max-width: 600px;
    height: auto;
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  }

  p {
    font-family: 'Kanit', sans-serif;
    font-size: 1.6rem;
    margin-top: 2rem;
    color: white;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
  }
`;

export function Saiba() {
  return (
    <>
      <NavBar>
        <Link to="/">
          <img src={logo} alt="Logo Secure Trip" />
        </Link>
        <Link to="/">Home</Link>
        <Link to="/saiba-mais">Saiba mais</Link>
        <Link to="/sobre-nos">Sobre nós</Link>
        <Link to="/comprar">Comprar</Link>
      </NavBar>
      <PageWrapper>
        <ContentWrapper>
          <h1>Nosso Jogo</h1>
          <video controls>
            <source src={gameVideo} type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
          <p>
            O jogo apresenta 3 protagonistas e é uma emocionante aventura. 
            Desbloqueie todos os portões e passe de fase para conquistar o desafio!
          </p>
        </ContentWrapper>
      </PageWrapper>
    </>
  );
}
