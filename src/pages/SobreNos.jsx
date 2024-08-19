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
      <main className="main-content1">
        <h1>INTEGRANTES</h1>
        <p>
        Nós somos uma equipe de três estudantes do Campus UNASP-SP e estamos desenvolvendo a SecureTrip, uma mala inteligente equipada com travas de segurança por código e impressão digital, além de um sistema de rastreamento por GPS.        </p>
      </main>
    </>
  );
}
