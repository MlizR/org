import "./ListaOpciones.css";

const ListaOpciones = (props) => {

    /* Recorre un arreglo en React, Toma un arreglo de información lo tranforma y nos regresa un nuevo arreglo con los datos tranformados
    Metodo Map (de arreglos):
    index = Posición en la que se encuentra la función
        namearreglo.map( (equipo, index) => {
            Se le tiene que agregar una key
            return <option></option>
        }) 
    */
    

    const manejarCambio = (e) => {
        // Regresa la opciuón que el usuario selecciona
        console.log("Cambio", e.target.value);
        props.actualizarEquipo(e.target.value);
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio} >
            <option value="" disabled defaultValue="" hidden >Seleccionar equipo</option>
            {props.equipos.map( (equipo, index) => <option key={index}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones