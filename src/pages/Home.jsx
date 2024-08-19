import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/mala/icone.jpg';
import peças from '../assets/pecas/balanca.png';

export function Home() {
  useEffect(() => {
    document.body.classList.add('home-background');
    return () => {
      document.body.classList.remove('home-background');
    };
  }, []);

  const handleScrollDown = () => {
    document.getElementById('materials-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav>
        <img src={logo} alt="Logo Secure Trip" />
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
        <div className="material-item">
          <img src={peças} alt="Célula de Carga 50kg" />
          <h3>Célula de Carga 50kg</h3>
          <p>Com essa célula de carga, é possível medir até 50kg, possibilitando criar balanças.</p>
          <p>R$7.90</p>
        </div>
      </section>
    </>
  );
}
