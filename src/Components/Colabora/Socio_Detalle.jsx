import { useParams, useNavigate } from "react-router-dom";
import { lista_socios } from "./Gestion_Socios";
import "./Socio_Detalle.css";

function Socio_Detalle() {
  const { id } = useParams();
  const navigate = useNavigate();

  const socio = lista_socios.find((s) => s.id === id);

  if (!socio) {
    return (
      <div className="detalle-container">
        <div className="detalle-card">
          <h2>Socio no encontrado</h2>
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

        <h1 className="detalle-nombre">Socio {socio.id}</h1>

        <div className="detalle-info">
          <div className="detalle-datos">
            <p><strong>Nombre:</strong> {socio.nombre}</p>
            <p><strong>Email:</strong> {socio.email}</p>
            <p><strong>Teléfono:</strong> {socio.telefono}</p>
            <p><strong>Cantidad:</strong> {socio.cantidad}€</p>
            <p><strong>Método de pago:</strong> {socio.metodoPago}</p>
            <p><strong>Fecha:</strong> {socio.fechaRegistro}</p>
          </div>

          {socio.comentarios && (
            <div className="detalle-historia">
              <h2>Comentarios</h2>
              <p>{socio.comentarios}</p>
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

export default Socio_Detalle;
