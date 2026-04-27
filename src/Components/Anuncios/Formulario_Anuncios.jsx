import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { lista_eventos } from "./List_Anuncios";
import "./Formulario_Anuncios.css";

function Formulario_Anuncios(){

    const navigate = useNavigate();
  const { id } = useParams();

  const anuncioExistente = lista_eventos.find(e => e.id === id);

  const [formData, setFormData] = useState({
    titulo: "",
    fecha: "",
    tipo: "",
    participantesTotales: "",
    descripcion: "",
    contenido: ""
  });

 
  useEffect(() => {
    if (anuncioExistente) {
      setFormData(anuncioExistente);
    }
  }, [anuncioExistente]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Datos enviados:", formData);

    
    navigate("/anuncios");
  };

  return (
    <form className="form-anuncios" onSubmit={handleSubmit}>
      <h2>{id ? "Editar anuncio/evento" : "Crear anuncio/evento"}</h2>

      <label>Título:</label>
      <input
        type="text"
        name="titulo"
        value={formData.titulo}
        onChange={handleChange}
        required
      />

      <label>Fecha Evento:</label>
      <input
        type="date"
        name="fecha"
        value={formData.fecha}
        onChange={handleChange}
        required
      />

      <label>Tipo:</label>
      <select
        name="tipo"
        value={formData.tipo}
        onChange={handleChange}
        required
      >
        <option value="">Selecciona...</option>
        <option value="evento">Evento</option>
        <option value="anuncio">Anuncio</option>
      </select>

    
      {formData.tipo === "evento" && (
        <>
          <label>Participantes totales:</label>
          <input
            type="number"
            name="participantesTotales"
            value={formData.participantes}
            onChange={handleChange}
            min="1"
            required
          />
        </>
      )}

      <label>Descripción corta:</label>
      <textarea
        name="descripcion"
        value={formData.descripcion}
        onChange={handleChange}
        required
      ></textarea>

      <label>Contenido completo:</label>
      <textarea
        name="contenido"
        value={formData.contenido}
        onChange={handleChange}
        className="textarea-grande"
        required
      ></textarea>
      <div className="form-botones">
            <button type="submit" className="btn-guardar">💾 Guardar</button>
            <button type="reset" className="btn-reset">Reset</button>
            <button type="button" className="btn-cancelar" onClick={() => navigate(-1)}>Cancelar</button>
          </div>
    </form>
  );
}

export default Formulario_Anuncios