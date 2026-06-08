import './Table_Donaciones.css';
  import { Link, } from "react-router-dom";
function Table_Donaciones({donaciones, onEliminar}){

     return (
    <div className="tabla-donaciones-container">


      <table className="tabla-donaciones">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Tipo Donación</th>
            <th>Cantidad</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {donaciones.map((donacion) => (
            <tr key={donacion.id}>
              <td>{donacion.id}</td>
              <td>{donacion.nombre}</td>
              <td>{donacion.email}</td>
              <td>{donacion.tipoDonacion} </td>
                <td>{donacion.cantidad}{donacion.cantidadPersonalizada}€</td>
                <td>{donacion.fechaRegistro}</td>
              <td className="acciones">
                <Link to={`/administracion/donaciones/${donacion.id}`}>
                <button className="btn-ver">
                  👁 Ver
                </button>
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

export default Table_Donaciones;