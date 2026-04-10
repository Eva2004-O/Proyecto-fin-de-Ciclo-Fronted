import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { listAnimales } from "./List_Animal";
import './Formulario_Adopcion.css';

function Formulario_Adopcion(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        ciudad: "",
        vivienda: "",
        experiencia: "",
        otrosAnimales: "",
        horasSolo: "",
        motivacion: "",
        animal: ""
    });
    const [aceptaContrato, setAceptaContrato ] =  useState(false)
    const { id } = useParams();
    const animal = listAnimales.find(a => a.id === id);

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulario Enviado", formData);
    }

    return (
        <form className="form-adopcion" onSubmit={handleSubmit}>
            <h2>Formulario Adopcion de {animal.nombre}</h2>
            <label>Nombre completo del adoptante:</label>
            <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            ></input>

            <label>Email de Contacto:</label>
            <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            ></input>

            <label>Teléfono de Contacto:</label>
            <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
            ></input>

            <label>Ciudad:</label>
            <input
            type="text"
            name="ciudad"
            value={formData.ciudad}
            onChange={handleChange}
            ></input>

            <label>Tipo de vivienda:</label>
            <select name="vivienda" value={formData.vivienda} onChange={handleChange}>
                <option value="">Selecciona...</option>
                <option value="piso">Piso</option>
                <option value="casa">Casa</option>
                <option value="finca">Finca</option>
            </select>

            <label>¿Tienes experiencia con animales?</label>
            <input type="text" name="experiencia" value={formData.experiencia} onChange={handleChange} placeholder="Animales anteriormente, Voluntariados...">
            </input>

            <label>¿Tienes otros animales?</label>
            <input
            type="text"
            name="otrosAnimales"
            value={formData.otrosAnimales}
            onChange={handleChange}
            placeholder="Perro, gato, ninguno..."
            ></input>

            <label>¿Cuantas horas estaría solo?</label>
             <input
            type="text"
           name="horasSolo"
            value={formData.horasSolo}
            onChange={handleChange}
            placeholder="3 horas"
            ></input>

            <label>¿Por qué quieres adoptar?</label>
            <textarea
            name="motivacion"
            value={formData.motivacion}
            onChange={handleChange}></textarea>

        <button
            type="button"
            className="btn-contrato"
            onClick={() => navigate(`/animal/contrato`)}
        >
            Ver contrato de adopción
        </button>

            <label className="checkbox">
                <input
                type="checkbox"
                name="aceptaContrato"
                checked={aceptaContrato}
                onChange={(e) => setAceptaContrato(e.target.checked)}
                ></input>
                Acepto el contrato (firmar al recoger el animal)
            </label>                
            <button type="submit" disabled={!aceptaContrato}>Enviar solicitud</button>
        </form>
    )
}

export default Formulario_Adopcion;