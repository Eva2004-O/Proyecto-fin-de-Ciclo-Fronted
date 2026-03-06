import PortadaImg from '/src/assets/PortadaImg.png';
import './Index.css';

function Index(){


    return (
       <header
      className="hero"
      style={{ backgroundImage: `url(${PortadaImg})` }}
    >
      <div className="hero-content">
        <h1>Adopta, no compres</h1>
        <p>Dales una segunda oportunidad</p>
        <button className="hero-btn">Ver animales</button>
      </div>
    </header>
    )
}

export default Index;