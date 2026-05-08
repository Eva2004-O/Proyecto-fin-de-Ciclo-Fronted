import "./Table_Voluntariado.css";
import { Link } from "react-router-dom";

function Table_Voluntariado({ voluntarios }) {
  return (
    <div className="tabla-voluntarios-container">
      <table className="tabla-voluntarios">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Ciudad</th>
            <th>Disponibilidad</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {voluntarios.map((v) => (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.nombre}</td>
              <td>{v.email}</td>
              <td>{v.telefono}</td>
              <td>{v.ciudad}</td>
              <td>{v.disponibilidad}</td>

              <td className="acciones">
                <Link to={`/administracion/voluntarios/${v.id}`}>
                  <button className="btn-ver">👁 Ver</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table_Voluntariado;
