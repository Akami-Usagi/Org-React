import "./equipo.css"

function Equipo(props){
//destructuracion
// saca los datos de props y los introduce en constantes con su nombre
    const {colorPrimario, colorSecundario, titulo} = props.datos
    

    return <section className="equipo" style={{backgroundColor: colorSecundario}}>
        <h3 style={{borderColor: colorPrimario}}>{titulo}</h3>
        <div className="colaboradores">

        </div>
    </section>

}

export default Equipo