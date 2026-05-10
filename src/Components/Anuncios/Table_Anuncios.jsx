  import './Table_Anuncios.css';
  import { Link, } from "react-router-dom";

function Table_Anuncios({anuncios, onEliminar}){

     return (
    <div className="tabla-anuncios-container">

      <div className="btn-nuevo-container">
  <Link to="/administracion/anuncios/formulario" >
  <button className="btn-nuevo">➕ Añadir Articulo</button>
    
  </Link>
</div>


      <table className="tabla-anuncios">
        <thead>
          <tr>
            <th>ID</th>
            <th>Titular</th>
            <th>Tipo</th>
            <th>Fecha Evento</th>
            <th>Participantes</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {anuncios.map((anuncio) => (
            <tr key={anuncio.id}>
              <td>{anuncio.id}</td>
              <td>{anuncio.titulo}</td>
              <td>{anuncio.tipo}</td>
              <td>{anuncio.fecha}</td>
              <td>{(anuncio.participantesActuales ?? 0)}/{(anuncio.participantesTotales ?? anuncio.participantes ?? 0)}</td>
              
              <td className="acciones">
                <Link to={`/anuncios/${anuncio.id}`}>
                <button className="btn-ver">
                  👁 Ver
                </button>
                </Link>
                <Link to={`/administracion/anuncios/formulario/${anuncio.id}`}>
                <button  className="btn-editar">✏ Editar</button>
                    
              </Link>


                <button onClick={() => onEliminar(articulo.id)} className="btn-eliminar">
                  🗑 Eliminar
                </button>
                <Link to={`/administracion/anuncios/participantes/${anuncio.id}`}>
                <button  className="btn-ver">Participantes</button>
                    
              </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );

}

export default Table_Anuncios;