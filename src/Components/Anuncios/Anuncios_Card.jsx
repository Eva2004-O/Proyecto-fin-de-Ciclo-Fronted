import './Anuncios_Card.css';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Anuncios_Card( {evento} ){

      const navigate = useNavigate();
  const usuario = "usuario_demo"; // luego lo cambias por tu sistema de login

  const [participantesActuales, setParticipantesActuales] = useState(evento.participantesActuales);
  const [yaInscrito, setYaInscrito] = useState(false);

  // Cargar estado desde localStorage
  useEffect(() => {
    const inscripciones = JSON.parse(localStorage.getItem("inscripciones_eventos")) || {};
    if (inscripciones[evento.id]?.includes(usuario)) {
      setYaInscrito(true);
    }
  }, [evento.id]);

  // Función para inscribirse
  const handleParticipar = () => {
    const inscripciones = JSON.parse(localStorage.getItem("inscripciones_eventos")) || {};

    if (!inscripciones[evento.id]) {
      inscripciones[evento.id] = [];
    }

    if (!inscripciones[evento.id].includes(usuario)) {
      inscripciones[evento.id].push(usuario);
      localStorage.setItem("inscripciones_eventos", JSON.stringify(inscripciones));

      setParticipantesActuales(prev => prev + 1);
      setYaInscrito(true);
    }
};
    
    return (
        <div className="evento-card">

  <div className="evento-info">

    <h2 className="evento-titulo">{evento.titulo}</h2>

    <span className="evento-fecha">📅 {evento.fecha}</span>

    <span className={`evento-tipo ${evento.tipo === "evento" ? "tipo-evento" : "tipo-anuncio"}`}>
      {evento.tipo === "evento" ? "Evento" : "Anuncio"}
    </span>

    {evento.tipo === "evento" && (
      <p className="evento-participantes">
        Participantes: <strong>{participantesActuales}</strong> / {evento.participantes}
      </p>
    )}

    <p className="evento-descripcion">{evento.descripcion}</p>

    <div className="evento-botones">
      <button className="btn-ver" onClick={() => navigate(`/anuncios/${evento.id}`)}>
        Ver más
      </button>

      
          
          {evento.tipo === "evento" && (
            <button
              className="btn-participar"
              disabled={yaInscrito || participantesActuales >= evento.participantesTotales}
              onClick={handleParticipar}
            >
              {yaInscrito ? "Ya inscrito ✔" : "Participar"}
            </button>
          )}
        </div>

  </div>
</div>

    )
}


export default Anuncios_Card;