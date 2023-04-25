import "./listaOpciones.css"

//metodo map -> array.map((equipo, index)=>{
//    
//})

function ListaOpciones(props){

      
    const manejarCambio = (event) => {
        
        props.setValor(event.target.value)
    }
    
    return <div className="lista__opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}> 
            <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            {props.equipos.map((equipo, index) =>{
                if(equipo === "Programado Por"){
                    return<option value="" disabled defaultValue={equipo} hidden>{equipo}</option>
                }
                return <option key={index} value={equipo}>{equipo}</option>
            })}
            
        </select>
    </div>
}

export default ListaOpciones