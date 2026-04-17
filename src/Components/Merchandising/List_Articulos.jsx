import { useState } from "react";
import './List_Articulos.css';
import foto1 from '/src/assets/bloc-notas-perro-gato.jpg.webp';
import foto2 from '/src/assets/botella-termica1.jpg.webp';
import foto3 from '/src/assets/llavero-posterior.jpg.webp';
import foto4 from '/src/assets/pulseras-azules-1.jpg.webp';
import foto5 from '/src/assets/sudadera-celeste4.jpg.webp';
import foto6 from '/src/assets/taza-perro.jpg.webp';
import Articulo_Card from "./Articulo_Card";

export const lista_articulos = [{id: "1", nombre: "Cuaderno Notas Perro y Gato", precio: "8", stock: "5", imagen:foto1,
    descripcion:"Un cuaderno adorable con ilustraciones de perro y gato, perfecto para apuntar ideas, notas del día o llevar como diario. Ligero, práctico y con un diseño que enamora a cualquier amante de los animales."},
                        {id: "2", nombre: "Botella Termica", precio: "12", stock: "3", imagen: foto2, descripcion: "Botella térmica resistente y reutilizable, ideal para mantener tus bebidas frías o calientes durante horas. Decorada con motivos animales, perfecta para llevar al trabajo, al gym o en tus paseos."},
                        {id:"3", nombre: "Llaveros Perro y Gato", precio: "4", stock: "10", imagen: foto3, descripcion: "Llaveros divertidos y llenos de personalidad. Fabricados en material resistente, son el detalle perfecto para mochilas, bolsos o llaves. Un accesorio pequeño pero lleno de encanto."},
                        {id: "4", nombre: "Pulseras Azules", precio: "5", stock: "15", imagen: foto4, descripcion: "Pulseras ajustables en tonos azules, cómodas y ligeras. Representan apoyo a la protección animal y son ideales para regalar o llevar a diario como símbolo solidario."},
                        {id: "5", nombre: "Sudadera Celeste", precio: "20", stock: "4", imagen: foto5, descripcion: "Sudadera suave, calentita y con un diseño celeste precioso. Perfecta para el día a día, con un estilo cómodo y moderno que combina con todo. Ideal para amantes de los animales."},
                        {id: "6", nombre: "Taza Perro", precio: "8", stock: "3", imagen: foto6, descripcion: "Taza de cerámica con un diseño encantador de perro. Perfecta para tus desayunos o para decorar tu escritorio. Resistente, cómoda y con un toque tierno que alegra cualquier mañana."}
];

function List_Articulos(){
    const [articulos, setArticulos] = useState(lista_articulos);
    const [paginaActual, setPaginaActual] = useState(1);
    const articulosPorPagina = 9;

    const indexUltimo = paginaActual * articulosPorPagina;
    const indexPrimero = indexUltimo - articulosPorPagina;
    const articulosPaginados = articulos.slice(indexPrimero, indexUltimo);

    const totalPaginas = Math.ceil(articulos.length / articulosPorPagina);

    const cambiarPagina = (numero) => {
        setPaginaActual(numero);
    };
return (
  <div className="lista-articulos">

    <div className="contenedor-tarjetas-articulos">
      {articulosPaginados.map((articulo) => (
        <Articulo_Card
          key={articulo.id}
          id={articulo.id}
          nombre={articulo.nombre}
          precio={articulo.precio}
          imagen={articulo.imagen}
        />
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
);

}

export default List_Articulos;