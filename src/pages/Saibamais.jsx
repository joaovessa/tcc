import logo from '../assets/mala/icone.jpg'; 


export function SaibaMais() {
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
        <h1>REFERÊNCIAS BIBLIOGRÁFICAS/ARTIGOS</h1>
      </main>
    </>
  );
}