import { useParams, useNavigate } from "react-router-dom";
import { lista_voluntariado } from "./Gestion_Voluntariado";
import "./Voluntariado_Detalle.css";

function Voluntariado_Detalle() {
  const { id } = useParams();
  const navigate = useNavigate();

  const voluntario = lista_voluntariado.find((v) => v.id === id);

  if (!voluntario) {
    return (
      <div className="detalle-container">
        <div className="detalle-card">
          <h2>Voluntario no encontrado</h2>
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

        <h1 className="detalle-nombre">Voluntario {voluntario.id}</h1>

        <div className="detalle-info">
          <div className="detalle-datos">
            <p><strong>Nombre:</strong> {voluntario.nombre}</p>
            <p><strong>Email:</strong> {voluntario.email}</p>
            <p><strong>Teléfono:</strong> {voluntario.telefono}</p>
            <p><strong>Ciudad:</strong> {voluntario.ciudad}</p>
            <p><strong>Disponibilidad:</strong> {voluntario.disponibilidad}</p>
            <p><strong>Áreas:</strong> {voluntario.areas.join(", ")}</p>
            <p><strong>Fecha Registro:</strong> {voluntario.fechaRegistro}</p>
          </div>

          {voluntario.experiencia && (
            <div className="detalle-historia">
              <h2>Experiencia previa</h2>
              <p>{voluntario.experiencia}</p>
            </div>
          )}

          {voluntario.comentarios && (
            <div className="detalle-historia">
              <h2>Comentarios</h2>
              <p>{voluntario.comentarios}</p>
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

export default Voluntariado_Detalle;
