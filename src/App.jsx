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
       <nav className="navbar">
      <Link to="/" className="nav-logo">
        <img src={Logo} alt="Logo" />
      </Link>
        <div className="nav-links">
        <Link to="/adoptar">Adoptar</Link>
        <Link to="/contacto">Contacto</Link>
      </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFount />} />
        </Routes>
      </main>
    </div>
    </BrowserRouter>
        </>
    )
}
export default App;
