import { useState, useEffect } from "react";
import Card_Animal from "./Card_Animal";
import perroFoto1 from '/src/assets/perro1.jpg';
import gatoFoto1 from '/src/assets/gato1.jpg';
import perroFoto2 from '/src/assets/perro2.jpg';
import perroFoto3 from '/src/assets/perro3.jpg';
import perroFoto4 from '/src/assets/perro4.png';
import perroFoto5 from '/src/assets/perro5.png';
import gatoFoto2 from '/src/assets/gato2.jpg';
import gatoFoto3 from '/src/assets/gato3.jpg';
import gatoFoto4 from '/src/assets/gato4.jpg';
import gatoFoto5 from '/src/assets/gato5.jpg';

import './List_Animal.css';
import Formulario_Filtrar_Animales from "./Formulario_Filtrar_Animales";

export const listAnimales = [
    {id: "1", especie:"PERRO", imagen:perroFoto1, nombre:"Troska", edad:"8", sexo:"HEMBRA", fecha_alta: "12/08/2020", estado:"Disponible", peso:20, tamaño:"mediano",
    historia:"Troska estuvo toda su vida atada, y llegó con una inseguridad hacia las personas, que tras trabajo y dedicación, ha desaparecido por completo. Actualmente está completamente rehabilitada, es súper cariñosa, le encanta tomar el sol y los paseos. Le encanta ir a saludar a todo el mundo y es sociable con otros perros. Necesita licencia PPP. Ayúdanos a encontrarle el mejor hogar!"
 },
    {id: "2",especie:"GATO", imagen:gatoFoto1, nombre:"British", edad:"3",fecha_alta: "8/07/2025", sexo:"HEMBRA", estado:"Disponible", peso:3, tamaño:"pequeño", 
        historia:"Gatita rescatada de el parking de El Corte Inglés donde se había refugiado de la lluvia. Amante del pavito, de dormir a los pies de la cama de su mama de acogida, ronroneadora y no duda en reclamar una sesión de mimos extra cuando a ella le apetece. De pelaje suave y esponjoso y grandes ojos verdes, se ha adaptado bien a la convivencia en una casa de acogida con humanos y otros gatos."
    },
    {id: "3",especie:"GATO", imagen:gatoFoto2, nombre:"Valentina", edad:"6", sexo:"HEMBRA",fecha_alta: "23/06/2023", estado:"Disponible", peso:3, tamaño:"pequeño",
        historia:"Y qué guapa es Valentina! 😻Esta gatita lleva con nosotros ya un tiempo, y ha llegado el momento de que encuentre una familia. Como una de las veteranas, podemos decir que es una gatita buenísima que solo pide un hogar donde recibir amor. ¿Se lo darás tú?"
    },
    {id: "4",especie:"PERRO", imagen:perroFoto2, nombre:"Avellana", edad:"10", sexo:"HEMBRA",fecha_alta: "18/02/2018", estado:"Disponible", peso:18, tamaño:"mediano", 
        historia:"¡UNA REINA BUSCA SU TRONO! (Y UN LUGAR PARA SUS JUGUETES) ¡Hola a todos! Soy AVELLANA y estoy buscando a mi familia definitiva. Dicen por ahí que el carnet de identidad marca 10 años, pero ¡no os lo creáis! Mi energía y mis ganas de vivir dicen que tengo apenas 6 o 7 añitos. Estoy en la flor de la vida, ¡solo que un poquito mejor alimentada! Peso unos 18/20 kg de puro amor. Sí, estoy un poquito gordita, ¡pero eso solo significa que hay más superficie para acariciar! Sé perfectamente lo que es vivir en una casa. Me encanta la comodidad, las rutinas y, sobre todo, sentirme parte de una familia Los peques me vuelven loca. Soy paciente, dulce y extremadamente cariñosa con ellos. ¡Soy la niñera perfecta! Mi hobby favorito es coleccionar mis tesoros y llevarlos todos a mi camita. ¡Me encanta tener mis cosas organizadas! Busco un hogar donde me quieran tal y como soy. Alguien que no se fije en un número, sino en mi mirada llena de gratitud. Soy una perrita encantadora, sociable con todo el mundo y muy equilibrada. Solo necesito un sofá (o una camita amplia para mis juguetes) y mucho cariño para dar. Si buscas una compañera fiel que ya sabe lo que es el respeto y el amor de un hogar, ¡esa soy yo!"
    },
    {id: "5",especie:"PERRO", imagen:perroFoto3, nombre:"Alcazar", edad:"2", sexo:"MACHO",fecha_alta: "21/09/2024", estado:"Disponible", peso:23, tamaño:"mediano", 
        historia:"Este galguete nos ha mostrado desde el primer día que tiene muy buen carácter. 🌟Se muestra siempre alegre, juguetón, divertido y cariñoso, y es que aún no ha dejado de ser cachorro ya que tiene solo año y medio. 🐶Convive con el resto de perros del refugio sin problema por lo que puede ser adoptado por familias con más perros en el hogar." 
    },
    {id: "6",especie:"GATO", imagen:gatoFoto3, nombre:"Leo", edad:"3", sexo:"MACHO",fecha_alta: "08/09/2024", estado:"Disponible", peso:3, tamaño:"mediano", 
        historia:"Lleva casi dos años esperando un hogar!!!! Por favor!!!!!"
    },
    {id: "7",especie:"GATO", imagen:gatoFoto4, nombre:"Prince", edad:"3", sexo:"MACHO",fecha_alta: "05/10/2020", estado:"Disponible", peso:3, tamaño:"mediano", 
        historia:"Le rescatamos junto a su mamá y sus cuatro hermanos. Es el único de la familia que aún no tiene su propio hogar, a pesar de ser un encanto! Es amigo de todos los gatos y de todos los perros, y le encanta jugar."
    },
    {id: "8",especie:"PERRO", imagen:perroFoto4, nombre:"Toby", edad:"12", sexo:"MACHO",fecha_alta: "25/06/2022", estado:"Disponible", peso:5, tamaño:"pequeño", 
        historia:"Toby es un perrito especial que está esperando la oportunidad de conocer por fin lo que es una familia de verdad. Es muy bueno y tremendamente cariñoso con las personas. Le encanta recibir mimos, caricias y compartir ratitos tranquilos. Se lleva genial con otros perros, sin importar su tamaño. Tiene un carácter noble y sociable, por lo que sería un compañero perfecto tanto para familias con más peluditos como para quienes quieran sumar a su primer compañero de cuatro patas. Toby llegó en muy mal estado y todo apunta a que ha sufrido en el pasado. Por eso, si alguien se acerca de forma brusca o demasiado directa, a veces se asusta y puede reaccionar por miedo. Pero cuando te acercas con suavidad y respeto, se muestra tal y como es: un perro dulce, manejable y con muchísimas ganas de querer y ser querido. Toby solo necesita un hogar paciente, con cariño y comprensión, donde pueda sentirse seguro y aprender que ya no tiene nada que temer. A cambio, dará todo su amor y gratitud. ¿Le das la oportunidad que merece?"
    },
    {id: "9",especie:"GATO", imagen:gatoFoto5, nombre:"Zarzamo", edad:"3", sexo:"MACHO",fecha_alta: "19/05/2024", estado:"Disponible", peso:5, tamaño:"pequeño", 
        historia: "A Zarzamora la rescatamos después de haber sido abandonada en una colonia de gatos ,junto a su hermana FRESITA."   
    },
    {id: "10",especie:"PERRO", imagen:perroFoto5, nombre:"Mikado", edad:"3", sexo:"MACHO",fecha_alta: "12/07/2022", estado:"Disponible", peso:25, tamaño:"grande", 
        historia:"Mikado es un perrete joven con un corazón enorme y una nobleza que conquista desde el primer momento. Es muy cariñoso con las personas, siempre agradecido por cada caricia y gesto de cariño. Aunque al principio puede mostrarse un poquito tímido con otros perros, pronto se siente seguro y demuestra lo sociable que es: sabe convivir y disfruta de la compañía. Pasear con él es una delicia: camina muy bien con la correa, atento y tranquilo. A su corta edad aún tiene toda la vida por delante, y estamos seguros de que quien le dé una oportunidad se llevará un compañero fiel, dulce y sensible. Mikado merece un hogar donde lo quieran y lo cuiden como él sabe querer: con toda el alma. Si buscas un amigo leal y noble, ¡ven a conocerlo!"
    }
    ]

