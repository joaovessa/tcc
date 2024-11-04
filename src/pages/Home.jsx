import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/mala/icone.jpg';
import peças from '../assets/pecas/balanca.png';
import amplificador_balanca from '../assets/pecas/amplificador_balança.png';
import modulo_bluetooth from '../assets/pecas/modulo_bluetooth.png';
import modulo_gps from '../assets/pecas/modulo_gps.png';
import placa_arduino from '../assets/pecas/placa_arduino.png';

const PageWrapper = styled.div`
  background-image: ${props => props.theme.backgroundImage};
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
      height: 40px;
      margin-bottom: 1rem;
    }
  }
`;

const MaterialsSection = styled.section`
  padding: 3rem 0;

  h2 {
    font-family: 'Suez One', cursive;
    color: white; 
    font-size: 4rem;
    margin: 4rem 0 2rem;

    @media (max-width: 768px) {
      font-size: 3rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  h3 {
    font-family: 'Shanti', cursive;
    color: white; 
    font-size: 2.5rem; // Reduzido
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem; // Reduzido
    }
  }

  p {
    font-family: 'Shanti', cursive; 
    color: white; 
    font-size: 1.5rem; // Reduzido
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 1.3rem;
    }

    @media (max-width: 480px) {
      font-size: 1.1rem; // Reduzido
    }
  }

  .carousel {
    position: relative;
    overflow: hidden;

    .carousel-inner {
      display: flex;
      transition: transform 0.5s ease;
    }

    .carousel-item {
      min-width: 100%;
      box-sizing: border-box;
      text-align: center;
      padding: 1rem;

      img {
        width: 100%;
        max-width: 200px;
        height: auto;
        margin: 1rem auto;
      }
    }

    .prev, .next {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: transparent;
      border: none;
      color: white;
      font-size: 2rem;
      cursor: pointer;

      @media (max-width: 768px) {
        font-size: 1.5rem;
      }

      @media (max-width: 480px) {
        font-size: 1.2rem;
      }
    }

    .prev {
      left: 1rem; // Mantém a seta esquerda
    }

    .next {
      right: 1rem; // Mantém a seta direita
    }
  }
`;

const Title = styled.h1`
  font-family: 'Spirax', cursive;
  font-size: 11rem; 
  line-height: 1.2;
  margin-right: 100px;

  span {
    font-family: 'Spirax', cursive;
    margin-left: 200px; 
  }

  @media (max-width: 768px) {
    font-size: 8rem;
    margin-right: 50px;

    span {
      margin-left: 100px; 
    }
  }

  @media (max-width: 480px) {
    font-size: 6rem;
    margin-right: 20px;

    span {
      margin-left: 50px; 
    }
  }
`;

const ScrollDown = styled.div`
  font-size: 3rem; 
  margin-top: 2rem; // Ajustado para ficar mais abaixo
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export function Home() {
  useEffect(() => {
    document.body.classList.add('home-background');
    return () => {
      document.body.classList.remove('home-background');
    };
  }, []);

  useEffect(() => {
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    let index = 0;

    const showSlide = (i) => {
      if (i >= items.length) index = 0;
      if (i < 0) index = items.length - 1;
      carouselInner.style.transform = `translateX(${-index * 100}%)`;
    };

    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    const handleNext = () => {
      index++;
      showSlide(index);
    };

    const handlePrev = () => {
      index--;
      showSlide(index);
    };

    if (nextButton) {
      nextButton.addEventListener('click', handleNext);
    }
    if (prevButton) {
      prevButton.addEventListener('click', handlePrev);
    }

    return () => {
      if (nextButton) {
        nextButton.removeEventListener('click', handleNext);
      }
      if (prevButton) {
        prevButton.removeEventListener('click', handlePrev);
      }
    };
  }, []);

  const handleScrollDown = () => {
    document.getElementById('materials-section').scrollIntoView({ behavior: 'smooth' });
  };

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
          <Title>
        Secure<br />
        <span>Trip</span>
      </Title>
        <div className="scroll-down" onClick={handleScrollDown}>▼</div>
      </PageWrapper>

      <MaterialsSection id="materials-section">
        <h2>MATERIAIS E PEÇAS USADAS</h2>
        <div className="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={peças} alt="Célula de Carga 50kg" />
              <h3>Célula de Carga 50kg</h3>
              <p>Com essa célula de carga, é possível medir até 50kg, possibilitando criar balanças.</p>
              <p>R$7.90</p>
            </div>
            <div className="carousel-item">
              <img src={amplificador_balanca} alt="Amplificador Balança" />
              <h3>Amplificador Balança</h3>
              <p>Amplificador para leitura precisa de células de carga.</p>
              <p>R$12.00</p>
            </div>
            <div className="carousel-item">
              <img src={modulo_bluetooth} alt="Módulo Bluetooth" />
              <h3>Módulo Bluetooth</h3>
              <p>Permite comunicação sem fio com dispositivos móveis.</p>
              <p>R$25.00</p>
            </div>
            <div className="carousel-item">
              <img src={modulo_gps} alt="Módulo GPS" />
              <h3>Módulo GPS</h3>
              <p>Fornece localização precisa com sinal de satélite.</p>
              <p>R$35.00</p>
            </div>
            <div className="carousel-item">
              <img src={placa_arduino} alt="Placa Arduino" />
              <h3>Placa Arduino</h3>
              <p>Microcontrolador versátil para diversos projetos.</p>
              <p>R$45.00</p>
            </div>
          </div>
          <button className="prev">❮</button>
          <button className="next">❯</button>
        </div>
      </MaterialsSection>
    </>
  );
}
