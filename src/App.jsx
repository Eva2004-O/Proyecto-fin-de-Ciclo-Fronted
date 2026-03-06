import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./Components/Index";
import NotFount from "./Components/NotFound";
import Logo from './assets/Logo.png';

function App() {
    return (
        <>
        <BrowserRouter>
<div className="app">

  {/* NAVBAR */}
  <nav className="navbar">
    <Link to="/" className="nav-logo">
      <img src={Logo} alt="Logo" />
    </Link>
    <div className="nav-links">
      <Link to="/animales">Adoptar</Link>
      <Link to="/articulos">Merchandising</Link>
      <Link to="/colabora">Colaborar</Link>
      <Link to="/anuncios">Anuncios</Link>
    </div>
  </nav>

  {/* CONTENIDO PRINCIPAL */}
  <main>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="*" element={<NotFount />} />
    </Routes>
  </main>

  {/* FOOTER */}
  <footer className="footer">
    <div className="footer-content">
      <p>© 2026 Adopta con Amor</p>

      <div className="footer-links">
        <a href="/contacto">Contacto</a>
        <a href="/privacidad">Privacidad</a>
        <a href="/sobre-nosotros">Sobre nosotros</a>
      </div>
    </div>
  </footer>

</div>

    </BrowserRouter>
        </>
    )
}
export default App;
