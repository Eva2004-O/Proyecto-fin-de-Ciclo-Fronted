import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./Components/Index";
import NotFount from "./Components/NotFound";
import Logo from './assets/Logo.png';
import Sobre_nosotros from "./Components/Sobre_nosotros";
import Politica_privacidad from "./Components/Politica_privacidad";
import Contacto from "./Components/Contacto";
import List_Animals, { listAnimales } from "./Components/List_Animal";
import Card_Animal_Details from "./Components/Card_Animal_Details";

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
      <Link to="/administracion">Administración</Link>
    </div>
  </nav>

  {/* CONTENIDO PRINCIPAL */}
  <main>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/sobre-nosotros" element={<Sobre_nosotros></Sobre_nosotros>}></Route>
      <Route path="/privacidad" element={<Politica_privacidad></Politica_privacidad>}></Route>
      <Route path="/contacto" element={<Contacto></Contacto>}></Route>
      <Route path="/animales" element={<List_Animals></List_Animals>}></Route>
      <Route path="/animales/:id" element={<Card_Animal_Details animales={listAnimales}></Card_Animal_Details>}></Route>
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
