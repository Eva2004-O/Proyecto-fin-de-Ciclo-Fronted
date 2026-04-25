import { useState } from "react";

import Anuncios_Card from "./Anuncios_Card";
import "./List_Anuncios.css";

export const lista_eventos = [
  {
    id: "1",
    titulo: "Jornada de Adopción",
    fecha: "12 Mayo 2026",
    tipo: "evento",
    participantes: 18,
    participantesActuales: 5,
    descripcion: "Un día especial para conocer a nuestros animales y ayudarles a encontrar un hogar.",
    contenido: "Durante esta jornada podrás conocer a nuestros perros y gatos, recibir asesoramiento sobre adopciones y participar en actividades solidarias."
  },

  {
    id: "2",
    titulo: "Campaña de Donación de Alimentos",
    fecha: "20 Mayo 2026",
    tipo: "anuncio",
    descripcion: "Recogida solidaria de pienso, latas y mantas para los animales rescatados.",
    contenido: "Durante todo el mes estaremos recogiendo alimentos y materiales para cubrir las necesidades básicas de nuestros animales."
  },

  {
    id: "3",
    titulo: "Taller de Voluntariado",
    fecha: "5 Junio 2026",
    tipo: "evento",
    participantes: 12,
    participantesActuales: 3,
    descripcion: "Aprende cómo ayudar en la protectora y formar parte del equipo.",
    contenido: "Explicaremos las tareas de voluntariado, horarios, responsabilidades y cómo puedes unirte a nuestro equipo."
  },

  {
    id: "4",
    titulo: "Aviso Importante: Nuevos Horarios",
    fecha: "10 Junio 2026",
    tipo: "anuncio",
    descripcion: "Actualizamos los horarios de atención al público y visitas.",
    contenido: "A partir del 15 de junio, la protectora abrirá de lunes a sábado de 10:00 a 14:00 y de 16:00 a 19:00."
  },

  {
    id: "5",
    titulo: "Ruta Solidaria con Perros",
    fecha: "22 Junio 2026",
    tipo: "evento",
    participantes: 25,
    participantesActuales: 13,
    descripcion: "Una caminata solidaria para disfrutar con nuestros peludos.",
    contenido: "Realizaremos una ruta de 5 km acompañados de algunos de nuestros perros. Actividad apta para todas las edades."
  },

  {
    id: "6",
    titulo: "Campaña de Esterilización Responsable",
    fecha: "1 Julio 2026",
    tipo: "anuncio",
    descripcion: "Promovemos la esterilización para evitar abandonos y camadas no deseadas.",
    contenido: "Informamos sobre clínicas colaboradoras, descuentos y beneficios de la esterilización responsable."
  },

  {
    id: "7",
    titulo: "Fiesta Solidaria de Verano",
    fecha: "15 Julio 2026",
    tipo: "evento",
    participantes: 40,
    participantesActuales: 25,
    descripcion: "Música, comida y actividades para recaudar fondos.",
    contenido: "Habrá puestos solidarios, música en directo, sorteos y actividades para niños. Todo lo recaudado irá destinado a tratamientos veterinarios."
  },

  {
    id: "8",
    titulo: "Rescate Destacado: Historia de Luna",
    fecha: "18 Julio 2026",
    tipo: "anuncio",
    descripcion: "Conoce la historia de Luna, una perrita rescatada recientemente.",
    contenido: "Luna fue encontrada en situación crítica y gracias al apoyo de la comunidad está recuperándose. Compartimos su evolución y cómo puedes ayudar."
  }
];


function List_Anuncios() {
  const eventosPorPagina = 8;
  const [paginaActual, setPaginaActual] = useState(1);

  const indiceInicio = (paginaActual - 1) * eventosPorPagina;
  const indiceFin = indiceInicio + eventosPorPagina;

  const eventosPaginados = lista_eventos.slice(indiceInicio, indiceFin);

  const totalPaginas = Math.ceil(lista_eventos.length / eventosPorPagina);

  function inscribirseEvento(evento) {
  const usuario = "usuario_demo"; // luego lo cambias por tu login real

  // Cargar inscripciones
  const inscripciones = JSON.parse(localStorage.getItem("inscripciones_eventos")) || {};

  // Si no existe el evento, lo creamos
  if (!inscripciones[evento.id]) {
    inscripciones[evento.id] = [];
  }

  // Si ya está inscrito → no hacer nada
  if (inscripciones[evento.id].includes(usuario)) {
    return;
  }

  // Añadir usuario
  inscripciones[evento.id].push(usuario);

  // Guardar en localStorage
  localStorage.setItem("inscripciones_eventos", JSON.stringify(inscripciones));
}


  return (
    <div className="lista-eventos">

      <h1 className="titulo-eventos">Eventos y Anuncios</h1>
      <p className="subtitulo-eventos">
        Mantente al día de todas nuestras actividades, campañas y novedades.
      </p>

      <div className="contenedor-eventos">
        {eventosPaginados.map((evento) => (
          <Anuncios_Card key={evento.id} evento={evento} />
        ))}
      </div>

      <div className="paginacion-eventos">
        {Array.from({ length: totalPaginas }, (_, i) => (
          <button
            key={i}
            className={`pagina-btn ${paginaActual === i + 1 ? "activa" : ""}`}
            onClick={() => setPaginaActual(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>

    </div>
  );
}

export default List_Anuncios;


