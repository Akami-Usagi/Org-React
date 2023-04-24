import "./equipo.css"
import Colaborador from "../colaborador/colaborador"

function Equipo(props){
//destructuracion
// saca los datos de props y los introduce en constantes con su nombre
    const {colorPrimario, colorSecundario, titulo} = props.datos;
    const {colaboradores} = props;
    

    return <>{colaboradores.length > 0 && 
        <section className="equipo" style={{backgroundColor: colorSecundario}}>
        <h3 style={{borderColor: colorPrimario}}>{titulo}</h3>
        <div className="colaboradores">
        
        {
            colaboradores.map( (colaborador, index) => <Colaborador datos={colaborador} key={index} colores={props.datos}/>)
        }
        </div>
    </section>
    }</>
}

export default Equipo