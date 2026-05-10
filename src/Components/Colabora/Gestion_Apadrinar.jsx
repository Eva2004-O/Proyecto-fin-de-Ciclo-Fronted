import { useState } from "react";
import './Gestion_Apadrinar.css';
import Table_Apadrinar from "./Table_Apadrinar";

export const lista_apadrinamientos = [
  {
    id: "1",
    nombre: "Laura Fernández",
    email: "laura.fernandez@example.com",
    telefono: "612345678",
    animalId: "2",
    comentarios: "Quiero ayudar con sus gastos veterinarios.",
    fecha: "2026-05-01",
    estado: "activo"
  },
  {
    id: "2",
    nombre: "Marcos Varela",
    email: "marcos.varela@example.com",
    telefono: "698112233",
    animalId: "7",
    comentarios: "Me gustaría recibir fotos mensuales.",
    fecha: "2026-04-28",
    estado: "activo"
  },
  {
    id: "3",
    nombre: "Ana Souto",
    email: "ana.souto@example.com",
    telefono: "622334455",
    animalId: "3",
    comentarios: "Apoyo para su recuperación.",
    fecha: "2026-04-20",
    estado: "pendiente"
  },
  {
    id: "4",
    nombre: "Diego Castro",
    email: "diego.castro@example.com",
    telefono: "677889900",
    animalId: "5",
    comentarios: "Me gustaría visitarlo cuando sea posible.",
    fecha: "2026-04-15",
    estado: "activo"
  },
  {
    id: "5",
    nombre: "Sara Iglesias",
    email: "sara.iglesias@example.com",
    telefono: "699887766",
    animalId: "1",
    comentarios: "Apadrino con mucho cariño.",
    fecha: "2026-04-10",
    estado: "cancelado"
  }
];

function Gestion_Apadrinar(){

    const [padrinos, setPadrinos] = useState(lista_apadrinamientos);
    const [paginaActual, setPaginaActual] = useState(1);
    const padrinosPorPagina = 9;

  const handleFilterChange = (newFilters) => {
        setFiltros(newFilters)
    }
  const [padrinoAEliminar, setPadrinoAEliminar] = useState(null);

const handleEliminar = (id) => {
  const padrino = padrinos.find(a => a.id === id);
  setPadrinoAEliminar(padrino); // Abre modal
};

const confirmarEliminar = () => {
  setPadrinos(padrinos.filter(a => a.id !== padrinoAEliminar.id));
  setPadrinoAEliminar(null);
};

const cancelarEliminar = () => {
  setPadrinoAEliminar(null);
};


   
    const indexUltimo = paginaActual * padrinosPorPagina;
    const indexPrimero = indexUltimo - padrinosPorPagina;
    const padrinosPaginados = padrinos.slice(indexPrimero, indexUltimo);

    const totalPaginas = Math.ceil(padrinos.length / padrinosPorPagina);

    const cambiarPagina = (numero) => {
        setPaginaActual(numero);
    };



  return (
    <div className="gestion-padrino-container">
        <div className="contenedor-principal">
      <Table_Apadrinar
        padrinos={padrinosPaginados}
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
 {padrinoAEliminar && (
  <div className="modal-eliminar">
    <div className="modal-contenido">

      <div className="modal-icono">
        ⚠️
      </div>

      <h3>¿Eliminar a {padrinoAEliminar.nombre}?</h3>
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

export default Gestion_Apadrinar;