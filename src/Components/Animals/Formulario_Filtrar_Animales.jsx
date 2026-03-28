import { useState } from "react";
import './Formulario_Filter_Animales.css';

function Formulario_Filtrar_Animales({ onFilterChange }) {

    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [sexo, setSexo] = useState("");
    const [tamaño, setTamaño] = useState("");
    const [estado, setEstado] = useState("");
    const [especie, setEspecie] = useState("");

    const actualizarFiltros = (nuevoValor, campo) => {
        const nuevosFiltros = {
            nombre,
            edad,
            sexo,
            tamaño,
            estado,
            especie,
            [campo]: nuevoValor
        };
        onFilterChange(nuevosFiltros);
    };

    return (
        <form className="form-filtros">

            <div className="campo">
                <label htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    id="nombre"
                    placeholder="Buscar por nombre"
                    value={nombre}
                    onChange={(e) => {
                        setNombre(e.target.value);
                        actualizarFiltros(e.target.value, "nombre");
                    }}
                />
            </div>

            <div className="campo">
                <label htmlFor="especie">Especie</label>
                <select
                    id="especie"
                    value={especie}
                    onChange={(e) => {
                        setEspecie(e.target.value);
                        actualizarFiltros(e.target.value, "especie");
                    }}
                >
                    <option value="">Todos</option>
                    <option value="PERRO">Perro</option>
                    <option value="GATO">Gato</option>
                </select>
            </div>

            <div className="campo">
                <label htmlFor="sexo">Sexo</label>
                <select
                    id="sexo"
                    value={sexo}
                    onChange={(e) => {
                        setSexo(e.target.value);
                        actualizarFiltros(e.target.value, "sexo");
                    }}
                >
                    <option value="">Todos</option>
                    <option value="HEMBRA">Hembra</option>
                    <option value="MACHO">Macho</option>
                </select>
            </div>

            <div className="campo">
                <label htmlFor="tamaño">Tamaño</label>
                <select
                    id="tamaño"
                    value={tamaño}
                    onChange={(e) => {
                        setTamaño(e.target.value);
                        actualizarFiltros(e.target.value, "tamaño");
                    }}
                >
                    <option value="">Todos</option>
                    <option value="mini">Mini</option>
                    <option value="pequeño">Pequeño</option>
                    <option value="mediano">Mediano</option>
                    <option value="grande">Grande</option>
                    <option value="gigante">Gigante</option>
                </select>
            </div>

            <div className="campo">
                <label htmlFor="edad">Edad</label>
                <select
                    id="edad"
                    value={edad}
                    onChange={(e) => {
                        setEdad(e.target.value);
                        actualizarFiltros(e.target.value, "edad");
                    }}
                >
                    <option value="">Todos</option>
                    <option value="CACHORRO">Cachorro</option>
                    <option value="ADULTO">Adulto</option>
                    <option value="SENIOR">Senior</option>
                </select>
            </div>

            <div className="campo">
                <label htmlFor="estado">Estado</label>
                <select
                    id="estado"
                    value={estado}
                    onChange={(e) => {
                        setEstado(e.target.value);
                        actualizarFiltros(e.target.value, "estado");
                    }}
                >
                    <option value="">Todos</option>
                    <option value="Disponible">Disponible</option>
                    <option value="Adoptado">Adoptado</option>
                </select>
            </div>

        </form>
    );
}


export default Formulario_Filtrar_Animales;