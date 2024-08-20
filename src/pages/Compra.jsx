import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/mala/icone.jpg';
import malaImage from '../assets/mala/mala.jpg';
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
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  img {
    border-radius: 20px;
    max-width: 400px;
    width: 100%;
  }
`;

const TextWrapper = styled.div`
  max-width: 600px;
  margin-left: 2rem;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 2rem;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    font-family: "Shanti", sans-serif;
  }
`;

const BuyButton = styled(Link)`
  display: inline-block;
  border-radius: 50px;
  text-decoration: none;

  img {
    width: 200px;
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
              como GPS integrado, carregamento sem fio, e trava de segurança
              inteligente, proporciona conveniência e segurança. Seu design
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
