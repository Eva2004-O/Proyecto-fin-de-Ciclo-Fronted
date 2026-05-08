import { useState } from "react";
import Table_Donaciones from "./Table_Donaciones";
import './Gestion_Donaciones.css';

export const lista_donaciones = [
  {
    id: "1",
    nombre: "Laura Fernández",
    email: "laura.fernandez@example.com",
    tipoDonacion: "puntual",
    cantidad: 20,
    metodoPago: "tarjeta",
    fecha: "2026-05-01",
    comentarios: "Para ayudar con los gastos veterinarios."
  },
  {
    id: "2",
    nombre: "Marcos Varela",
    email: "marcos.varela@example.com",
    tipoDonacion: "mensual",
    cantidad: 10,
    metodoPago: "paypal",
    fecha: "2026-04-28",
    comentarios: "Me encanta vuestro trabajo."
  },
  {
    id: "3",
    nombre: "Ana Souto",
    email: "ana.souto@example.com",
    tipoDonacion: "puntual",
    cantidad: 50,
    metodoPago: "transferencia",
    fecha: "2026-04-20",
    comentarios: "Para el caso de Luna."
  },
  {
    id: "4",
    nombre: "Diego Castro",
    email: "diego.castro@example.com",
    tipoDonacion: "mensual",
    cantidad: 15,
    metodoPago: "tarjeta",
    fecha: "2026-04-15",
    comentarios: "Quiero apoyar a los gatos senior."
  },
  {
    id: "5",
    nombre: "Sara Iglesias",
    email: "sara.iglesias@example.com",
    tipoDonacion: "puntual",
    cantidad: 5,
    metodoPago: "paypal",
    fecha: "2026-04-10",
    comentarios: "Pequeña ayuda, con cariño."
  }
];


function Gestion_Donaciones(){

    const [donaciones, setDonaciones] = useState(lista_donaciones);
    const [paginaActual, setPaginaActual] = useState(1);
    const donacionesPorPagina = 9;



  const handleFilterChange = (newFilters) => {
        setFiltros(newFilters)
    }


   
    const indexUltimo = paginaActual * donacionesPorPagina;
    const indexPrimero = indexUltimo - donacionesPorPagina;
    const donacionesPaginados = donaciones.slice(indexPrimero, indexUltimo);

    const totalPaginas = Math.ceil(donaciones.length / donacionesPorPagina);

    const cambiarPagina = (numero) => {
        setPaginaActual(numero);
    };



  return (
    <div className="gestion-donacion-container">
        <div className="contenedor-principal">
      <Table_Donaciones
        donaciones={donacionesPaginados}
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