import PortadaImg from '/src/assets/PortadaImg.png';
import './Index.css';
import { Link } from 'react-router-dom';

function Index(){


    return (
       <header
      className="hero"
      style={{ backgroundImage: `url(${PortadaImg})` }}
    >
      <div className="hero-content">
        <h1>Adopta, no compres</h1>
        <p>Dales una segunda oportunidad</p>
        <Link to={`/animales`}>
        <button className="hero-btn" >Ver animales</button>
        </Link>
      </div>
    </header>
    )
}

export default Index;