import { useState } from "react";
import "./equipo.css"
import Colaborador from "../colaborador/colaborador"
import hexToRgba from "hex-to-rgba";

function Equipo(props){
//destructuracion
// saca los datos de props y los introduce en constantes con su nombre
    const {colorPrimario, titulo} = props.datos;
    const {colaboradores, eliminarColaborador, like} = props;
    const [colorFondo, setColorFondo] = useState(colorPrimario)
    

    
    
    

    return <>{colaboradores.length > 0 && 
        <section className="equipo" style={{backgroundColor: hexToRgba(colorFondo, 0.35)}}>
            <input
                style={{backgroundColor: hexToRgba(colorFondo, 0.0)}}
                type="color"
                className="input__color"
                value={colorFondo}
                onChange={(event) => {
                    setColorFondo(event.target.value);
                }}
            />
            


            <h3 style={{borderColor: colorFondo}}>{titulo}</h3>
            <div className="colaboradores">
            
            {
                colaboradores.map( (colaborador, index) => <Colaborador datos={colaborador} key={index} colores={colorFondo} eliminarColaborador={eliminarColaborador} like={like}/>)
            }
            </div>
    </section>
    }</>
}

export default Equipo