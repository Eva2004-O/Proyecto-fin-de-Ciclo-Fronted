import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Formulario_Apadrinar.css";


import { listAnimales } from "../Animals/List_Animal";

function Formulario_Apadrinar() {
  const navigate = useNavigate();
  const { id } = useParams(); // id del animal si vienes desde su ficha

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    animal: "",
    comentarios: "",
    aceptaCondiciones: false
  });

  
  useEffect(() => {
    if (id) {
      setFormData((prev) => ({
        ...prev,
        animal: id
      }));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Solicitud de apadrinamiento:", formData);

    navigate("/colabora");
  };

  return (
    <form className="form-apadrinar" onSubmit={handleSubmit}>
      <h2>Apadrina un animal</h2>
      <p className="form-subtitulo">
        Tu ayuda cubre comida, cuidados veterinarios y bienestar diario.
      </p>

      <label>Nombre completo:</label>
      <input
        type="text"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        required
      />

      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label>Teléfono:</label>
      <input
        type="tel"
        name="telefono"
        value={formData.telefono}
        onChange={handleChange}
      />

      <label>Animal que deseas apadrinar:</label>

      
      {id ? (
        <input
          type="text"
          value={
            listAnimales.find((a) => a.id === id)?.nombre ||
            "Animal no encontrado"
          }
          disabled
        />
      ) : (
        <select
          name="animal"
          value={formData.animal}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona un animal...</option>

          {listAnimales.map((animal) => (
            <option key={animal.id} value={animal.id}>
              {animal.nombre}
            </option>
          ))}
        </select>
      )}

      <label>Comentarios (opcional):</label>
      <textarea
        name="comentarios"
        value={formData.comentarios}
        onChange={handleChange}
        placeholder="¿Quieres apoyar un caso concreto?"
      ></textarea>

      <label className="checkbox">
        <input
          type="checkbox"
          name="aceptaCondiciones"
          checked={formData.aceptaCondiciones}
          onChange={handleChange}
          required
        />
        Acepto las condiciones y la política de privacidad
      </label>

      <div className="form-botones">
        <button
          type="button"
          className="btn-volver"
          onClick={() => navigate(-1)}
        >
           Volver
        </button>

        <button
          type="submit"
          className="btn-enviar"
          disabled={!formData.aceptaCondiciones}
        >
          Enviar solicitud
        </button>
      </div>
    </form>
  );
}

export default Formulario_Apadrinar;
