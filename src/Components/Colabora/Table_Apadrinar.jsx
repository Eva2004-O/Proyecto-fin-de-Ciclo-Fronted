import './Table_Apadrinar.css';
import { Link } from "react-router-dom";
import { listAnimales } from '../Animals/List_Animal';

function Table_Apadrinar({ padrinos, onEliminar }) {

  // Función para obtener el nombre del animal
  const getAnimalName = (id) => {
    const animal = listAnimales.find(a => a.id === id);
    return animal ? animal.nombre : "Desconocido";
  };

  return (
    <div className="tabla-padrinos-container">

      <table className="tabla-padrinos">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Animal</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {padrinos.map((padrino) => (
            <tr key={padrino.id}>
              <td>{padrino.id}</td>
              <td>{padrino.nombre}</td>
              <td>{padrino.email}</td>
              <td>{padrino.telefono}</td>
              <td>{getAnimalName(padrino.animalId)}</td>
              <td>{padrino.fechaRegistro}</td>

              <td className="acciones">
                <Link to={`/administracion/apadrinar/${padrino.id}`}>
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

export default Table_Apadrinar;
