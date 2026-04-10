import Formulario_Filtrar_Solicitudes from "./Formulario_Filtrar_Solicitudes";
import './Gestion_Adopcion.css';
import { useState } from "react";
import Table_Adopcion from "./Table_Adopcion";
export const solicitudesAdopcion = [
  {
    id:"1",
    nombre: "Laura Fernández",
    email: "laura.fernandez@example.com",
    telefono: "612345678",
    ciudad: "Vigo",
    vivienda: "Piso",
    experiencia: "Ha tenido perros y gatos anteriormente",
    otrosAnimales: "Un gato de 3 años",
    horasSolo: "4 horas al día",
    motivacion: "Quiero darle un hogar estable y mucho cariño.",
    animal: "Valentina"
  },
  {
    id:"2",
    nombre: "Carlos Méndez",
    email: "carlos.mendez@example.com",
    telefono: "698112233",
    ciudad: "A Coruña",
    vivienda: "Finca",
    experiencia: "Voluntario en protectoras",
    otrosAnimales: "No",
    horasSolo: "1-2 horas al día",
    motivacion: "Busco un compañero para mis rutas de senderismo.",
    animal: "Mikado"
  },
  {
    id:"3",
    nombre: "Ana López",
    email: "ana.lopez@example.com",
    telefono: "677889900",
    ciudad: "Santiago de Compostela",
    vivienda: "Piso",
    experiencia: "Nunca ha tenido animales",
    otrosAnimales: "No",
    horasSolo: "6 horas al día",
    motivacion: "Quiero adoptar para dar una segunda oportunidad a un animal.",
    animal: "Zarzamo" 
  },
  {
    id: "4",
    nombre: "Marcos García",
    email: "marcos.garcia@example.com",
    telefono: "645778899",
    ciudad: "Ourense",
    vivienda: "Finca",
    experiencia: "Ha tenido perros grandes",
    otrosAnimales: "Dos perros sociables",
    horasSolo: "0-1 horas al día",
    motivacion: "Busco un nuevo miembro para la familia.",
    animal: "Troska"
  },
  {
    id:"5",
    nombre: "Patricia Silva",
    email: "patricia.silva@example.com",
    telefono: "699554433",
    ciudad: "Pontevedra",
    vivienda: "Piso",
    experiencia: "Ha cuidado animales de amigos",
    otrosAnimales: "Un conejo",
    horasSolo: "5 horas al día",
    motivacion: "Me gustaría adoptar para tener compañía y cuidar de un animal necesitado.",
    animal: "Toby"
  }
];


function Gestion_Adopcion(){
        
    const [solicitudes, setSolicitudes] = useState(solicitudesAdopcion);
    const [paginaActual, setPaginaActual] = useState(1);
    const solicitudesPorPagina = 9;

    const [filtros, setFiltros] =useState ({
        nombre: "",
        animal: "",
        telefono: "",
        email: ""
    })
  // --- ACCIONES ---
  
  const [solicitudAEliminar, setSolicitudAEliminar] = useState(null);

const handleEliminar = (id) => {
  const solicitud = solicitudes.find(a => a.id === id);
  setSolicitudAEliminar(solicitud); // Abre modal
};

const confirmarEliminar = () => {
  setSolicitudes(solicitudes.filter(a => a.id !== solicitudAEliminar.id));
  setSolicitudAEliminar(null);
};

const cancelarEliminar = () => {
  setSolicitudAEliminar(null);
};




  const handleFilterChange = (newFilters) => {
        setFiltros(newFilters)
    }

    const solicitudesFiltrados = solicitudes.filter((solicitud) => {
        return (
            (filtros.nombre === "" || solicitud.nombre.toLowerCase().includes(filtros.nombre.toLowerCase())) &&
            (filtros.animal === "" || solicitud.animal.toLowerCase().includes(filtros.animal.toLowerCase())) &&
            (filtros.telefono === "" || solicitud.telefono.toLowerCase().includes(filtros.telefono.toLowerCase())) &&
            (filtros.email === "" || solicitud.email.toLowerCase().includes(filtros.email.toLowerCase()))
        );
    })
    const indexUltimo = paginaActual * solicitudesPorPagina;
    const indexPrimero = indexUltimo - solicitudesPorPagina;
    const solicitudesPaginados = solicitudesFiltrados.slice(indexPrimero, indexUltimo);

    const totalPaginas = Math.ceil(solicitudesFiltrados.length / solicitudesPorPagina);

    const cambiarPagina = (numero) => {
        setPaginaActual(numero);
    };



  return (
    <div className="gestion-animal-container">
        <div className="contenedor-principal">
            <Formulario_Filtrar_Solicitudes onFilterChange={handleFilterChange}></Formulario_Filtrar_Solicitudes>
      <Table_Adopcion
        solicitudes={solicitudesPaginados}
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
 {solicitudAEliminar && (
  <div className="modal-eliminar">
    <div className="modal-contenido">

      <div className="modal-icono">
        ⚠️
      </div>

      <h3>¿Eliminar Solicitud de {solicitudAEliminar.nombre}?</h3>
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

export default Gestion_Adopcion;