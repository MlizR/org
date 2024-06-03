import { useState } from 'react';
// Libreria externa que genera id's 
import { v4 as uuid } from "uuid";
import './App.css';
import Header from './components/Header/Header.js';
import Formulario from './components/Formulario/Formulario.js';
import MiOrg from './components/MiOrg/index.js';
import Equipo from './components/Equipo/Equipo.js';
import Colaborador from './components/Colaborador/index.js';
import Footer from './components/Footer/index.jsx';

function App() {
  //Estados
  const [mostrarFormulario,actualizarMostrar] = useState(false);
  //Se iniciliza con un arreglo vacio ya que va a registrar (recibir) una lista en este caso la de colaboradores
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/MlizR.png",
    nombre: "Lizette Meléndez",
    puesto: "Instructor",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: true,
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false
  }]);

  // Con esto React verifica si hay algun cambio en la información y lo actualiza automaticamnete
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
]);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }


  // Registrar colaborador
  const registrarColaborador = (Colaborador) => {
    console.log("Nuevo colaborador", Colaborador);
    // Esta función recibe el nuevo valor y lo actualiza 
    // Spread operator(...valoresActuales, ): Se crea una copia de los valores actuales y despues se le agregar el colaborador 
    actualizarColaboradores([...colaboradores, Colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id);
    // Si id del colaborador es diferente del que se le da clic se guarda en el arreglo "nuevosColaboradores"
    // Filter nos regresa un nuevo arreglo sin modificar el original
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    // Muestra el nuevo arreglo de colaboradores
    actualizarColaboradores(nuevosColaboradores)
  }

  // Actualizar color de equipo
  const actualizarColor = (color, id) =>{
    console.log("Actualizar: ", color, id);
    // Esta función se le aplica a todos los equipos que existen en el arreglo
    const equiposActualizados = equipos.map((equipo) => {
      // Verifca si el equipo al cual se le esta modificando el color cumple con la condición del if
      if(equipo.id === id){
        // color = nuevo color que se esta recibiendo
        equipo.colorPrimario = color;
      }
      // Regresa el equipo modificado
      return equipo;
    })

    // Indica a react que hay nuevos datos
    actualizarEquipos(equiposActualizados);
  }

  // Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    //Actualizar el estado de equipos con la función "actualizarEquipos"
    /* Va hacer una copia del valor que tenga actualmente equipos y despues le va a agregar un nuevo objeto {...nuevoEquipo, id: uuid() }
    este va hacer que tomen los datos que vienen del nuevo equipo (una copia) y tambien se le agrega el id */
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid() }])
  }

  // Actualizar Fav
  // Pimero se pasa por medio de props a Equipos y despues a colaborador
  const like = (id) => {
    console.log("like", id);
    const colaboradoresActualizdos = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador;
    })
    actualizarColaboradores(colaboradoresActualizdos);
  }

  
  // Ternario >> condición ? seMuestra : noSeMuestra
  // cortocircuito >>> condición && seMuestra
  return (
    <div>
      <Header/>
      {/* Esta linea equipos={equipos.map((equipo) => equipo.titulo toma el ojeto llamdo "equipos" lo trandorma y solo devuelve el titulo*/}
     { 
        mostrarFormulario === true ? <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo = {crearEquipo}
        /> 
        : <></>
      }

     {/* Realiza la misma acción que la lia de arriba  {mostrarFormulario && <Formulario/> } */}
      <MiOrg cambiarMostrar = {cambiarMostrar}/>

      {/* Recorre un arreglo con le método map */}
      {
        equipos.map( (equipo) => <Equipo
          datos={equipo}
          key={equipo.titulo}
          // Esta linea solo regresa los colaboradores que pertenezcan al equipo.titulo
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          //nombreProp = {función}
          eliminarColaborador={eliminarColaborador}
          actualizarColor = {actualizarColor}
          like = {like}
        />)
      }

      <Footer/>

    </div>
  );
}

export default App;
