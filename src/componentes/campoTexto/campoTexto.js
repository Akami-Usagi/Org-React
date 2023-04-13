import "./campoTexto.css"

function CampoTexto(props){
    const placeholder = props.hint + "...";
    return <div className="campo__texto">
        <label>{props.label}</label>
        <input placeholder={placeholder}/>
    </div>
}

export default CampoTexto