import "./Table_Socios.css";
import { Link } from "react-router-dom";

function Table_Socios({ socios, onEliminar }) {
  return (
    <div className="tabla-socios-container">
      <table className="tabla-socios">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Cantidad</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {socios.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.nombre}</td>
              <td>{s.email}</td>
              <td>{s.telefono}</td>
              <td>{s.cantidad}€</td>

              <td className="acciones">
                <Link to={`/administracion/socios/${s.id}`}>
                  <button className="btn-ver">👁 Ver</button>
                </Link>
                <button onClick={() => onEliminar(animal.id)} className="btn-eliminar">
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

export default Table_Socios;
