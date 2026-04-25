import "./Contrato_Adopcion.css";

function Contrato_Adopcion() {
  const hoy = new Date().toLocaleDateString("es-ES");

  return (
    <div className="contrato-container">
      <div className="contrato-card">

        <h1 className="contrato-titulo">Contrato de Adopción</h1>
        <p className="contrato-subtitulo">
          Entre la protectora y la persona adoptante se establece el siguiente acuerdo:
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

        {/* DATOS DEL ANIMAL */}
        <section className="contrato-seccion">
          <h2>2. Datos del animal adoptado</h2>
          <p><strong>Nombre:</strong> ____________________________</p>
          <p><strong>Especie:</strong> Perro / Gato </p>
          <p><strong>Raza (si se conoce):</strong> ____________________________</p>
          <p><strong>Sexo:</strong> Macho / Hembra</p>
          <p><strong>Edad aproximada:</strong> ____________________________</p>
          <p><strong>Nº microchip:</strong> ____________________________</p>
        </section>

        {/* DATOS DEL ADOPTANTE */}
        <section className="contrato-seccion">
          <h2>3. Datos de la persona adoptante</h2>
          <p><strong>Nombre y apellidos:</strong> ____________________________</p>
          <p><strong>DNI/NIE:</strong> ____________________________</p>
          <p><strong>Dirección:</strong> ____________________________</p>
          <p><strong>Teléfono:</strong> ____________________________</p>
          <p><strong>Email:</strong> ____________________________</p>
        </section>

        {/* OBLIGACIONES DEL ADOPTANTE */}
        <section className="contrato-seccion">
          <h2>4. Obligaciones de la persona adoptante</h2>
          <ol className="contrato-lista">
            <li>Proporcionar al animal alimentación adecuada, agua y cuidados veterinarios necesarios.</li>
            <li>Garantizar un entorno seguro, estable y libre de maltrato o negligencia.</li>
            <li>No abandonar, regalar, vender ni ceder al animal sin comunicarlo previamente a la protectora.</li>
            <li>No utilizar al animal para cría, explotación o actividades lucrativas.</li>
            <li>Informar a la protectora en caso de pérdida, fuga, enfermedad grave o fallecimiento.</li>
            <li>Permitir seguimiento del caso si la protectora lo considera necesario.</li>
            <li>En caso de no poder mantener al animal, devolverlo a la protectora.</li>
          </ol>
        </section>

        {/* OBLIGACIONES DE LA PROTECTORA */}
        <section className="contrato-seccion">
          <h2>5. Obligaciones de la protectora</h2>
          <ol className="contrato-lista">
            <li>Entregar al animal en las mejores condiciones de salud posibles.</li>
            <li>Facilitar información sobre su carácter, historial y necesidades conocidas.</li>
            <li>Proporcionar documentación veterinaria disponible (vacunas, microchip, tratamientos).</li>
            <li>Ofrecer asesoramiento básico durante el proceso de adaptación.</li>
          </ol>
        </section>

        {/* PROTECCIÓN DE DATOS */}
        <section className="contrato-seccion">
          <h2>6. Protección de datos</h2>
          <p>
            Los datos personales facilitados por la persona adoptante serán tratados conforme a la normativa vigente
            y utilizados exclusivamente para la gestión de la adopción y el seguimiento del animal.
          </p>
        </section>

        {/* RESOLUCIÓN */}
        <section className="contrato-seccion">
          <h2>7. Resolución del contrato</h2>
          <p>
            La protectora podrá revocar la adopción y recuperar al animal si detecta maltrato, negligencia,
            incumplimiento grave de las obligaciones o condiciones inadecuadas para su bienestar.
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
              <p><strong>Firma de la persona adoptante</strong></p>
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

export default Contrato_Adopcion;
