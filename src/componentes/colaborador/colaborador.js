import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import "./colaborador.css"

function Colaborador (props){

    const {nombre, puesto, foto, id, fav} = props.datos;
    const {colores} = props;
    const {eliminarColaborador, like} = props;

    //condicion ? true : false
    

    return <div className="colaborador">
        <AiFillCloseCircle onClick={() => eliminarColaborador(id)} className="eliminar" style={{color: "black"}}/>
        <div className="encabezado" style={{backgroundColor: colores}}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiFillHeart color="red" onClick={() => like(id)}/> : <AiOutlineHeart onClick={() => like(id)}/>}
            
        </div>
    </div>
}

export default Colaborador