function List_Animals() {
    const [animales, setAnimales] = useState(listAnimales)
    const [paginaActual, setPaginaActual] = useState(1);
    const animalesPorPagina = 9;
    const [filtros, setFiltros] =useState ({
        nombre: "",
        edad: "",
        sexo: "",
        tamaño: "",
        estado: "",
        especie: ""
    })

    //useEffect(() => {
    //fetch("http://localhost:9000/animal/list")
    //  .then(res => res.json())
    //  .then(data => setAnimales(data))
    //  .catch(err => console.error("Error cargando animales:", err));
  //}, []);

    const handleFilterChange = (newFilters) => {
        setFiltros(newFilters)
    }

    const categoriaEdad = (edad) => {
    const n = Number(edad);
    if (n <= 1) return "CACHORRO";
    if (n > 1 && n <= 9) return "ADULTO";
    return "SENIOR";
};

    const animalesFiltrados = animales.filter((animal) => {
        return (
            (filtros.nombre === "" || animal.nombre.toLowerCase().includes(filtros.nombre.toLowerCase())) &&
            (filtros.edad === "" || categoriaEdad(animal.edad) === filtros.edad) &&
            (filtros.sexo === "" || animal.sexo === filtros.sexo) &&
            (filtros.tamaño === "" || animal.tamaño === filtros.tamaño) &&
            (filtros.estado === "" || animal.estado === filtros.estado) &&
            (filtros.especie === "" || animal.especie === filtros.especie)
        );
    })

    const indexUltimo = paginaActual * animalesPorPagina;
    const indexPrimero = indexUltimo - animalesPorPagina;
    const animalesPaginados = animalesFiltrados.slice(indexPrimero, indexUltimo);

    const totalPaginas = Math.ceil(animalesFiltrados.length / animalesPorPagina);

    const cambiarPagina = (numero) => {
        setPaginaActual(numero);
    };


    return(
        <div className="contenedor-principal">
            <Formulario_Filtrar_Animales onFilterChange={handleFilterChange}></Formulario_Filtrar_Animales>
        <div  className="contenedor-tarjetas">
         {animalesPaginados.map((animal) => (
          <Card_Animal 
          key={animal.id} 
          id={animal.id}
          imagen={animal.imagen} 
          nombre={animal.nombre} 
          edad={animal.edad} 
          sexo={animal.sexo}
          estado={animal.estado}>
          </Card_Animal>
        ))}
        </div>
        <div className="paginacion">
  {Array.from({ length: totalPaginas }, (_, i) => (
    <button
      key={i}
      className={`pagina-btn ${paginaActual === i + 1 ? "activa" : ""}`}
      onClick={() => cambiarPagina(i + 1)}
    >
      {i + 1}
    </button>
  ))}
</div>
        
        </div>
    )
}

export default List_Animals;