import { useState } from "react"
import "./formulario.css"
import CampoTexto from "../campoTexto/campoTexto"
import ListaOpciones from "../listaOpciones/listaOpciones"
import Boton from "../boton/boton"

const Formulario = (props) =>{

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const {registrarColaborador} = props;

    const manejarEnvio = (event) =>{
        event.preventDefault();
        let datosEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosEnviar);
                
    }

    return <section className="formulario">

        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto label="Nombre" hint="Ingresar nombre" required valor={nombre} setValor={setNombre}/>
            <CampoTexto label="Puesto" hint="Ingresar puesto" required valor={puesto} setValor={setPuesto}/>
            <CampoTexto label="Foto" hint="Ingresar enlace de foto" required valor={foto} setValor={setFoto}/>
            <ListaOpciones valor={equipo} setValor={setEquipo} equipos={props.equipos}/>
            <Boton>Crear</Boton>
        </form>

    </section>
}

export default Formulario