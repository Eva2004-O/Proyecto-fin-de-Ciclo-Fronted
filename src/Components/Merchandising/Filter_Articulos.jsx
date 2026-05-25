import { useState } from "react";
import "./Filter_Articulos.css";

function Filter_Articulos({ onFilterChange }) {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");

  const handleChange = () => {
    onFilterChange({
      nombre,
      precio
    });
  };

  return (
    <div className="filtros-articulos-box">

  <div className="filtros-articulos">
    
    <div className="filtro-item">
      <label>Nombre</label>
      <input
        type="text"
        placeholder="Buscar por nombre"
        value={nombre}
        onChange={(e) => {
          setNombre(e.target.value);
          handleChange();
        }}
      />
    </div>

    <div className="filtro-item">
      <label>Precio</label>
      <select
        value={precio}
        onChange={(e) => {
          setPrecio(e.target.value);
          handleChange();
        }}
      >
        <option value="">Todos</option>
        <option value="0-5">0 - 5 €</option>
        <option value="5-10">5 - 10 €</option>
        <option value="10-20">10 - 20 €</option>
        <option value="20+">Más de 20 €</option>
      </select>
    </div>

  </div>

</div>
  )
}

export default Filter_Articulos;
