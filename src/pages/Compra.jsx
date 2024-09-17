import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/mala/icone.jpg';
import compraImage from '../assets/mala/compra.jpg';

const PageWrapper = styled.div`
  background-image: ${props => props.theme.fundo};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${(props) => props.theme.Homebackground};
  padding: 5rem 2rem;
  color: white;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
   padding: 1.5rem 4rem;
   position: relative;

    @media (max-width: 768px) {
      flex-direction: column;
      padding: 1rem;
    }

  a {
     font-family: 'Kanit', sans-serif;
     color: ${props => props.theme.white};
     text-decoration: none;
     font-size: 2.2rem;
     font-weight: bold;
     margin: 0 3rem;

     @media (max-width: 768px) {
        font-size: 1.6rem;
        margin: 0.5rem 0;
      }
    }
  }

  img {
    height: 60px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start; /* Alinha o conteúdo ao topo */
  justify-content: space-between;
  max-width: 1400px;
  width: 100%;
  margin-top: 4rem;
  position: relative; /* Torna o posicionamento relativo */

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  right: -50px; /* Desloca o vídeo um pouco para a direita */
  padding: 0;
  margin: 0;

  iframe {
    className="compra-video"; /* Adiciona a classe */
  }
`;




const TextWrapper = styled.div`
  max-width: 600px;
  margin-left: 3rem; /* Ajuste de margem */

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 2rem;
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
          <VideoWrapper>
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/vYUXiUCKiy8" 
              title="SecureTrip Video" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </VideoWrapper>
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
