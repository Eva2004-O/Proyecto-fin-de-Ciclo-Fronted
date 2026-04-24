import './Colabora.css';

function Colabora(){


    return (
        <div className="colabora-container">

  <h1 className="colabora-titulo">Colabora con Nosotros</h1>
  <p className="colabora-subtitulo">
    Tu ayuda puede cambiar la vida de muchos animales. Elige cómo quieres colaborar. <br></br>
    (Para hacerte Socio, Voluntario o Padrino es necesario Iniciar Sesión)
  </p>

  <div className="colabora-grid">

    {/* SOCIO */}
    <div className="colabora-card">
      <div className="colabora-icono">🤝</div>
      <h2>Hazte Socio/a</h2>
      <p>
        Con una pequeña aportación mensual ayudas a cubrir alimentación, cuidados veterinarios
        y mejoras en nuestras instalaciones. <br></br>(Duración 3 meses)
      </p>
      <button className="colabora-btn">Más información</button>
    </div>

    {/* APADRINA */}
    <div className="colabora-card">
      <div className="colabora-icono">🐶</div>
      <h2>Apadrina</h2>
      <p>
        Si no puedes adoptar, apadrinar es la mejor forma de apoyar a un animal concreto
        y seguir de cerca su evolución. <br></br>(Duración 1 año)
      </p>
      <button className="colabora-btn">Apadrinar</button>
    </div>

    {/* DONACIONES */}
    <div className="colabora-card">
      <div className="colabora-icono">💛</div>
      <h2>Haz una Donación</h2>
      <p>
        Cada donación se destina a alimentación, medicinas, rescates urgentes y cuidados
        esenciales para nuestros animales.
      </p>
      <button className="colabora-btn">Donar</button>
    </div>

    {/* VOLUNTARIADO */}
    <div className="colabora-card">
      <div className="colabora-icono">🙋‍♀️</div>
      <h2>Hazte Voluntario/a</h2>
      <p>
        Paseos, limpieza, eventos, difusión… Tu tiempo y cariño pueden marcar la diferencia
        en su bienestar diario.
      </p>
      <button className="colabora-btn">Unirme</button>
    </div>

  </div>
</div>

    )
}

export default Colabora;