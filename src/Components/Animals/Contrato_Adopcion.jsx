import './Contrato_Adopcion.css';
import { Navigate } from 'react-router-dom';
function Contrato_Adopcion(){

    return (
        <div className="contrato-container">
  <div className="contrato-card">

    <header className="contrato-header">
      <h1>Contrato de Adopción</h1>
      <p className="contrato-subtitulo">Adopta con Amor · [Vigo]</p>
      <p className="contrato-fecha">Fecha: ____ / ____ / ______</p>
    </header>

    <section className="contrato-bloque">
      <h2>Datos de la protectora</h2>
      <p><strong>Nombre:</strong> [Adopta con Amor]</p>
      <p><strong>CIF:</strong> [64732098P]</p>
      <p><strong>Dirección:</strong> [Camiño da Esperanza 12, Vigo, Galicia]</p>
      <p><strong>Teléfono:</strong> [+34 600 123 456]</p>
      <p><strong>Email:</strong> [contacto@adoptaConAmor.es]</p>
    </section>

    <section className="contrato-bloque">
      <h2>Datos del animal</h2>
      <p><strong>Nombre:</strong>________________________</p>
      <p><strong>Especie:</strong>________________</p>
      <p><strong>Sexo:</strong>_________</p>
      <p><strong>Edad aproximada:</strong>______ años</p>
      <p><strong>Nº microchip:</strong>_________________________</p>
    </section>

    <section className="contrato-bloque">
      <h2>Datos de la persona adoptante</h2>
      <p><strong>Nombre completo:</strong>______________________</p>
      <p><strong>DNI/NIE:</strong>_________________</p>
      <p><strong>Dirección:</strong>_________________________</p>
      <p><strong>Teléfono:</strong>_______________</p>
      <p><strong>Email:</strong>____________________</p>
    </section>

    <section className="contrato-bloque">
      <h2>Objeto del contrato</h2>
      <p>
        LA PROTECTORA cede en adopción el animal descrito en el presente documento a LA PERSONA ADOPTANTE,
        quien se compromete a cumplir las condiciones establecidas en este contrato, velando siempre por el
        bienestar del animal.
      </p>
    </section>

    <section className="contrato-bloque">
      <h2>Obligaciones de la persona adoptante</h2>
      <ol>
        <li>Proporcionar al animal alimentación adecuada, agua, cuidados higiénicos y un entorno seguro.</li>
        <li>Garantizar su bienestar físico y emocional, evitando cualquier situación de maltrato o negligencia.</li>
        <li>Facilitar atención veterinaria, incluyendo vacunas, desparasitaciones, revisiones y tratamientos necesarios.</li>
        <li>No abandonar, vender, regalar ni ceder al animal sin comunicarlo previamente a LA PROTECTORA.</li>
        <li>No utilizar al animal para cría, peleas, explotación o actividades lucrativas.</li>
        <li>Informar a LA PROTECTORA en caso de pérdida, fuga, enfermedad grave o fallecimiento del animal.</li>
        <li>Permitir, si fuera necesario, seguimiento del caso por parte de LA PROTECTORA.</li>
        <li>En caso de no poder mantener al animal, devolverlo a LA PROTECTORA.</li>
      </ol>
    </section>

    <section className="contrato-bloque">
      <h2>Obligaciones de la protectora</h2>
      <ol>
        <li>Entregar al animal en las mejores condiciones posibles de salud.</li>
        <li>Facilitar información sobre su carácter, historial y necesidades conocidas.</li>
        <li>Proporcionar la documentación veterinaria disponible (vacunas, microchip, tratamientos, etc.).</li>
        <li>Ofrecer asesoramiento básico durante el proceso de adaptación.</li>
      </ol>
    </section>

    <section className="contrato-bloque">
      <h2>Protección de datos</h2>
      <p>
        Los datos personales facilitados por LA PERSONA ADOPTANTE serán tratados conforme a la normativa vigente
        y utilizados exclusivamente para la gestión de la adopción y el seguimiento del animal.
      </p>
    </section>

    <section className="contrato-bloque">
      <h2>Resolución del contrato</h2>
      <p>
        LA PROTECTORA podrá revocar la adopción y recuperar al animal si detecta maltrato, negligencia,
        incumplimiento grave de las obligaciones o condiciones inadecuadas para su bienestar.
      </p>
    </section>

    <section className="contrato-bloque">
      <h2>Aceptación</h2>
      <p>
        Ambas partes declaran haber leído y comprendido el contenido del presente contrato, aceptando todas sus
        cláusulas.
      </p>
    </section>

    <section className="contrato-firmas">
      <div className="firma-bloque">
        <p>En [Vigo], a ____ / ____ / ______</p>
      </div>
      <div className="firma-lineas">
        <div>
          <p>Firma de la Protectora</p>
          <div className="linea-firma"></div>
        </div>
        <div>
          <p>Firma de la Persona Adoptante</p>
          <div className="linea-firma"></div>
        </div>
      </div>
    </section>

  </div>
</div>

    )
}

export default Contrato_Adopcion;