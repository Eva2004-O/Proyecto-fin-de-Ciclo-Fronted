import { useState, useEffect } from "react";
import "./Formulario_Animal.css";
import { useNavigate, useParams } from "react-router-dom";
import { listAnimales } from "./List_Animal";

function Formulario_Animal() {

  const { id } = useParams();
  const navigate = useNavigate();

  const animalEncontrado = listAnimales.find(a => String(a.id) === String(id));

const [formData, setFormData] = useState(
  animalEncontrado || {
    id: "",
    especie: "",
    imagen: "",
    nombre: "",
    edad: "",
    sexo: "",
    estado: "",
    peso: "",
    tamaño: "",
    historia: ""
  }
);


useEffect(() => {
  if (animalEncontrado) {
    setFormData(animalEncontrado);
  }
}, [animalEncontrado]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Guardado:", formData);
    navigate("/administracion/animales");
  };

  return (
    <div className="formulario-pagina">
      <div className="formulario-contenido">

        <h2>{id ? "Editar Animal" : "Añadir Animal"}</h2>

        <form onSubmit={handleSubmit} className="form-animal">

          <label>Especie</label>
          <select name="especie" value={formData.especie} onChange={handleChange} required>
            <option value="">Seleccionar...</option>
            <option value="PERRO">Perro</option>
            <option value="GATO">Gato</option>
          </select>

          <label>Imagen (URL)</label>
          <input
            type="text"
            name="imagen"
            value={formData.imagen}
            onChange={handleChange}
            required
          />

          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />

          <label>Edad</label>
          <input
            type="number"
            name="edad"
            value={formData.edad}
            onChange={handleChange}
            required
          />

          <label>Sexo</label>
          <select name="sexo" value={formData.sexo} onChange={handleChange} required>
            <option value="">Seleccionar...</option>
            <option value="MACHO">Macho</option>
            <option value="HEMBRA">Hembra</option>
          </select>

          <label>Estado</label>
          <select name="estado" value={formData.estado} onChange={handleChange} required>
            <option value="">Seleccionar...</option>
            <option value="Disponible">Disponible</option>
            <option value="Adoptado">Adoptado</option>
            <option value="En tratamiento">En tratamiento</option>
          </select>

          <label>Peso (kg)</label>
          <input
            type="number"
            name="peso"
            value={formData.peso}
            onChange={handleChange}
            required
          />

          <label>Tamaño</label>
          <select name="tamaño" value={formData.tamaño} onChange={handleChange} required>
            <option value="">Seleccionar...</option>
            <option value="pequeño">Pequeño</option>
            <option value="mediano">Mediano</option>
            <option value="grande">Grande</option>
          </select>

          <label>Historia</label>
          <textarea
            name="historia"
            value={formData.historia}
            onChange={handleChange}
            rows="4"
            required
          />

          <div className="form-botones">
            <button type="submit" className="btn-guardar">💾 Guardar</button>
            <button type="reset" className="btn-reset">Reset</button>
            <button type="button" className="btn-cancelar" onClick={() => navigate(-1)}>Cancelar</button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Formulario_Animal;
