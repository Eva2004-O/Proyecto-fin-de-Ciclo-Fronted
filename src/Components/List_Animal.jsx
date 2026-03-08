import { useState } from "react";
import Card_Animal from "./Card_Animal";
import perroFoto1 from '/src/assets/perro1.jpg';
import gatoFoto1 from '/src/assets/gato1.jpg';
import perroFoto2 from '/src/assets/perro2.jpg';
import gatoFoto2 from '/src/assets/gato2.jpg';
import './List_Animal.css';

export const listAnimales = [{id: "1", imagen:perroFoto1, nombre:"Troska", edad:"8", sexo:"HEMBRA", estado:"Disponible", peso:20, tamaño:"Mediano",
    historia:"Troska estuvo toda su vida atada, y llegó con una inseguridad hacia las personas, que tras trabajo y dedicación, ha desaparecido por completo. Actualmente está completamente rehabilitada, es súper cariñosa, le encanta tomar el sol y los paseos. Le encanta ir a saludar a todo el mundo y es sociable con otros perros. Necesita licencia PPP. Ayúdanos a encontrarle el mejor hogar!"
 },
    {id: "2", imagen:gatoFoto1, nombre:"British", edad:"3", sexo:"HEMBRA", estado:"Disponible", peso:3, tamaño:"pequeño", 
        historia:"Gatita rescatada de el parking de El Corte Inglés donde se había refugiado de la lluvia. Amante del pavito, de dormir a los pies de la cama de su mama de acogida, ronroneadora y no duda en reclamar una sesión de mimos extra cuando a ella le apetece. De pelaje suave y esponjoso y grandes ojos verdes, se ha adaptado bien a la convivencia en una casa de acogida con humanos y otros gatos."
    },
    {id: "3", imagen:gatoFoto2, nombre:"Valentina", edad:"6", sexo:"HEMBRA", estado:"Disponible", peso:3, tamaño:"pequeño",
        historia:"Y qué guapa es Valentina! 😻Esta gatita lleva con nosotros ya un tiempo, y ha llegado el momento de que encuentre una familia. Como una de las veteranas, podemos decir que es una gatita buenísima que solo pide un hogar donde recibir amor. ¿Se lo darás tú?"
    },
    {id: "4", imagen:perroFoto2, nombre:"Avellana", edad:"10", sexo:"HEMBRA", estado:"Disponible", peso:18, tamaño:"mediano", 
        historia:"¡UNA REINA BUSCA SU TRONO! (Y UN LUGAR PARA SUS JUGUETES) ¡Hola a todos! Soy AVELLANA y estoy buscando a mi familia definitiva. Dicen por ahí que el carnet de identidad marca 10 años, pero ¡no os lo creáis! Mi energía y mis ganas de vivir dicen que tengo apenas 6 o 7 añitos. Estoy en la flor de la vida, ¡solo que un poquito mejor alimentada! Peso unos 18/20 kg de puro amor. Sí, estoy un poquito gordita, ¡pero eso solo significa que hay más superficie para acariciar! Sé perfectamente lo que es vivir en una casa. Me encanta la comodidad, las rutinas y, sobre todo, sentirme parte de una familia Los peques me vuelven loca. Soy paciente, dulce y extremadamente cariñosa con ellos. ¡Soy la niñera perfecta! Mi hobby favorito es coleccionar mis tesoros y llevarlos todos a mi camita. ¡Me encanta tener mis cosas organizadas! Busco un hogar donde me quieran tal y como soy. Alguien que no se fije en un número, sino en mi mirada llena de gratitud. Soy una perrita encantadora, sociable con todo el mundo y muy equilibrada. Solo necesito un sofá (o una camita amplia para mis juguetes) y mucho cariño para dar. Si buscas una compañera fiel que ya sabe lo que es el respeto y el amor de un hogar, ¡esa soy yo!"}
]

function List_Animals() {
    const [animales, setAnimales] = useState(listAnimales)

    return(
        <div  className="contenedor-tarjetas">
         {animales.map((animal) => (
          <Card_Animal key={animal.id} 
          id={animal.id}
          imagen={animal.imagen} 
          nombre={animal.nombre} 
          edad={animal.edad} 
          sexo={animal.sexo}
          estado={animal.estado}>
          </Card_Animal>
        ))}
        </div>
    )
}

export default List_Animals;