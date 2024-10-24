import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/mala/icone.jpg';
import peças from '../assets/pecas/balanca.png';
import abertura_trava from '../assets/pecas/abertura_trava.png';
import amplificador_balanca from '../assets/pecas/amplificador_balança.png';
import modulo_bluetooth from '../assets/pecas/modulo_bluetooth.png';
import modulo_gps from '../assets/pecas/modulo_gps.png';
import modulo_wifi from '../assets/pecas/modulo_wifi.png';
import placa_arduino from '../assets/pecas/placa_arduino.png';
import trava_cadeado from '../assets/pecas/trava_cadeado.png';

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
      <nav>
        <Link to="/">
          <img src={logo} alt="Logo Secure Trip" />
        </Link>
        <Link to="/">Home</Link>
        <Link to="/saiba-mais">Saiba mais</Link>
        <Link to="/sobre-nos">Sobre nós</Link>
        <Link to="/comprar">Comprar</Link>
      </nav>
      <main className="main-content">
        <h1>Secure<br />Trip</h1>
        <div className="scroll-down" onClick={handleScrollDown}>▼</div>
      </main>

      <section id="materials-section" className="materials-section">
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
              <img src={abertura_trava} alt="Abertura Trava" />
              <h3>Abertura Trava</h3>
              <p>Trava robusta com sistema de segurança para malas.</p>
              <p>R$5.50</p>
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
              <img src={modulo_wifi} alt="Módulo WiFi" />
              <h3>Módulo WiFi</h3>
              <p>Conecta o dispositivo à internet via Wi-Fi.</p>
              <p>R$18.00</p>
            </div>
            <div className="carousel-item">
              <img src={placa_arduino} alt="Placa Arduino" />
              <h3>Placa Arduino</h3>
              <p>Microcontrolador versátil para diversos projetos.</p>
              <p>R$45.00</p>
            </div>
            <div className="carousel-item">
              <img src={trava_cadeado} alt="Trava Cadeado" />
              <h3>Trava Cadeado</h3>
              <p>Cadeado de segurança reforçado para malas.</p>
              <p>R$8.00</p>
            </div>
          </div>
          <button className="prev">❮</button>
          <button className="next">❯</button>
        </div>
      </section>
    </>
  );
}
