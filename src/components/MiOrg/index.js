//Importa el hook useState
import { useState } from "react";
import "./MiOrg.css"

const MiOrg = (props) => {
    // Estado - hooks > Funcionalidades que nos ayuda a trabajar con el comportamento de React
    // Función useState
    // Declara que un componente va a tener un estado
    // useState(valorinicial_del_estado)
    // const [nombreVariable,funcion_que_Actualiza_el_estado] = useState(valorInicial);

    console.log(props);

    //const [mostrar,actualizarMostrar] = useState(true);
    //const manejarClic = () =>{
      //  console.log("Mostrar/Ocultar elemento", !mostrar);
        // Lo que se coloca dentro de los parentesisi va a ser el nuevo valor del estado de "mostrar"
        // En este caso inicalmente mostrar es true al negarlo con "!" se vuelve false si se vuelve a presionar se convierte otra ves a true y asi sucesivamnete
       // actualizarMostrar(!mostrar);
    //}

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="./img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg