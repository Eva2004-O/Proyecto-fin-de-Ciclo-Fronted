import { useNavigate, useParams } from "react-router-dom";
import { lista_eventos } from "./List_Anuncios";
import "./Anuncios_Card_Details.css";

function Anuncios_Card_Details(){
    const { id } = useParams();
  const navigate = useNavigate();

  const anuncio = lista_eventos.find(e => e.id === id);

  if (!anuncio) {
    return <p>No se encontró el anuncio.</p>;
  }

  return (
    <div className="detalle-anuncio-container">

      <div className="detalle-anuncio-card">

        {/* INFORMACIÓN */}
        <div className="detalle-anuncio-info">

          <h1 className="detalle-anuncio-titulo">{anuncio.titulo}</h1>

          <span className="detalle-anuncio-fecha">📅 {anuncio.fecha}</span>

          <span className="detalle-anuncio-tipo">Anuncio</span>

          <div className="detalle-anuncio-contenido">
            <p>{anuncio.contenido}</p>
          </div>

          <button className="btn-volver" onClick={() => navigate(-1)}>
            ← Volver
          </button>

        </div>
      </div>
    </div>
  );
}

export default Anuncios_Card_Details;