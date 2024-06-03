import "./Colaborador.css";
import { IoIosCloseCircle, IoIosHeartEmpty, IoMdHeart } from "react-icons/io";

const Colaborador = (props) => {
    //Desestructuración
    const {nombre,puesto,foto,equipo,id,fav} = props.datos;
    const {colorPrimario, eliminarColaborador, like} = props;

    // condicion ? verdadedoro : falso

    return <div className="colaborador">
        {/*onClick={() => eliminarColaborador(id) Va a eliminar el colaborador solo si el usuario le da clic en el boton y no al renderizar la pagina
            ya que si se deja solo la función "onClick={eliminarColaborador(id)" sin el arrow function al recargar la pagina se eliminarian todos los
            colaboradores inmediatamenete sin presionar el boton" */}
        <IoIosCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)}/>
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            { fav ? <IoMdHeart color="red" onClick={() => like(id)}/> : <IoIosHeartEmpty onClick={() => like(id)} />}
        </div>
    </div>
}

export default Colaborador