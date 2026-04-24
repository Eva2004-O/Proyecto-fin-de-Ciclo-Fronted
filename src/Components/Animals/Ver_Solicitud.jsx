import { useParams, useNavigate } from "react-router-dom";
import './Ver_Solicitud.css';

function Ver_Solicitud({solicitudes}){
    const {id} = useParams()
    const navigate = useNavigate();

    const solicitud = solicitudes.find((s) => s.id === id);

    return (
            <div className="detalle-container-solicitud">

  <div className="detalle-card">

    <div className="detalle-info">

      <h1>Solicitud de Adopción para {solicitud.animal}</h1>

      <div className="detalle-datos">
        <p><strong>Nombre completo:</strong> {solicitud.nombre}</p>
        <p><strong>Email:</strong> {solicitud.email}</p>
        <p><strong>Teléfono:</strong> {solicitud.telefono}</p>
        <p><strong>Ciudad:</strong> {solicitud.ciudad || "No especificado"}</p>
        <p><strong>Tipo de vivienda:</strong> {solicitud.vivienda || "No especificado"}</p>
        <p><strong>Experiencia con animales:</strong> {solicitud.experiencia || "No especificado"}</p>
        <p><strong>Otros animales:</strong> {solicitud.otrosAnimales || "No especificado"}</p>
        <p><strong>Horas solo:</strong> {solicitud.horasSolo || "No especificado"}</p>
        <p><strong>Tipo contrato:</strong>{solicitud.tipoContrato}</p>
      </div>

      <div className="detalle-historia">
        <h2>Motivación para adoptar</h2>
        <p>{solicitud.motivacion}</p>
      </div>

      <div className="detalle-botones">
        <button type="button" className="btn-volver" onClick={() => navigate(-1)}>
          Volver
        </button>
      </div>

    </div>
  </div>
</div>

    )
}

export default Ver_Solicitud;