import { useState } from "react";
import "./Campo.css";

const Campo = (props) => {
    const placeholderModificado = `${props.placeholder}...`

    //Desestructuración
    // En caso de que type sea indefinido le podemos dar un valor por defecto
    const { type = "text" } = props;
    console.log(type);

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value);
    }

    return <div className={`campo campo-${type}`}>
        {/* Como ya es un string se pueden utilizar metodos de los strings como {props.titulo.toUpperCase} */}
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificado}
            required = {props.required}
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
}

export default Campo