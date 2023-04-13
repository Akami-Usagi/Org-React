import "./formulario.css"
import CampoTexto from "../campoTexto/campoTexto"

const Formulario = () =>{
    return <section className="formulario">

        <form>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto label="Nombre" hint="Ingresar nombre"/>
            <CampoTexto label="Puesto" hint="Ingresar puesto"/>
            <CampoTexto label="Foto" hint="Ingresar enlace de foto"/>
        </form>

    </section>
}

export default Formulario