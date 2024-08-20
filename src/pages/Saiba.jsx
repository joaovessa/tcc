import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/mala/icone.jpg';
import refsImage from '../assets/mala/refs.png';

const PageWrapper = styled.div`
  background-image: ${props => props.theme.fundo}; /* Background image */
  background-size: cover; /* Ensure the background covers the entire container */
  background-position: center; /* Center the background */
  background-repeat: no-repeat; /* Prevent background from repeating */
  padding: 6rem 2rem;
  color: white;
  text-align: center;
  min-height: calc(100vh - 80px); /* Subtract the height of the nav bar from the full height of the viewport */
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
    min-height: calc(100vh - 120px); /* Adjust for mobile nav height if different */
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
      font-size: 1.6rem; /* Increase font size for mobile */
      margin: 0.5rem 0;
    }
  }

  img {
    height: 50px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 3rem auto;
  text-align: center;

  h1 {
    font-size: 3rem;
    margin-bottom: 3rem;
    font-family: 'Kanit', sans-serif;

    @media (max-width: 768px) {
      font-size: 2.4rem; /* Increase font size for mobile */
      margin-bottom: 2rem;
    }
  }

  img {
    width: 300px;
    height: auto;
    margin: 2rem auto;
    display: block;

    @media (max-width: 768px) {
      width: 200px; /* Reduce image size on mobile */
    }
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 3rem 0;

    @media (max-width: 768px) {
      margin: 2rem 0; /* Adjust margin for mobile */
    }
  }

  a {
    font-size: 1.6rem;
    color: white;
    text-decoration: none;
    font-family: "Shanti", sans-serif;
    display: block;
    margin-bottom: 1.5rem;

    &:hover {
      color: ${(props) => props.theme.linkHover};
    }

    @media (max-width: 768px) {
      font-size: 1.4rem; /* Increase font size for mobile */
      margin-bottom: 1rem;
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
          <h1>REFERÊNCIAS BIBLIOGRÁFICAS/ARTIGOS</h1>
          <img src={refsImage} alt="Referências" />
          <ul>
            <li><a href="https://ric.cps.sp.gov.br/handle/123456789/5370" target="_blank" rel="noopener noreferrer">https://ric.cps.sp.gov.br/handle/123456789/5370</a></li>
            <li><a href="https://repositorio.ufscar.br/handle/ufscar/15100" target="_blank" rel="noopener noreferrer">https://repositorio.ufscar.br/handle/ufscar/15100</a></li>
            <li><a href="https://www.riu.ufam.edu.br/handle/prefix/6984" target="_blank" rel="noopener noreferrer">https://www.riu.ufam.edu.br/handle/prefix/6984</a></li>
          </ul>
        </ContentWrapper>
      </PageWrapper>
    </>
  );
}
