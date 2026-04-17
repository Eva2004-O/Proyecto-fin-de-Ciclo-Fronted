import { Link, useParams, useNavigate } from "react-router-dom";
import './Articulo_Card_Details.css';
function Articulo_Card_Details({articulos}){
const {id} = useParams();
const navigate = useNavigate();

const articulo = articulos.find((a) => a.id === id) 
return (
    <div className="detalle-articulo-container">
  <div className="detalle-articulo-card">

    <img className="detalle-articulo-img" src={articulo.imagen} alt={articulo.nombre} />

    <div className="detalle-articulo-info">

      <h1 className="detalle-articulo-nombre">{articulo.nombre}</h1>

      <span className="detalle-articulo-precio">{articulo.precio}€</span>


      <div className="detalle-articulo-descripcion">
        <h2>Descripción</h2>
        <p>{articulo.descripcion}</p>
      </div>

      <div className="detalle-articulo-botones">
        <button className="btn-volver" onClick={() => navigate(-1)}>Volver</button>
        <button className="btn-comprar">Comprar</button>
      </div>

    </div>
  </div>
</div>

)

}

export default Articulo_Card_Details;