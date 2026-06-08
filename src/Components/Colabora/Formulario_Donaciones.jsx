import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Formulario_Donaciones.css";

function Formulario_Donaciones() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoDonacion: "",
    cantidad: "",
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

    console.log("Donación enviada:", formData);

    navigate("/colabora");
  };

  return (
    <form className="form-donaciones" onSubmit={handleSubmit}>
      <h2>Haz una donación</h2>
      <p className="form-subtitulo">
        Tu ayuda nos permite seguir rescatando, cuidando y dando segundas oportunidades.
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

      <label>Cantidad:</label>
      <select
        name="cantidad"
        value={formData.cantidad}
        onChange={handleChange}
        required
      >
        <option value="">Selecciona...</option>
        <option value="5">5€</option>
        <option value="10">10€</option>
        <option value="20">20€</option>
        <option value="30">30€</option>
      </select>

      {formData.cantidad === "otro" && (
        <>
          <label>Introduce tu importe personalizado:</label>
          <input
            type="number"
            name="cantidad"
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
        <option value="tarjeta">Tarjeta</option>
        <option value="paypal">PayPal</option>
        <option value="transferencia">Transferencia bancaria</option>
      </select>

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
          Realizar donación
        </button>
      </div>
    </form>
  );
}

export default Formulario_Donaciones;
