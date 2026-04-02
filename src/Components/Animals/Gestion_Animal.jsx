import { useState } from "react";
import Table_Animal from "./Table_Animal";   
import { listAnimales } from "./List_Animal"; 
import Formulario_Filtrar_Animales from "./Formulario_Filtrar_Animales";
import './Gestion_Animal.css';
function Gestion_Animal() {
    
    const [animales, setAnimales] = useState(listAnimales);
    const [paginaActual, setPaginaActual] = useState(1);
    const animalesPorPagina = 9;

    const [filtros, setFiltros] =useState ({
        nombre: "",
        edad: "",
        sexo: "",
        tamaño: "",
        estado: "",
        especie: ""
    })
  // --- ACCIONES ---
  
  const [animalAEliminar, setAnimalAEliminar] = useState(null);

const handleEliminar = (id) => {
  const animal = animales.find(a => a.id === id);
  setAnimalAEliminar(animal); // Abre modal
};

const confirmarEliminar = () => {
  setAnimales(animales.filter(a => a.id !== animalAEliminar.id));
  setAnimalAEliminar(null);
};

const cancelarEliminar = () => {
  setAnimalAEliminar(null);
};




  const handleFilterChange = (newFilters) => {
        setFiltros(newFilters)
    }

    const categoriaEdad = (edad) => {
    const n = Number(edad);
    if (n <= 1) return "CACHORRO";
    if (n > 1 && n <= 9) return "ADULTO";
    return "SENIOR";
};

    const animalesFiltrados = animales.filter((animal) => {
        return (
            (filtros.nombre === "" || animal.nombre.toLowerCase().includes(filtros.nombre.toLowerCase())) &&
            (filtros.edad === "" || categoriaEdad(animal.edad) === filtros.edad) &&
            (filtros.sexo === "" || animal.sexo === filtros.sexo) &&
            (filtros.tamaño === "" || animal.tamaño === filtros.tamaño) &&
            (filtros.estado === "" || animal.estado === filtros.estado) &&
            (filtros.especie === "" || animal.especie === filtros.especie)
        );
    })
    const indexUltimo = paginaActual * animalesPorPagina;
    const indexPrimero = indexUltimo - animalesPorPagina;
    const animalesPaginados = animalesFiltrados.slice(indexPrimero, indexUltimo);

    const totalPaginas = Math.ceil(animalesFiltrados.length / animalesPorPagina);

    const cambiarPagina = (numero) => {
        setPaginaActual(numero);
    };



  return (
    <div className="gestion-animal-container">
        <div className="contenedor-principal">
            <Formulario_Filtrar_Animales onFilterChange={handleFilterChange}></Formulario_Filtrar_Animales>
      <Table_Animal
        animales={animalesPaginados}
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
 {animalAEliminar && (
  <div className="modal-eliminar">
    <div className="modal-contenido">

      <div className="modal-icono">
        ⚠️
      </div>

      <h3>¿Eliminar a {animalAEliminar.nombre}?</h3>
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

export default Gestion_Animal;
