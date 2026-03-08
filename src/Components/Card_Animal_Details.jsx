import { Link, useParams } from "react-router-dom";
import './Card_Animal_Details.css';


function Card_Animal_Details({animales}) {

    const {id} = useParams()

    const animal = animales.find((a) => a.id === id);

    return (
        <>
            <div className="detalle-container">

      <div className="detalle-card">

        <img className="detalle-img" src={animal.imagen} alt={animal.nombre} />

        <div className="detalle-info">

          <h1>{animal.nombre}</h1>

          <span className={`detalle-estado ${animal.estado === "Adoptado" ? "adoptado" : "en-adopcion"}`}>
            {animal.estado}
          </span>

          <div className="detalle-datos">
            <p><strong>Edad:</strong> {animal.edad} años</p>
            <p><strong>Sexo:</strong> {animal.sexo}</p>
            <p><strong>Peso:</strong> {animal.peso} kg</p>
            <p><strong>Tamaño:</strong> {animal.tamaño}</p>
          </div>

          <div className="detalle-historia">
            <h2>Su historia</h2>
            <p>{animal.historia}</p>
          </div>

          <div className="detalle-botones">
            <Link to="/animales">
            <button className="btn-volver">Volver</button></Link>
            <button className="btn-adoptar">Adoptar</button>
          </div>

        </div>
      </div>
    </div>
        </>
    )
}

export default Card_Animal_Details;