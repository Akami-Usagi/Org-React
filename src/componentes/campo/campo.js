import "./campo.css"

function Campo(props){
  

    const placeholder = props.hint + "...";

    //destructuracion
    const {type = "text"} = props

    const manejarCambio = (event) =>{
        props.setValor(event.target.value)
               
    }

    return <div className={`campo campo__${type}`}>
        <label>{props.label}</label>
        <input 
        placeholder={placeholder} 
        required={props.required} 
        value={props.valor} 
        type={type}
        onChange={manejarCambio}/>
    </div>
}

export default Campo