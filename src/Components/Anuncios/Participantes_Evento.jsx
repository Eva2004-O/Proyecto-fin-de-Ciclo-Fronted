import { useParams, useNavigate } from "react-router-dom";
import "./Participantes_Evento.css";

// Ejemplo de lista de participantes (puedes sustituirla por tu backend)
export const lista_participantes = [
  {
    id: "1",
    nombre: "Laura Fernández",
    email: "laura.fernandez@example.com",
    telefono: "612345678",
    fecha: "2026-05-01"
  },
  {
    id: "2",
    nombre: "Marcos Varela",
    email: "marcos.varela@example.com",
    telefono: "698112233",
    fecha: "2026-04-28"
  },
  {
    id: "3",
    nombre: "Ana Souto",
    email: "ana.souto@example.com",
    telefono: "622334455",
    fecha: "2026-04-20"
  }
];

function Participantes_Evento() {
  const { id } = useParams(); // ID del evento
  const navigate = useNavigate();

  // En un backend real filtrarías por eventoId
  const participantes = lista_participantes;

  return (
    <div className="participantes-container">
      <div className="participantes-card">

        <h1 className="participantes-titulo">
          Participantes del evento {id}
        </h1>

        {participantes.length === 0 ? (
          <p className="sin-participantes">No hay participantes registrados.</p>
        ) : (
          <table className="tabla-participantes">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Teléfono</th>
                <th>Fecha</th>
              </tr>
            </thead>

            <tbody>
              {participantes.map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.nombre}</td>
                  <td>{p.email}</td>
                  <td>{p.telefono}</td>
                  <td>{p.fecha}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <div className="participantes-botones">
          <button className="btn-volver" onClick={() => navigate(-1)}>
            Volver
          </button>
        </div>

      </div>
    </div>
  );
}

export default Participantes_Evento;
