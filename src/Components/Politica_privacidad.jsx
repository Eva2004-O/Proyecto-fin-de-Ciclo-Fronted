import './Politica_privacidad.css'

function Politica_privacidad() {

    return (
        <div className="contenedor_principal">
            <h1>Política De Privacidad</h1>
            <p>En adopta con amor nos tomamos muy enserio la protección de tus datos personales</p>
            <p>Esta política explica que información recopilamos, como la utilizamos y cuales son tus derechos como usuario</p>
            <p>Nuestro objetivo es ser transparente y garantizar que tus datos estén siempre seguros</p>
            <div className="datos-recopilamos">
                <h2>Datos que recopilamos</h2>
                <p>Recopilamos únicamente los datos necesarios para gestionar las adopciones y mejorar tu experiencia en la web</p>
                <h3>Datos proporcionados por el usuario</h3>
                <ul>
                <li>Nombre y apellidos</li>
                <li>Email</li>
                <li>Telefono</li>
                <li>Dirección</li>
                <li>Información del formulario de adopción</li>
                </ul>
                <h3>Datos técnicos</h3>
                <ul>
                    <li>Dirección IP</li>
                    <li>Navegador y dispositivo</li>
                    <li>Cookies necesarias para el funcionamiento de la web</li>
                </ul>
            </div>
            <div className="utilidad-datos">
                <h2>Para que utilizamos tus datos</h2>
                <ul>
                    <li>Gestionar solicitudes de adopción</li>
                    <li>Contactar contigo sobre el proceso de adopción</li>
                    <li>Crear tu cuenta de usuario, si estas registrado</li>
                    <li>Mejorar la experiencia de navegación</li>
                    <li>Garantizar la seguridad de la plataforma</li>
                </ul>
                <p>Nunca cedemos ni vendemos tus datos con fines comerciales</p>
            </div>
            <div className="proteger-informacion">
                <h2>¿Cómo protegemos tu información?</h2>
                <ul>
                    <li>Cifrado de contraseñas</li>
                    <li>Conexiones seguras</li>
                    <li>Acceso restringuido a datos sensibles</li>
                    <li>Servidores protegidos y actualizados</li>
                </ul>
            </div>
            <div className="acceso-datos">
                <h2>¿Quien tiene acceso a sus datos?</h2>
                <p>Solo el personal autorizado de Adopta con amor puede acceder a tus datos y únicamente para gestionar
                    adopciones e incidencias
                </p>
            </div>
            <div className="cookies">
                <h2>Uso de cookies</h2>
                <p>Utilizamos cookies técnicas y de analisis básicas para: </p>
                <ul>
                    <li>Mantener la sesión iniciciadas</li>
                    <li>Recordar tus preferencias</li>
                    <li>Analizar el uso de la web para mejorarla</li>
                </ul>
                <p>Puedes desativarlas desde tu navegador</p>
            </div>
            <div className="conservacion-datos">
                <p>Conservación de datos:</p>
                <ul>
                    <li>Mientras dure el proceso de adopción</li>
                    <li>Mientras mantengas tu cuenta activa</li>
                    <li>Hasta que solicites su eliminación</li>
                </ul>
            </div>
            <div className="derechos">
                <h2>Tus derechos</h2>
                <ul>
                    <li>Acceder a tus datos</li>
                    <li>Ractificarlos</li>
                    <li>Solicitar su eliminación</li>
                    <li>Limitar su tratamiento</li>
                    <li>Retirar tu consentimiento</li>
                </ul>
                <p>Puedes ejercer estos derechos escribiendo a <strong>privacidad@adoptaConAmor.es</strong></p>
            </div>
        </div>
    )
}

export default Politica_privacidad;