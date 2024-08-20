import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/mala/icone.jpg';
import Estevao from "../assets/integrantes/tete.jpg";
import Guilherme from "../assets/integrantes/gostoso.jpg";
import Joao from "../assets/integrantes/mano_ge.jpg";

const SobreNosWrapper = styled.div`
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

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 4rem;
  font-family: "Suez One", sans-serif;

  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
`;

const TeamContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const Member = styled.div`
  text-align: center;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      width: 150px;
      height: 150px;
      margin-bottom: 1.5rem;
    }
  }

  h3 {
    font-size: 2.4rem;
    margin-bottom: 1rem;
    font-family: "Shanti", sans-serif;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  line-height: 1.6;
  margin: 0 auto;
  max-width: 80%;
  font-family: "Shanti", sans-serif;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export function SobreNos() {
  useEffect(() => {
    document.body.classList.add('sobre-nos-background');
    return () => {
      document.body.classList.remove('sobre-nos-background');
    };
  }, []);

  return (
    <>
      <nav className="sobre-nos-nav">
      <Link to="/">
          <img src={logo} alt="Logo Secure Trip" />
        </Link>
        <Link to="/">Home</Link>
        <Link to="/saiba-mais">Saiba mais</Link>
        <Link to="/sobre-nos">Sobre nós</Link>
        <Link to="/comprar">Comprar</Link>
      </nav>
      <SobreNosWrapper>
        <Title>INTEGRANTES</Title>
        <TeamContainer>
          <Member>
            <img src={Estevao} alt="Estevão Fernandes" />
            <h3>Estevão Fernandes</h3>
          </Member>
          <Member>
            <img src={Guilherme} alt="Guilherme Melo" />
            <h3>Guilherme Melo</h3>
          </Member>
          <Member>
            <img src={Joao} alt="João Vitor Silva" />
            <h3>João Vitor Silva</h3>
          </Member>
        </TeamContainer>
        <Description>
          Nós somos uma equipe de três estudantes do Campus UNASP-SP e estamos
          desenvolvendo a SecureTrip, uma mala inteligente equipada com travas de
          segurança por código e impressão digital, além de um sistema de
          rastreamento por GPS.
        </Description>
      </SobreNosWrapper>
    </>
  );
}
