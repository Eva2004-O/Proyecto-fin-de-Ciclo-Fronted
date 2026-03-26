import { Link } from "react-router-dom";
import './Card_Animal.css';

function Card_Animal({ id, imagen, nombre, edad, sexo, estado }) {

  return (
    <div className="card-container">

      <img src={imagen} alt={nombre} />

      <div className="estado">
        <span>{estado}</span>
      </div>

      <h3>{nombre}</h3>

      <div className="info">
        <div>
          <strong>EDAD:</strong>
          <span>{edad} AÑOS</span>
        </div>

        <div>
          <strong>SEXO:</strong>
          <span>{sexo}</span>
        </div>
      </div>

      <div className="botones">
        <Link to={`/animales/${id}`}>
          <button className="btn-info">Más información</button>
        </Link>
        <Link to={`/animales/formulario/adopcion/${id}`}>
        <button className="btn-adoptar">Adoptar</button>
        </Link>
      </div>

    </div>
  );
}

export default Card_Animal;
