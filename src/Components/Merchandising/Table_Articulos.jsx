  import './Table_Articulos.css';
  import { Link, } from "react-router-dom";
function Table_Articulos({articulos, onEliminar}){

     return (
    <div className="tabla-articulos-container">

      <div className="btn-nuevo-container">
  <Link to="/administracion/merchandising/formulario" >
  <button className="btn-nuevo">➕ Añadir Articulo</button>
    
  </Link>
</div>


      <table className="tabla-articulos">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {articulos.map((articulo) => (
            <tr key={articulo.id}>
              <td>{articulo.id}</td>
              <td>{articulo.nombre}</td>
              <td>{articulo.precio}€</td>
              <td>{articulo.stock}</td>

              {/* ACCIONES */}
              <td className="acciones">
                <Link to={`/articulos/${articulo.id}`}>
                <button className="btn-ver">
                  👁 Ver
                </button>
                </Link>
                <Link to={`/administracion/merchandising/formulario/${articulo.id}`}>
                <button  className="btn-editar">✏ Editar</button>
                    
              </Link>


                <button onClick={() => onEliminar(articulo.id)} className="btn-eliminar">
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

export default Table_Articulos;