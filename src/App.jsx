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
import Gestion_Animal from "./Components/Animals/Gestion_Animal";
import Formulario_Animal from "./Components/Animals/Formulario_Animal";
import Gestion_Adopcion, { solicitudesAdopcion } from "./Components/Animals/Gestion_Adopcion";
import Ver_Solicitud from "./Components/Animals/Ver_Solicitud";
import Contrato_Adopcion from "./Components/Animals/Contrato_Adopcion";
import List_Articulos, { lista_articulos } from "./Components/Merchandising/List_Articulos";
import Articulo_Card_Details from "./Components/Merchandising/Articulo_Card_Details";
import Colabora from "./Components/Colabora/Colabora";
import Table_Articulos from "./Components/Merchandising/Table_Articulos";
import Gestion_Articulos from "./Components/Merchandising/Gestion_articulos";
import Formulario_Articulos from "./Components/Merchandising/Formulario_Articulos";
import List_Anuncios, { lista_eventos } from "./Components/Anuncios/List_Anuncios";
import Anuncios_Card_Details from "./Components/Anuncios/Anuncios_Card_Details";
import Contrato_Acogida from "./Components/Animals/Contrato_Acogida";
import Gestion_Anuncios from "./Components/Anuncios/Gestion_Anuncios";
import Formulario_Anuncios from "./Components/Anuncios/Formulario_Anuncios";
import Formulario_Socio from "./Components/Colabora/Formulario_Socio";
import Formulario_Donaciones from "./Components/Colabora/Formulario_Donaciones";
import Formulario_Voluntariado from "./Components/Colabora/Formulario_Voluntariado";
import Formulario_Apadrinar from "./Components/Colabora/Formulario_Apadrinar";
import Gestion_Donaciones from "./Components/Colabora/Gestion_Donaciones";
import Donacion_Detalle from "./Components/Colabora/Donacion_Detalle";
import Gestion_Apadrinar from "./Components/Colabora/Gestion_Apadrinar";
import Apadrinar_Detalle from "./Components/Colabora/Apadrinar_Detalle";
import Gestion_Voluntariado from "./Components/Colabora/Gestion_Voluntariado";
import Voluntariado_Detalle from "./Components/Colabora/Voluntariado_Detalle";

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
    <Link to="/colabora/socio">Hazte socio</Link>
    <Link to="/colabora/apadrinar">Hazte Padrino/Madrina</Link>
    <Link to="/colabora/donaciones">Donaciones</Link>
    <Link to="/colabora/voluntariado">Hazte voluntario</Link>
  </div>
</div>

    <Link to="/anuncios">Anuncios</Link>

    {/* ADMINISTRACIÓN CON DESPLEGABLE */}
    <div className="nav-admin">
      <span className="admin-title">Administración</span>

      <div className="admin-dropdown">
        <Link to="/administracion/animales">Gestionar animales</Link>
        <Link to="/administracion/usuarios">Gestionar usuarios</Link>
        <Link to="/administracion/solicitudes">Solicitudes de adopción</Link>
        <Link to="/administracion/merchandising">Gestionar Merchandiding</Link>
        <Link to="/administracion/anuncios">Gestionar anuncios</Link>
        <Link to="/administracion/socios">Socios</Link>
        <Link to="/administracion/apadrinar">Padrinos/madrinas</Link>
        <Link to="/administracion/voluntarios">Voluntarios</Link>
        <Link to="/administracion/donaciones">Donaciones</Link>
      </div>
    </div>
    <Link to="/perfil">Perfil</Link>
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
      <Route path="/administracion/animales" element={<Gestion_Animal></Gestion_Animal>}></Route>
      <Route path="/administracion/animales/formulario" element={<Formulario_Animal></Formulario_Animal>}></Route>
      <Route path="/administracion/animales/formulario/:id" element={<Formulario_Animal></Formulario_Animal>}></Route>
      <Route path="/administracion/solicitudes" element={<Gestion_Adopcion></Gestion_Adopcion>}></Route>
      <Route path="/administracion/solicitud/:id" element={<Ver_Solicitud solicitudes={solicitudesAdopcion}></Ver_Solicitud>}></Route>
      <Route path="/animal/contrato" element={<Contrato_Adopcion />} />
      <Route path="/articulos" element={<List_Articulos></List_Articulos>}></Route>
      <Route path="/articulos/:id" element={<Articulo_Card_Details articulos={lista_articulos}></Articulo_Card_Details>}></Route>
      <Route path="/colabora" element={<Colabora></Colabora>}></Route>
      <Route path="/administracion/merchandising" element={<Gestion_Articulos></Gestion_Articulos>}></Route>
      <Route path="/administracion/merchandising/formulario" element={<Formulario_Articulos></Formulario_Articulos>}></Route>
      <Route path="/administracion/merchandising/formulario/:id" element={<Formulario_Articulos></Formulario_Articulos>}></Route>
      <Route path="/anuncios" element={<List_Anuncios></List_Anuncios>}></Route>
      <Route path="/anuncios/:id" element={<Anuncios_Card_Details></Anuncios_Card_Details>}></Route>
      <Route path="/contrato/adopcion" element={<Contrato_Adopcion></Contrato_Adopcion>}></Route>
      <Route path="/contrato/acogida" element={<Contrato_Acogida></Contrato_Acogida>}></Route>
      <Route path="/administracion/anuncios" element={<Gestion_Anuncios></Gestion_Anuncios>}></Route>
      <Route path="/administracion/anuncios/formulario" element={<Formulario_Anuncios></Formulario_Anuncios>}></Route>
      <Route path="/administracion/anuncios/formulario/:id" element={<Formulario_Anuncios></Formulario_Anuncios>}></Route>
      <Route path="/colabora/socio" element={<Formulario_Socio></Formulario_Socio>}></Route>
      <Route path="/colabora/donaciones" element={<Formulario_Donaciones></Formulario_Donaciones>}></Route>
      <Route path="/colabora/voluntariado" element={<Formulario_Voluntariado></Formulario_Voluntariado>}></Route>
      <Route path="/colabora/apadrinar" element={<Formulario_Apadrinar></Formulario_Apadrinar>}></Route>
      <Route path="/colabora/apadrinar/:id" element={<Formulario_Apadrinar></Formulario_Apadrinar>}></Route>
      <Route path="/administracion/donaciones" element={<Gestion_Donaciones></Gestion_Donaciones>}></Route>
      <Route path="/administracion/donaciones/:id" element={<Donacion_Detalle></Donacion_Detalle>}></Route>
      <Route path="/administracion/apadrinar" element={<Gestion_Apadrinar></Gestion_Apadrinar>}></Route>
      <Route path="/administracion/apadrinar/:id" element={<Apadrinar_Detalle></Apadrinar_Detalle>}></Route>
      <Route path="/administracion/voluntarios" element={<Gestion_Voluntariado></Gestion_Voluntariado>}></Route>
      <Route path="/administracion/voluntarios/:id" element={<Voluntariado_Detalle></Voluntariado_Detalle>}></Route>
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
