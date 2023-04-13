import "./listaOpciones.css"

//metodo map -> array.map((equipo, index)=>{
//    
//})

function ListaOpciones(){
    let index = 0;
    const equipos = ["Programacion", "Front End", "Data Science", "DevOps", "X y Diseño", "Movil", "Innovación y Gestión"];
    return <div className="lista__opciones">
        <label>Equipos</label>
        <select>
            {equipos.map((equipo, index) =>{
                return <option key={index}>{equipo}</option>
            })}
        </select>
    </div>
}

export default ListaOpciones