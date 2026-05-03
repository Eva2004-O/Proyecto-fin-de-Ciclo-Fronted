import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Formulario_Socio.css";

function Formulario_Socio() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    ciudad: "",
    cuota: "",
    metodoPago: "",
    comentarios: "",
    aceptaCondiciones: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Solicitud de socio enviada:", formData);

    navigate("/colabora");
  };

  return (
    <form className="form-socio" onSubmit={handleSubmit}>
      <h2>Hazte socio/a</h2>
      <p className="form-subtitulo">
        Tu aportación mensual nos ayuda a seguir rescatando, cuidando y encontrando hogar a los animales.
      </p>

      <label>Nombre completo:</label>
      <input
        type="text"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        required
      />

      <label>Email de contacto:</label>
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
        required
      />

      <label>Ciudad:</label>
      <input
        type="text"
        name="ciudad"
        value={formData.ciudad}
        onChange={handleChange}
      />

      <label>Cuota mensual:</label>
      <select
        name="cuota"
        value={formData.cuota}
        onChange={handleChange}
        required
      >
        <option value="">Selecciona...</option>
        <option value="5">5€ / mes</option>
        <option value="10">10€ / mes</option>
        <option value="15">15€ / mes</option>
        <option value="20">20€ / mes</option>
        <option value="otro">Otro importe</option>
      </select>

      {formData.cuota === "otro" && (
        <>
          <label>Introduce tu cuota personalizada:</label>
          <input
            type="number"
            name="cuotaPersonalizada"
            min="1"
            placeholder="Ej: 12"
            onChange={handleChange}
            required
          />
        </>
      )}

      <label>Método de pago:</label>
      <select
        name="metodoPago"
        value={formData.metodoPago}
        onChange={handleChange}
        required
      >
        <option value="">Selecciona...</option>
        <option value="domiciliacion">Domiciliación bancaria</option>
        <option value="tarjeta">Tarjeta</option>
        <option value="paypal">PayPal</option>
      </select>

      <label>Comentarios (opcional):</label>
      <textarea
        name="comentarios"
        value={formData.comentarios}
        onChange={handleChange}
        placeholder="Cuéntanos si quieres apoyar un caso concreto..."
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

export default Formulario_Socio;
