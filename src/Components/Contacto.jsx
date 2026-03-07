import './Contacto.css'

function Contacto(){

    return (
        <div className="contenedor-principal">
            <div className="contacto-hero">
            <h1>Contacta con Adopción con Amor</h1>
            <p>Estamos aquí para ayudarte a encontrar a tu nuevo compañero de vida</p>
            </div>
            <div className="contacto-info">
                <h2>Información de contacto</h2>
                <p><strong>Dirección: </strong><br></br>
                Camiño da Esperanza 12<br></br>
                Vigo, Galicia
                </p>
                <p><strong>Email: </strong><br></br>
                contacto@adoptaConAmor.es
                </p>
                <p><strong>Telefono:</strong><br></br>
                +34 600 123 456
                </p>
                <p><strong>Horario:</strong><br></br>
                L-S 10:00-20:00
                </p>
            </div>
            <div className="contacto-Redes">
                <h2>Siguenos en Redes Sociales</h2>
                <div className="redes-iconos">
                    <a href="https://www.instagram.com"><img src="/src/assets/instagram.jpg"></img></a>
                    <a href="https://www.tiktok.com"><img src="/src/assets/ticktok.jpg"></img></a>
                    <a href="www.facebook.com/"><img src="/src/assets/facebook.jpg"></img></a>
                </div>

            </div>
            <div className="contacto-mapa">
                <h2>Ven a conocernos</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2953.3162262291858!2d-8.6705722242321!3d42.25041904202202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2f62c67c51ccef%3A0xd4a29635448f699e!2sCentro%20municipal%20de%20proteci%C3%B3n%20animal%20A%20Madroa!5e0!3m2!1ses!2ses!4v1772921180327!5m2!1ses!2ses" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Contacto;