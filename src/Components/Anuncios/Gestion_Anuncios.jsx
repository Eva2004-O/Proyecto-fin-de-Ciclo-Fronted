import { useState } from "react";  
import Table_Anuncios from "./Table_Anuncios";
import { lista_eventos } from "./List_Anuncios";
import './Gestion_Anuncios.css';

function Gestion_Anuncios(){
const [anuncios, setAnuncios] = useState(lista_eventos);
    const [paginaActual, setPaginaActual] = useState(1);
    const anunciosPorPagina = 9;

  // --- ACCIONES ---
  
  const [anuncioAEliminar, setAnuncioAEliminar] = useState(null);

const handleEliminar = (id) => {
  const anuncio = anuncios.find(a => a.id === id);
  setAnuncioAEliminar(anuncio); 
};

const confirmarEliminar = () => {
  setAnuncios(anuncios.filter(a => a.id !== anuncioAEliminar.id));
  setAnuncioAEliminar(null);
};

const cancelarEliminar = () => {
  setAnuncioAEliminar(null);
};

  const handleFilterChange = (newFilters) => {
        setFiltros(newFilters)
    }


   
    const indexUltimo = paginaActual * anunciosPorPagina;
    const indexPrimero = indexUltimo - anunciosPorPagina;
    const anunciosPaginados = anuncios.slice(indexPrimero, indexUltimo);

    const totalPaginas = Math.ceil(anuncios.length / anunciosPorPagina);

    const cambiarPagina = (numero) => {
        setPaginaActual(numero);
    };



  return (
    <div className="gestion-anuncio-container">
        <div className="contenedor-principal">
      <Table_Anuncios
        anuncios={anunciosPaginados}
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
 {anuncioAEliminar && (
  <div className="modal-eliminar">
    <div className="modal-contenido">

      <div className="modal-icono">
        ⚠️
      </div>

      <h3>¿Eliminar a {anuncioAEliminar.titular}?</h3>
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

export default Gestion_Anuncios;