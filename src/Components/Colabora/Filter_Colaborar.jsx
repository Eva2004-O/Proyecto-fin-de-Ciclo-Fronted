import { useState } from "react";
import "./Filter_Colaborar.css";

function Filter_Colaborar({ onFilterChange }) {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  const handleChange = () => {
    onFilterChange({
      nombre,
      correo
    });
  };

  return (
    <div className="filtros-global-box">

      <div className="filtros-global">

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
          <label>Correo</label>
          <input
            type="text"
            placeholder="Buscar por correo"
            value={correo}
            onChange={(e) => {
              setCorreo(e.target.value);
              handleChange();
            }}
          />
        </div>


      </div>

    </div>
  );
}

export default Filter_Colaborar;
