import { useState } from "react";
import Table_Articulos from "./Table_Articulos";  
import { lista_articulos } from "./List_Articulos";
import './Gestion_Articulos.css';
import Filter_Articulos from "./Filter_Articulos";


function Gestion_Articulos() {

  const [articulos, setArticulos] = useState(lista_articulos);
  const [filtros, setFiltros] = useState({ nombre: "", precio: "" });
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

  // --- FILTROS ---
  const handleFilterChange = (newFilters) => {
    setFiltros(newFilters);
    setPaginaActual(1); // Reiniciar paginación al filtrar
  };

  const articulosFiltrados = articulos.filter((a) => {
    const coincideNombre = a.nombre
      .toLowerCase()
      .includes(filtros.nombre.toLowerCase());

    let coincidePrecio = true;
    const precioNum = Number(a.precio);

    if (filtros.precio === "0-5") coincidePrecio = precioNum <= 5;
    if (filtros.precio === "5-10") coincidePrecio = precioNum > 5 && precioNum <= 10;
    if (filtros.precio === "10-20") coincidePrecio = precioNum > 10 && precioNum <= 20;
    if (filtros.precio === "20+") coincidePrecio = precioNum > 20;

    return coincideNombre && coincidePrecio;
  });

  // --- PAGINACIÓN ---
  const indexUltimo = paginaActual * articulosPorPagina;
  const indexPrimero = indexUltimo - articulosPorPagina;
  const articulosPaginados = articulosFiltrados.slice(indexPrimero, indexUltimo);

  const totalPaginas = Math.ceil(articulosFiltrados.length / articulosPorPagina);

  const cambiarPagina = (numero) => {
    setPaginaActual(numero);
  };

  return (
    <div className="gestion-articulo-container">
      <div className="contenedor-principal">

        {/* FILTROS */}
        <Filter_Articulos onFilterChange={handleFilterChange} />

        {/* TABLA */}
        <Table_Articulos
          articulos={articulosPaginados}
          onEliminar={handleEliminar}
        />

        {/* PAGINACIÓN */}
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

        {/* MODAL ELIMINAR */}
        {articuloAEliminar && (
          <div className="modal-eliminar">
            <div className="modal-contenido">

              <div className="modal-icono">⚠️</div>

              <h3>¿Eliminar {articuloAEliminar.nombre}?</h3>

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
  );
}

export default Gestion_Articulos;