import { useState } from "react";
import "./campoTexto.css"

function CampoTexto(props){

   

    const placeholder = props.hint + "...";

    const manejarCambio = (event) =>{
        props.setValor(event.target.value)
               
    }

    return <div className="campo__texto">
        <label>{props.label}</label>
        <input 
        placeholder={placeholder} 
        required={props.required} 
        value={props.valor} 
        onChange={manejarCambio}/>
    </div>
}

export default CampoTexto