import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/mala/icone.jpg';

export function Home() {
  useEffect(() => {
    document.body.classList.add('home-background');
    return () => {
      document.body.classList.remove('home-background');
    };
  }, []);

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
      </main>
    </>
  );
}
