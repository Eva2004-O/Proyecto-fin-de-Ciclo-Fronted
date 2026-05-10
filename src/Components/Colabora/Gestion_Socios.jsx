import { useState } from "react";
import Table_Socios from "./Table_Socios";
import "./Gestion_Socios.css";
export const lista_socios = [
  {
    id: "1",
    nombre: "Laura Fernández",
    email: "laura.fernandez@example.com",
    telefono: "612345678",
    cuota: 10,
    periodicidad: "mensual",
    metodoPago: "tarjeta",
    comentarios: "Quiero recibir noticias mensuales.",
    fecha: "2026-05-01"
  },
  {
    id: "2",
    nombre: "Marcos Varela",
    email: "marcos.varela@example.com",
    telefono: "698112233",
    cuota: 5,
    periodicidad: "mensual",
    metodoPago: "paypal",
    comentarios: "",
    fecha: "2026-04-28"
  },
  {
    id: "3",
    nombre: "Ana Souto",
    email: "ana.souto@example.com",
    telefono: "622334455",
    cuota: 20,
    periodicidad: "trimestral",
    metodoPago: "transferencia",
    comentarios: "Quiero apoyar casos especiales.",
    fecha: "2026-04-20"
  },
  {
    id: "4",
    nombre: "Diego Castro",
    email: "diego.castro@example.com",
    telefono: "677889900",
    cuota: 15,
    periodicidad: "mensual",
    metodoPago: "tarjeta",
    comentarios: "",
    fecha: "2026-04-15"
  },
  {
    id: "5",
    nombre: "Sara Iglesias",
    email: "sara.iglesias@example.com",
    telefono: "699887766",
    cuota: 8,
    periodicidad: "mensual",
    metodoPago: "paypal",
    comentarios: "Me gustaría recibir fotos de los animales.",
    fecha: "2026-04-10"
  }
];


function Gestion_Socios() {
  const [socios, setSocios] = useState(lista_socios);
  const [paginaActual, setPaginaActual] = useState(1);
  const sociosPorPagina = 9;

    const [socioAEliminar, setSocioAEliminar] = useState(null);

const handleEliminar = (id) => {
  const socio = socios.find(a => a.id === id);
  setAnimalAEliminar(socio); // Abre modal
};

const confirmarEliminar = () => {
  setSocios(socios.filter(a => a.id !== socioAEliminar.id));
  setSocioAEliminar(null);
};

const cancelarEliminar = () => {
  setSocioAEliminar(null);
};


  const indexUltimo = paginaActual * sociosPorPagina;
  const indexPrimero = indexUltimo - sociosPorPagina;
  const sociosPaginados = socios.slice(indexPrimero, indexUltimo);

  const totalPaginas = Math.ceil(socios.length / sociosPorPagina);

  const cambiarPagina = (numero) => {
    setPaginaActual(numero);
  };

  return (
    <div className="gestion-socios-container">
      <div className="contenedor-principal">
        <Table_Socios socios={sociosPaginados} onEliminar={handleEliminar}/>

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
 {socioAEliminar && (
  <div className="modal-eliminar">
    <div className="modal-contenido">

      <div className="modal-icono">
        ⚠️
      </div>

      <h3>¿Eliminar a {socioAEliminar.nombre}?</h3>
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

export default Gestion_Socios;
