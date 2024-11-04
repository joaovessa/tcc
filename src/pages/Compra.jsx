import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/mala/icone.jpg';
import compraImage from '../assets/mala/compra.jpg';
import gpsVideo from '../assets/video/gps.mp4'; // Importe o vídeo

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
  flex-direction: column; 
  align-items: center;  
  justify-content: center; 
  max-width: 1400px;
  width: 100%;
  margin-top: 4rem;
  text-align: center; 

  @media (min-width: 769px) {
    flex-direction: row; 
    justify-content: center;
  }
`;

const VideoWrapper = styled.div`
  width: 100%; 
  max-width: 250px; // Largura máxima
  margin-bottom: 2rem; 

  video {
    width: 100%; // Responsivo
    height: auto; // Ajusta a altura para manter a proporção
    border-radius: 20px; // Bordas arredondadas
  }
`;

const TextWrapper = styled.div`
  max-width: 600px;
  margin-left: 2rem; // Margem à esquerda
  padding: 0 1rem; 

  @media (min-width: 769px) {
    margin-left: 4rem; // Aumente a margem em telas maiores
  }

  h1 {
    font-size: 4.8rem; // Aumente a fonte
    line-height: 1.2;
    margin-bottom: 2rem;
    margin-left: 0; // Remova margem esquerda para centralizar
  }

  p {
    font-size: 1.8rem; // Aumente a fonte
    line-height: 1.6;
    margin-left: 0; // Remova margem esquerda para centralizar
    margin-bottom: 2.5rem;
    font-family: "Shanti", sans-serif;
  }
`;

const BuyButton = styled(Link)`
  display: inline-block;
  border-radius: 50px;
  text-decoration: none;
  margin-left: 0; // Remova margem esquerda para centralizar

  img {
    width: 250px; // Aumente a largura do botão
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
          <VideoWrapper>
            <video controls>
              <source src={gpsVideo} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </VideoWrapper>
          <TextWrapper>
            <h1>SOBRE A MALA</h1>
            <p>
              A SecureTrip é um acessório de viagem moderno e prático, equipado
              com tecnologia que facilita a vida dos viajantes. Com recursos
              como GPS integrado, carregamento sem fio, balança integrada para garantir que não ultrapasse do peso solicitado pelas companhias aéreas e um sensor que identifica o estado da mala, sendo ele "mala fechada" ou "mala aberta". Proporciona conveniência e segurança. Seu design
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
