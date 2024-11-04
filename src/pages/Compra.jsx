import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/mala/icone.jpg';
import compraImage from '../assets/mala/compra.jpg';
import malaImage from '../assets/mala/mala.jpg'; // Importe a nova imagem

const PageWrapper = styled.div`
  background-image: ${props => props.theme.fundo};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 5rem 2rem;
  color: white;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const NavBar = styled.nav`
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
  display: flex;
  flex-direction: column; // Para manter flexibilidade em telas pequenas
  align-items: center;  // Centraliza verticalmente
  justify-content: center; // Centraliza horizontalmente
  max-width: 1400px;
  width: 100%;
  margin-top: 4rem;
  text-align: center; // Centraliza o texto

  @media (min-width: 769px) {
    flex-direction: row; // Muda para linha em telas maiores
  }
`;

const ImageWrapper = styled.div`
  img {
    width: 100%; // Responsivo
    max-width: 500px; // Limite de largura
    height: auto; // Mantém a proporção
    margin-bottom: 2rem; // Espaçamento inferior
  }
`;

const TextWrapper = styled.div`
  max-width: 600px;
  margin-left: 0; // Remove a margem esquerda em telas pequenas
  padding: 0 1rem; // Adiciona espaçamento lateral

  @media (min-width: 769px) {
    margin-left: 2rem; // Adiciona margem em telas maiores
  }

  h1 {
    font-size: 3.5rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.7rem;
    line-height: 1.8;
    margin-bottom: 2.5rem;
    font-family: "Shanti", sans-serif;
  }
`;

const BuyButton = styled(Link)`
  display: inline-block;
  border-radius: 50px;
  text-decoration: none;

  img {
    width: 220px;
    height: auto;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export function Compra() {
  useEffect(() => {
    document.body.classList.add('sobre-mala-background');
    return () => {
      document.body.classList.remove('sobre-mala-background');
    };
  }, []);

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
          <ImageWrapper>
            <img src={malaImage} alt="Mala SecureTrip" />
          </ImageWrapper>
          <TextWrapper>
            <h1>SOBRE A MALA</h1>
            <p>
              A SecureTrip é um acessório de viagem moderno e prático, equipado
              com tecnologia que facilita a vida dos viajantes. Com recursos
              como GPS integrado, carregamento sem fio, balança integrada para garantir que não ultrapasse do peso solicitado pelas companhias aéreas e trava de segurança
              inteligente que é desbloqueada através de um cartão ou uma tag de aproximação, proporciona conveniência e segurança. Seu design
              inovador e durável torna a mala inteligente indispensável para os
              viajantes contemporâneos.
            </p>
            <BuyButton to="/comprar">
              <img src={compraImage} alt="Buy Now" />
            </BuyButton>
          </TextWrapper>
        </ContentWrapper>
      </PageWrapper>
    </>
  );
}
