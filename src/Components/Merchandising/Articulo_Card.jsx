import './Articulo_Card.css';
import { Link } from "react-router-dom";
function Articulo_Card({id, nombre, precio, imagen }){
    
return(
    <div className="card-container">
        <img src={imagen} alt={nombre}></img>
        <h3>{nombre}</h3>
        <span>{precio}€</span>
        <div className="bontones">
            <Link to={`/articulos/${id}`}>
          <button className="btn-info">Más información</button>
        </Link>
        </div>
    </div>
) 


}

export default Articulo_Card;