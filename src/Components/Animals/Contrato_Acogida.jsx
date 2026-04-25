import "./Contrato_Acogida.css";

function Contrato_Acogida(){


  const hoy = new Date().toLocaleDateString("es-ES");

  return (
    <div className="contrato-container">
      <div className="contrato-card">

        <h1 className="contrato-titulo">Contrato de Acogida Temporal</h1>
        <p className="contrato-subtitulo">
          Entre la protectora y la persona de acogida se establece el siguiente acuerdo:
        </p>

        {/* DATOS DE LA PROTECTORA */}
        <section className="contrato-seccion">
          <h2>1. Datos de la protectora</h2>
          <p><strong>Nombre:</strong> Protectora ____________________________</p>
          <p><strong>CIF:</strong> ____________________________</p>
          <p><strong>Dirección:</strong> ____________________________</p>
          <p><strong>Teléfono:</strong> ____________________________</p>
          <p><strong>Email:</strong> ____________________________</p>
        </section>

        {/* DATOS DE LA PERSONA DE ACOGIDA */}
        <section className="contrato-seccion">
          <h2>2. Datos de la persona de acogida</h2>
          <p><strong>Nombre y apellidos:</strong> ____________________________</p>
          <p><strong>DNI/NIE:</strong> ____________________________</p>
          <p><strong>Dirección:</strong> ____________________________</p>
          <p><strong>Teléfono:</strong> ____________________________</p>
          <p><strong>Email:</strong> ____________________________</p>
        </section>

        {/* DATOS DEL ANIMAL */}
        <section className="contrato-seccion">
          <h2>3. Datos del animal acogido</h2>
          <p><strong>Nombre:</strong> ____________________________</p>
          <p><strong>Especie:</strong> Perro / Gato</p>
          <p><strong>Raza (si se conoce):</strong> ____________________________</p>
          <p><strong>Sexo:</strong> Macho / Hembra</p>
          <p><strong>Edad aproximada:</strong> ____________________________</p>
          <p><strong>Nº chip (si lo tiene):</strong> ____________________________</p>
        </section>

        {/* CONDICIONES */}
        <section className="contrato-seccion">
          <h2>4. Condiciones de la acogida</h2>
          <ol className="contrato-lista">
            <li>
              La persona de acogida se compromete a cuidar del animal, proporcionándole
              alimentación, agua, descanso y un entorno seguro.
            </li>
            <li>
              El animal seguirá siendo propiedad de la protectora durante todo el periodo de acogida.
            </li>
            <li>
              Cualquier decisión veterinaria importante será consultada previamente con la protectora,
              salvo casos de urgencia vital.
            </li>
            <li>
              No se podrá ceder, regalar, vender ni abandonar al animal bajo ninguna circunstancia.
            </li>
            <li>
              La protectora podrá retirar al animal de la acogida si considera que no se cumplen
              las condiciones adecuadas.
            </li>
          </ol>
        </section>

        {/* DURACIÓN */}
        <section className="contrato-seccion">
          <h2>5. Duración de la acogida</h2>
          <p>
            La acogida tendrá una duración aproximada desde el día
            <span className="campo-linea"> ____ / ____ / ______ </span>
            hasta
            <span className="campo-linea"> ____ / ____ / ______ </span>,
            pudiendo ser prorrogada o finalizada de mutuo acuerdo.
          </p>
        </section>

        {/* FIRMAS */}
        <section className="contrato-seccion firmas">
          <div>
            <p>En ______________________, a {hoy}</p>
          </div>

          <div className="firmas-contenedor">
            <div className="firma-bloque">
              <p><strong>Firma de la protectora</strong></p>
              <div className="firma-linea"></div>
            </div>

            <div className="firma-bloque">
              <p><strong>Firma de la persona de acogida</strong></p>
              <div className="firma-linea"></div>
            </div>
          </div>
        </section>

<div className="contrato-botones">
  <button className="btn-volver" onClick={() => window.history.back()}>
    Volver
  </button>

  <button className="btn-imprimir" onClick={() => window.print()}>
    Imprimir
  </button>
</div>



      </div>
    </div>
  );
}

export default Contrato_Acogida;