import { useState } from "react";
import Table_Donaciones from "./Table_Donaciones";
import './Gestion_Donaciones.css';

export const lista_apadrinamientos = [
  {
    id: "A-001",
    nombre: "Laura Fernández",
    email: "laura.fernandez@example.com",
    telefono: "612345678",
    animalId: "2",
    comentarios: "Quiero ayudar con sus gastos veterinarios.",
    fecha: "2026-05-01",
    estado: "activo"
  },
  {
    id: "A-002",
    nombre: "Marcos Varela",
    email: "marcos.varela@example.com",
    telefono: "698112233",
    animalId: "7",
    comentarios: "Me gustaría recibir fotos mensuales.",
    fecha: "2026-04-28",
    estado: "activo"
  },
  {
    id: "A-003",
    nombre: "Ana Souto",
    email: "ana.souto@example.com",
    telefono: "622334455",
    animalId: "3",
    comentarios: "Apoyo para su recuperación.",
    fecha: "2026-04-20",
    estado: "pendiente"
  },
  {
    id: "A-004",
    nombre: "Diego Castro",
    email: "diego.castro@example.com",
    telefono: "677889900",
    animalId: "5",
    comentarios: "Me gustaría visitarlo cuando sea posible.",
    fecha: "2026-04-15",
    estado: "activo"
  },
  {
    id: "A-005",
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
        donaciones={padrinosPaginados}
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
</div>
</div>
)
}

export default Gestion_Donaciones;