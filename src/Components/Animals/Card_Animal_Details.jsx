import { useParams, useNavigate } from "react-router-dom";
import { listAnimales } from "./List_Animal";
import "./Card_Animal_Details.css";

function Card_Animal_Details() {
  const { id } = useParams();
  const navigate = useNavigate();

  const animal = listAnimales.find((a) => a.id === id);

  if (!animal) {
    return (
      <div className="detalle-container">
        <div className="detalle-card">
          <h2>Animal no encontrado</h2>
          <button className="btn-volver" onClick={() => navigate(-1)}>
            Volver
          </button>
        </div>
      </div>
    );
  }

   return (
    <div className="detalle-container">
      <div className="detalle-card">

        <h1 className="detalle-nombre">{animal.nombre}</h1>

        <img className="detalle-img" src={animal.imagen} alt={animal.nombre} />

        <div className="detalle-info">

          <span
            className={`detalle-estado ${
              animal.estado === "Adoptado" ? "adoptado" : "en-adopcion"
            }`}
          >
            {animal.estado}
          </span>

          {/* DATOS PRINCIPALES */}
          <div className="detalle-datos">
            <p><strong>Especie:</strong> {animal.especie}</p>
            <p><strong>Edad:</strong> {animal.edad} años</p>
            <p><strong>Sexo:</strong> {animal.sexo}</p>
            <p><strong>Peso:</strong> {animal.peso} kg</p>
            <p><strong>Tamaño:</strong> {animal.tamaño}</p>
            <p><strong>Fecha de entrada:</strong> {animal.fecha_alta}</p>
          </div>

          {/* HISTORIA */}
          {animal.historia && (
            <div className="detalle-historia">
              <h2>Historia</h2>
              <p>{animal.historia}</p>
            </div>
          )}

          {/* BOTONES */}
          <div className="detalle-botones">
            <button
              type="button"
              className="btn-detalle btn-volver-animales"
              onClick={() => navigate(-1)}
            >
              Volver
            </button>

            <button
              type="button"
              className="btn-detalle btn-adoptar"
              onClick={() => navigate(`/animales/formulario/adopcion/${id}`)}
            >
              Preguntar
            </button>

            <button
              type="button"
              className="btn-detalle btn-apadrinar"
              onClick={() => navigate(`/colabora/apadrinar/${id}`)}
            >
              Apadrinar
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Card_Animal_Details;
