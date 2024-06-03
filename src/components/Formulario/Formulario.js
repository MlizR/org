import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo/Campo.js"
import ListaOpciones from "../ListaOpciones/index.js"
import Boton from "../Boton/Boton.js"

const Formulario = (props) => {
    const [nombre,actualizarNombre] = useState("");
    const [puesto,actualizarPuesto] = useState("");
    const [foto,actualizarFoto] = useState("");
    const [equipo,actualizarEquipo] = useState("");
    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor] = useState("");
    
    // Destructuración
    const {registrarColaborador, crearEquipo} = props;

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log("Manejar el envio");
        let datosAEnviar = {
            // Nombre o llave del objeto : hace refrencia al valor que se almacena en las const de los estados "useState"
            nombre : nombre,
            puesto : puesto,
            foto : foto,
            equipo : equipo
        }
        registrarColaborador(datosAEnviar);
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        crearEquipo({ titulo, colorPrimario: color })
    }

    return <section className="formulario"> 
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador:</h2>
            <Campo
                titulo = "Nombre"
                placeholder = "Ingresar nombre"
                required
                valor={nombre}
                actualizarValor={actualizarNombre}
            />

            <Campo
                titulo = "Puesto"
                placeholder = "Ingresar puesto"
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}
            />

            <Campo
                titulo = "Foto"
                placeholder = "Ingresar enlace de foto" 
                required
                valor={foto}
                actualizarValor={actualizarFoto}
            />

            <ListaOpciones 
                valor = {equipo}
                actualizarEquipo = {actualizarEquipo}   
                equipos={props.equipos}
            />
            <Boton>
                Crear
            </Boton>

            
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo:</h2>
            <Campo
                titulo = "Título"
                placeholder = "Ingresar título"
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />

            <Campo
                titulo = "Color"
                placeholder = "Ingresar el color en Hex"
                required
                valor={color}
                actualizarValor={actualizarColor}
                type="color"
            />
            <Boton>
                Registrar equipo
            </Boton>
        </form>
    </section>
}

export default Formulario 