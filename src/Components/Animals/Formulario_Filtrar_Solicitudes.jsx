import { useState } from "react";
import './Formulario_Filtrar_Solicitudes.css';
function Formulario_Filtrar_Solicitudes({ onFilterChange }){
    const [nombre, setNombre] = useState("");
    const [animal, setAnimal] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");

    const actualizarFiltros = (nuevoValor, campo) => {
        const nuevosFiltros = {
            nombre,
            animal,
            email,
            telefono,
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
                <label htmlFor="animal">Animal</label>
                <input
                    type="text"
                    id="animal"
                    placeholder="Buscar por animal"
                    value={animal}
                    onChange={(e) => {
                        setAnimal(e.target.value);
                        actualizarFiltros(e.target.value, "animal");
                    }}
                />
            </div>
            <div className="campo">
                <label htmlFor="telefono">Teléfono</label>
                <input
                    type="tel"
                    id="telefono"
                    className="telefono-input"
                    placeholder="600123456"
                    value={telefono}
                    onChange={(e) => {
                        setTelefono(e.target.value);
                        actualizarFiltros(e.target.value, "telefono");
                    }}
                />
            </div>
            <div className="campo">
                <label htmlFor="correo">Correo</label>
                <input
                    type="email"
                    id="correo"
                    placeholder="ejemplo@gmail.com"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        actualizarFiltros(e.target.value, "email");
                    }}
                />
            </div>
            

        </form>
    );
}

export default Formulario_Filtrar_Solicitudes;