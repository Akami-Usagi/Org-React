import { useState } from "react"
import "./formulario.css"
import Campo from "../campo/campo"
import ListaOpciones from "../listaOpciones/listaOpciones"
import Boton from "../boton/boton"

const Formulario = (props) =>{

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const [titulo, setTitulo] = useState("");
    const [color, setColor] = useState("");

    const {registrarColaborador, crearEquipo} = props;

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

    const manejarNuevoEquipo = (event) =>{
        event.preventDefault()
        crearEquipo({titulo, colorPrimario: color});
    }

    return <section className="formulario">

        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <Campo label="Nombre" hint="Ingresar nombre" required valor={nombre} setValor={setNombre}/>
            <Campo label="Puesto" hint="Ingresar puesto" required valor={puesto} setValor={setPuesto}/>
            <Campo label="Foto" hint="Ingresar enlace de foto" required valor={foto} setValor={setFoto}/>
            <ListaOpciones valor={equipo} setValor={setEquipo} equipos={props.equipos}/>
            <Boton>Crear</Boton>
        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo</h2>
            <Campo titulo="Titulo" hint="Ingresar titulo" required valor={titulo} setValor={setTitulo}/>
            <Campo titulo="color" hint="Ingresar el color en HEX" required valor={color} setValor={setColor} type="color"/>
            <Boton>Registrar equipo</Boton>       
        </form>

    </section>
}

export default Formulario