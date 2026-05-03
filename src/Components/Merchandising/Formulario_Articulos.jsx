import { useState, useEffect } from "react";
import "./Formulario_Articulos.css";
import { useNavigate, useParams } from "react-router-dom";
import { lista_articulos } from "./List_Articulos";

function Formulario_Articulos(){
const { id } = useParams();
  const navigate = useNavigate();

  const articuloEncontrado = lista_articulos.find(a => String(a.id) === String(id));

const [formData, setFormData] = useState(
  articuloEncontrado || {
    id: "",
    nombre: "",
    imagen: "",
    precio: "",
    stock: "",
    descripcion: "",
  }
);


useEffect(() => {
  if (articuloEncontrado) {
    setFormData(articuloEncontrado);
  }
}, [articuloEncontrado]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Guardado:", formData);
    navigate("/administracion/merchandising");
  };

  return (
    <div className="formulario-pagina">
      <div className="formulario-contenido">

        <h2>{id ? "Editar Articulo" : "Añadir Articulo"}</h2>

        <form onSubmit={handleSubmit} className="form-articulo">


          <label>Imagen</label>
<input
  type="file"
  accept="image/*"
  onChange={(e) => {
    const archivo = e.target.files[0];
    setFormData({ ...formData, imagen: archivo });
  }}
/>
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />


          <label>Precio (€)</label>
          <input
            type="number"
            name="precio"
            value={formData.precio}
            onChange={handleChange}
            required
          />

          <label>Stock</label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            required
          />


          <label>Descripcion</label>
          <textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            rows="4"
            maxLength="255"
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

export default Formulario_Articulos;
