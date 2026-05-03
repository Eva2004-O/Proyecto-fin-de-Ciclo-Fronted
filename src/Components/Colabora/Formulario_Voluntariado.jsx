import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Formulario_Voluntariado.css";

function Formulario_Voluntariado() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    ciudad: "",
    disponibilidad: "",
    areas: [],
    experiencia: "",
    comentarios: "",
    aceptaCondiciones: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "areas") {
      const updatedAreas = checked
        ? [...formData.areas, value]
        : formData.areas.filter((a) => a !== value);

      setFormData({ ...formData, areas: updatedAreas });
      return;
    }

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Solicitud de voluntariado enviada:", formData);
    navigate("/colabora");
  };

  return (
    <form className="form-voluntariado" onSubmit={handleSubmit}>
      <h2>Hazte voluntario/a</h2>
      <p className="form-subtitulo">
        Tu tiempo puede cambiar la vida de muchos animales.
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

      <label>Ciudad:</label>
      <input
        type="text"
        name="ciudad"
        value={formData.ciudad}
        onChange={handleChange}
      />

      <label>Disponibilidad:</label>
      <select
        name="disponibilidad"
        value={formData.disponibilidad}
        onChange={handleChange}
        required
      >
        <option value="">Selecciona...</option>
        <option value="mañanas">Mañanas</option>
        <option value="tardes">Tardes</option>
        <option value="fines de semana">Fines de semana</option>
        <option value="total">Disponibilidad total</option>
      </select>

      <label>Áreas en las que te gustaría ayudar:</label>
      <div className="checkbox-group">
        <label>
          <input
            type="checkbox"
            name="areas"
            value="paseos"
            onChange={handleChange}
          />
          Paseos y socialización
        </label>

        <label>
          <input
            type="checkbox"
            name="areas"
            value="limpieza"
            onChange={handleChange}
          />
          Limpieza y mantenimiento
        </label>

        <label>
          <input
            type="checkbox"
            name="areas"
            value="eventos"
            onChange={handleChange}
          />
          Eventos y campañas
        </label>

        <label>
          <input
            type="checkbox"
            name="areas"
            value="traslados"
            onChange={handleChange}
          />
          Traslados a veterinarios
        </label>

        <label>
          <input
            type="checkbox"
            name="areas"
            value="redes"
            onChange={handleChange}
          />
          Difusión en redes
        </label>
      </div>

      <label>¿Tienes experiencia previa con animales?</label>
      <textarea
        name="experiencia"
        value={formData.experiencia}
        onChange={handleChange}
        placeholder="Cuéntanos si has trabajado con animales antes..."
      ></textarea>

      <label>Comentarios adicionales (opcional):</label>
      <textarea
        name="comentarios"
        value={formData.comentarios}
        onChange={handleChange}
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

export default Formulario_Voluntariado;
