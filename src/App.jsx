import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./Components/Index";
import NotFount from "./Components/Footer/NotFound";
import Logo from './assets/Logo.png';
import Sobre_nosotros from "./Components/Footer/Sobre_nosotros";
import Politica_privacidad from "./Components/Footer/Politica_privacidad";
import Contacto from "./Components/Footer/Contacto";
import List_Animals, { listAnimales } from "./Components/Animals/List_Animal";
import Card_Animal_Details from "./Components/Animals/Card_Animal_Details";
import Formulario_Adopcion from "./Components/Animals/Formulario_Adopción";

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
    <div className="nav-colabora">
    <Link className="colabora-title" to="/colabora">Colaborar</Link>
  <div className="colabora-dropdown">
    <Link to="/colabora/voluntariado">Hazte voluntario</Link>
    <Link to="/colabora/socio">Hazte socio</Link>
    <Link to="/colabora/apadrinar">Hazte Padrino/Madrina</Link>
    <Link to="/colabora/donaciones">Donaciones</Link>
  </div>
</div>

    <Link to="/anuncios">Anuncios</Link>

    {/* ADMINISTRACIÓN CON DESPLEGABLE */}
    <div className="nav-admin">
      <span className="admin-title">Administración</span>

      <div className="admin-dropdown">
        <Link to="/administracion/añadir-animal">Añadir animal</Link>
        <Link to="/administracion/solicitudes">Solicitudes de adopción</Link>
        <Link to="/administracion/añadir-merchandising">Añadir Merchandiding</Link>
        <Link to="/administracion/añadir-anuncios">Añadir anuncios</Link>
        <Link to="/administracion/socios">Ver socios</Link>
        <Link to="/administracion/apadrinar">Ver padrinos/madrinas</Link>
        <Link to="/administracion/donacciones">Ver donaciones</Link>
      </div>
    </div>
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
      <Route path="/animales/formulario/adopcion/:id" element={<Formulario_Adopcion></Formulario_Adopcion>}></Route>
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
