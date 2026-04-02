  import './Table_Animal.css';
  import { Link, } from "react-router-dom";
function Table_Animal({ animales, onEliminar }) {
    
  return (
    <div className="tabla-animales-container">

      <div className="btn-nuevo-container">
  <Link to="/administracion/animales/formulario" >
  <button className="btn-nuevo">➕ Añadir animal</button>
    
  </Link>
</div>


      <table className="tabla-animales">
        <thead>
          <tr>
            <th>ID</th>
            <th>Especie</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Sexo</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {animales.map((animal) => (
            <tr key={animal.id}>
              <td>{animal.id}</td>
              <td>{animal.especie}</td>
              <td>{animal.nombre}</td>
              <td>{animal.edad}</td>
              <td>{animal.sexo}</td>
              <td>{animal.estado}</td>

              {/* ACCIONES */}
              <td className="acciones">
                <Link to={`/animales/${animal.id}`}>
                <button className="btn-ver">
                  👁 Ver
                </button>
                </Link>
                <Link to={`/administracion/animales/formulario/${animal.id}`}>
                <button  className="btn-editar">✏ Editar</button>
                    
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


export default Table_Animal;