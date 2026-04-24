import { useState } from "react";
import Table_Articulos from "./Table_Articulos";  
import { lista_articulos } from "./List_Articulos";
import './Gestion_Articulos.css';

function Gestion_Articulos(){

    const [articulos, setArticulos] = useState(lista_articulos);
    const [paginaActual, setPaginaActual] = useState(1);
    const articulosPorPagina = 9;

  // --- ACCIONES ---
  
  const [articuloAEliminar, setArticuloAEliminar] = useState(null);

const handleEliminar = (id) => {
  const articulo = articulos.find(a => a.id === id);
  setArticuloAEliminar(articulo); 
};

const confirmarEliminar = () => {
  setArticulos(articulos.filter(a => a.id !== articuloAEliminar.id));
  setArticuloAEliminar(null);
};

const cancelarEliminar = () => {
  setArticuloAEliminar(null);
};




  const handleFilterChange = (newFilters) => {
        setFiltros(newFilters)
    }


   
    const indexUltimo = paginaActual * articulosPorPagina;
    const indexPrimero = indexUltimo - articulosPorPagina;
    const articulosPaginados = articulos.slice(indexPrimero, indexUltimo);

    const totalPaginas = Math.ceil(articulos.length / articulosPorPagina);

    const cambiarPagina = (numero) => {
        setPaginaActual(numero);
    };



  return (
    <div className="gestion-articulo-container">
        <div className="contenedor-principal">
      <Table_Articulos
        articulos={articulosPaginados}
        onEliminar={handleEliminar}
      />
      
   
    
    <div className="paginacion">
  {Array.from({ length: totalPaginas }, (_, i) => (
    <button
      key={i}
      className={`pagina-btn ${paginaActual === i + 1 ? "activa" : ""}`}
      onClick={() => cambiarPagina(i + 1)}
    >
      {i + 1}
    </button>
  ))}
</div>
 {articuloAEliminar && (
  <div className="modal-eliminar">
    <div className="modal-contenido">

      <div className="modal-icono">
        ⚠️
      </div>

      <h3>¿Eliminar a {articuloAEliminar.nombre}?</h3>
      <div className="modal-botones">
        <button className="btn-eliminar-modal" onClick={confirmarEliminar}>
          🗑 Eliminar
        </button>

        <button className="btn-cancelar-modal" onClick={cancelarEliminar}>
          Cancelar
        </button>
      </div>

    </div>
  </div>
)}
</div>
</div>
)
}

export default Gestion_Articulos;