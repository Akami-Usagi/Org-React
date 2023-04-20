import "./miOrg.css"

function MiOrg(props){

    //const [nombreVariable, funcionActualiza] = useState("Valor Inicial")
    
    
 

    return <section className="org__section">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg;