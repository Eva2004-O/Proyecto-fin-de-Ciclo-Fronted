import { Link, } from "react-router-dom";
import './Table_Adopcion.css';
function Table_Adopcion({ solicitudes, onEliminar }){

return (
    <div className="tabla-animales-container">

      <div className="btn-nuevo-container">
</div>
      <table className="tabla-animales">
        <thead>
          <tr>
            <th>ID</th>
            <th>Animal</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Ciudad</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {solicitudes.map((solicitud) => (
            <tr key={solicitud.id}>
              <td>{solicitud.id}</td>
              <td>{solicitud.animal}</td>
              <td>{solicitud.nombre}</td>
              <td>{solicitud.email}</td>
              <td>{solicitud.telefono}</td>
              <td>{solicitud.ciudad}</td>

              {/* ACCIONES */}
              <td className="acciones">
                <Link to={`/administracion/solicitud/${solicitud.id}`}>
                <button className="btn-ver">
                  👁 Ver
                </button>
                </Link>
                <button onClick={() => onEliminar(solicitud.id)} className="btn-eliminar">
                  🗑 Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default Table_Adopcion;