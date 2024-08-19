import logo from '../assets/mala/icone.jpg'; 
import { Link } from 'react-router-dom';

export function SobreNos() {
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
        <h1>Sobre Nós</h1>
        <p>
          A SecureTrip foi fundada com o objetivo de transformar a forma como as pessoas viajam, proporcionando segurança, conforto e inovação. Nossa missão é garantir que cada viagem seja uma experiência tranquila e segura, com a melhor tecnologia disponível.
        </p>
      </main>
    </>
  );
}
