import { useState } from "react";
import Table_Voluntariado from "./Table_Voluntariado";
import "./Gestion_Voluntariado.css";
import Filter_Colaborar from "./Filter_Colaborar";
export const lista_voluntariado = [
  {
    id: "1",
    nombre: "Laura Fernández",
    email: "laura.fernandez@example.com",
    telefono: "612345678",
    ciudad: "Vigo",
    disponibilidad: "mañanas",
    areas: ["paseos", "eventos"],
    experiencia: "He trabajado con animales rescatados.",
    comentarios: "Puedo ayudar más en verano.",
    fechaRegistro: "2026-05-01"
  },
  {
    id: "2",
    nombre: "Marcos Varela",
    email: "marcos.varela@example.com",
    telefono: "698112233",
    ciudad: "Pontevedra",
    disponibilidad: "fines de semana",
    areas: ["limpieza"],
    experiencia: "",
    comentarios: "",
    fechaRegistro: "2026-04-28"
  },
  {
    id: "3",
    nombre: "Ana Souto",
    email: "ana.souto@example.com",
    telefono: "622334455",
    ciudad: "Ourense",
    disponibilidad: "tardes",
    areas: ["redes", "eventos"],
    experiencia: "Gestión de redes sociales.",
    comentarios: "Puedo ayudar en campañas.",
    fechaRegistro: "2026-04-20"
  },
  {
    id: "4",
    nombre: "Diego Castro",
    email: "diego.castro@example.com",
    telefono: "677889900",
    ciudad: "Vigo",
    disponibilidad: "total",
    areas: ["paseos", "traslados"],
    experiencia: "",
    comentarios: "Tengo coche propio.",
    fechaRegistro: "2026-04-15"
  },
  {
    id: "5",
    nombre: "Sara Iglesias",
    email: "sara.iglesias@example.com",
    telefono: "699887766",
    ciudad: "A Coruña",
    disponibilidad: "mañanas",
    areas: ["limpieza"],
    experiencia: "",
    comentarios: "",
    fechaRegistro: "2026-04-10"
  }
];


function Gestion_Voluntariado() {

  const [voluntarios, setVoluntarios] = useState(lista_voluntariado);
  const [filtros, setFiltros] = useState({ nombre: "", correo: "" });
  const [paginaActual, setPaginaActual] = useState(1);
  const voluntariosPorPagina = 9;

  const handleFilterChange = (newFilters) => {
    setFiltros(newFilters);
    setPaginaActual(1); // Reiniciar paginación al filtrar
  };

  // --- FILTRADO ---
  const voluntariosFiltrados = voluntarios.filter((v) => {
    const coincideNombre = v.nombre.toLowerCase().includes(filtros.nombre.toLowerCase());
    const coincideCorreo = v.email.toLowerCase().includes(filtros.correo.toLowerCase());
    

    return coincideNombre && coincideCorreo;
  });

  // --- PAGINACIÓN ---
  const indexUltimo = paginaActual * voluntariosPorPagina;
  const indexPrimero = indexUltimo - voluntariosPorPagina;
  const voluntariosPaginados = voluntariosFiltrados.slice(indexPrimero, indexUltimo);

  const totalPaginas = Math.ceil(voluntariosFiltrados.length / voluntariosPorPagina);

  const cambiarPagina = (numero) => {
    setPaginaActual(numero);
  };

  // --- MODAL ELIMINAR ---
  const [voluntarioAEliminar, setVoluntarioAEliminar] = useState(null);

  const handleEliminar = (id) => {
    const voluntario = voluntarios.find(a => a.id === id);
    setVoluntarioAEliminar(voluntario);
  };

  const confirmarEliminar = () => {
    setVoluntarios(voluntarios.filter(a => a.id !== voluntarioAEliminar.id)); // corregido
    setVoluntarioAEliminar(null);
  };

  const cancelarEliminar = () => {
    setVoluntarioAEliminar(null);
  };

  return (
    <div className="gestion-voluntariado-container">
      <div className="contenedor-principal">

        {/* 🔶 FILTRO GLOBAL */}
        <Filter_Colaborar onFilterChange={handleFilterChange} />

        {/* TABLA */}
        <Table_Voluntariado
          voluntarios={voluntariosPaginados}
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

        {/* MODAL */}
        {voluntarioAEliminar && (
          <div className="modal-eliminar">
            <div className="modal-contenido">

              <div className="modal-icono">⚠️</div>

              <h3>¿Eliminar a {voluntarioAEliminar.nombre}?</h3>

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

export default Gestion_Voluntariado;
