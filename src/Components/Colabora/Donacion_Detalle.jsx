import { useParams, useNavigate } from "react-router-dom";
import { lista_donaciones } from "./Gestion_Donaciones";
import "./Donacion_Detalle.css";

function Donacion_Detalle() {
  const { id } = useParams();
  const navigate = useNavigate();

  const donacion = lista_donaciones.find((d) => d.id === id);

  if (!donacion) {
    return (
      <div className="detalle-container">
        <div className="detalle-card">
          <h2>Donación no encontrada</h2>
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

        <h1 className="detalle-nombre">Donación {donacion.id}</h1>

        <div className="detalle-info">
          <div className="detalle-datos">
            <p><strong>Nombre:</strong> {donacion.nombre}</p>
            <p><strong>Email:</strong> {donacion.email}</p>
            <p><strong>Cantidad:</strong> {donacion.cantidad}€</p>
            <p><strong>Método de pago:</strong> {donacion.metodoPago}</p>
            <p><strong>Fecha:</strong> {donacion.fechaRegistro}</p>
          </div>

          {donacion.comentarios && (
            <div className="detalle-historia">
              <h2>Comentarios</h2>
              <p>{donacion.comentarios}</p>
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

export default Donacion_Detalle;
