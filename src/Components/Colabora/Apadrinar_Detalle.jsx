import { useParams, useNavigate } from "react-router-dom";
import { lista_apadrinamientos } from "./Gestion_Apadrinar";
import { listAnimales } from "../Animals/List_Animal";
import "./Apadrinar_Detalle.css";

function Apadrinar_Detalle() {
  const { id } = useParams();
  const navigate = useNavigate();

  const padrino = lista_apadrinamientos.find((p) => p.id === id);

  // Obtener nombre del animal
  const getAnimalName = (animalId) => {
    const animal = listAnimales.find((a) => a.id === animalId);
    return animal ? animal.nombre : "Desconocido";
  };

  if (!padrino) {
    return (
      <div className="detalle-container">
        <div className="detalle-card">
          <h2>Apadrinamiento no encontrado</h2>
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

        <h1 className="detalle-nombre">Apadrinamiento {padrino.id}</h1>

        <div className="detalle-info">
          <div className="detalle-datos">
            <p><strong>Nombre:</strong> {padrino.nombre}</p>
            <p><strong>Email:</strong> {padrino.email}</p>
            <p><strong>Teléfono:</strong> {padrino.telefono}</p>
            <p><strong>Animal:</strong> {getAnimalName(padrino.animalId)}</p>
            <p><strong>Fecha:</strong> {padrino.fecha}</p>
            <p><strong>Estado:</strong> {padrino.estado}</p>
          </div>

          {padrino.comentarios && (
            <div className="detalle-historia">
              <h2>Comentarios</h2>
              <p>{padrino.comentarios}</p>
            </div>
          )}
        </div>

        <div className="detalle-botones">
          <button className="btn-volver" onClick={() => navigate(-1)}>
            Volver
          </button>
        </div>

      </div>
    </div>
  );
}

export default Apadrinar_Detalle;
