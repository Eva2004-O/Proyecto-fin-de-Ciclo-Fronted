import { Link, useParams, useNavigate } from "react-router-dom";
import './Card_Animal_Details.css';


function Card_Animal_Details({animales}) {

    const {id} = useParams()
    const navigate = useNavigate();

    const animal = animales.find((a) => a.id === id);

    return (
      
     <div className="detalle-container">
  <div className="detalle-card">

    <h1 className="detalle-nombre">{animal.nombre}</h1>

    <img className="detalle-img" src={animal.imagen} alt={animal.nombre} />

    <div className="detalle-info">

      <span className={`detalle-estado ${animal.estado === "Adoptado" ? "adoptado" : "en-adopcion"}`}>
        {animal.estado}
      </span>

      <div className="detalle-datos">
        <p><strong>Edad:</strong> {animal.edad} años</p>
        <p><strong>Sexo:</strong> {animal.sexo}</p>
        <p><strong>Peso:</strong> {animal.peso} kg</p>
        <p><strong>Tamaño:</strong> {animal.tamaño}</p>
        <p><strong>Fecha Entrada:</strong> {animal.fecha_alta}</p>
      </div>

      <div className="detalle-historia">
        <h2>Su historia</h2>
        <p>{animal.historia}</p>
      </div>

      <div className="detalle-botones">
        <button type="button" className="btn-volver" onClick={() => navigate(-1)}>Volver</button>
        <Link to={`/animales/formulario/adopcion/${id}`}>
          <button className="btn-adoptar">Adoptar</button>
        </Link>
      </div>

    </div>
  </div>
</div>

    )
  }
export default Card_Animal_Details;