import "./Equipo.css"
import Colaborador from "../Colaborador";
// Importa el paquete hex-to-rgba
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {

    // Desestructuración
    const {colorPrimario, colorSecundario, titulo, id} = props.datos;
    //  Para poder vincularlas deben de tener el mismo nombre que las props que se definiron en App.js
    // Recibe las props desde App.js para poder mandarlo a cada uno de los colaboradores
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props;

    const colorDeFondo = {
        //hexToRgba(color, opacidad)  
        backgroundColor: hexToRgba(colorPrimario, 0.6)  
    }

    const estiloTitulo = {borderColor: colorPrimario};

    return <>
    {
        colaboradores.length > 0 &&
        <section className="equipo" style={colorDeFondo}>
            <input
            type="color"
            className="input-color"
            value={colorPrimario} 
            /* Necesitamos quitarle la esponsabilidad al navegador para que nosotros
            nos encarguemos de qué es lo que va a pasar cuando el usuario interactúe
            justamente con este input. */ 
            // Esta función se va a ejecutar cada vez que exista un cambio en el input.
            onChange={(evento) => {
                // Valor en hexadecimal del color = evento.target.value
                actualizarColor(evento.target.value, id);
            }}
            />
            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map((colaborador,index) => <Colaborador
                        datos={colaborador}
                        key={index}
                        colorPrimario={colorPrimario}
                        // Se manda a cada uno de os colaboradores 
                        eliminarColaborador = {eliminarColaborador}
                        like = {like}
                    />)
                }
            </div>
        </section>
        }
    </>
}

export default Equipo