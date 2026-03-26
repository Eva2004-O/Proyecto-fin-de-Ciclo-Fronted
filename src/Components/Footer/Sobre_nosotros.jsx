import './Sobre_nosotros.css'

function Sobre_nosotros() {

    return (
        <div className="contenedor-principal">
            <h1 className="titulo-principal">Quienes Somos</h1>
            <div className='contenedor_imagenes_principal'>
                <img src="/src/assets/nosotros4.jpg"></img>
                <img src="/src/assets/nosotros5.jpg"></img>
                <img src="/src/assets/nosotros6.jpg"></img>
                </div>
                <p>Adopta con amor es una proctetora creada con un proposito muy real: dar una segunda oportunidad a perros y 
                    gatos que merecen un hogar lleno de cariño</p>
                <p>Nacimos con la idea de que de que cada adopción cambie 2 vidas: la del animal y la persona que lo acoge. Nuestro
                    equipo esta formado por voluntarios apasionados que dedican su tiempo a rescatar, cuidar y preparar a los animales
                    para su nueva familia
                </p>
                <div className="mision">
                <h2>Nuestra Misión: </h2>
                <li>Rescatar a animales en situación de abandono o maltrato</li>
                <li>Ofrecerles atención veterinaria, alimentación y un entorno seguro</li>
                <li>Encontrar familias responsables y comprometidas</li>
                <li>Promover la adopción siempre antes que la compra</li>
                <li>Educar sobre bienestar animal y tendencia responsable</li>
                </div>
                <div className="valores">
                    <h2>Nuestros Valores: </h2>
                    <li><strong>Amor: </strong>Cada animal recibe el cariño que se merece</li>
                    <li><strong>Respeto: </strong>Entendemos sus miedos, tiempos y necesidades</li>
                    <li><strong>Transparencia: </strong>Informamos con claridad sobre su estado de salud y carácter</li>
                    <li><strong>Compromiso: </strong>Acompañamos a las familias antes, durante y despues de la adopción</li>
                    <li><strong>Responsabilidad: </strong>Buscamos los hogares mas adecuados y duraderos</li>
                </div>
                <div className="cada_dia">
                    <h2>Que hacemos cada día: </h2>
                    <img src="/src/assets/nosotros1.jpg"></img>
                    <img src="/src/assets/nosotros2.avif"></img>
                    <img src="/src/assets/nosotros3.jpg"></img>
                    <li>Rescatamos animales abandonados o en riesgo</li>
                    <li>Realizamos revisiones veterinarias, vacunación y esterilizaciones</li>
                    <li>Socializamos a los animales para que recuperen confianza</li>
                    <li>Organizamos actividades educativas y jornadas de adopción</li>
                    <li>Gestionamos adopciones responsables y seguimiento posterior</li>
                </div>
                <div className="equipo">
                    <h2>Nuestro Equipo</h2>
                    <p>Un grupo de voluntarios y cuidadores que comparten una misión: ningún animal debería vivir sin amor</p>
                    <img src="/src/assets/nosotros7.jpg"></img>
                    <img src="/src/assets/nosotros8.jpg"></img>
                </div>
                <div className="ubicacion">
                    <h2>Donde estamos: </h2>
                    <p>Estamos en Vigo, en un pequeño refugio rodeado de naturaleza donde nuestros animales puedan recuperarse
                        tranquilos mientras esperan a su imagen definitiva
                    </p>
                </div>
                <div className="ayudar">
                    <h2>¿Cómo puedes ayudar?</h2>
                    <li>Adoptando</li>
                    <li>Acogiendo temporalmente</li>
                    <li>Donando comida o mantas</li>
                    <li>Haciendote voluntario</li>
                    <li>Difundiendo nuestros casos</li>
                    <li>Haciendote socio o apadrinando algún animal</li>
                </div>
        </div>
    )
}

export default Sobre_nosotros;