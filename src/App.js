import { useState } from 'react';
import Header from './componentes/header/header';
import Formulario from './componentes/formulario/formulario';
import MiOrg from './componentes/miOrg/miOrg';
import Equipo from './componentes/equipo/equipo';
import './App.css';


function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario)
  }
  //{mostrarFormulario && <Formulario/>} 

  //lista de equipos
  const equipos = [

    {
      titulo: "Programacion",
      colorPrimario: "#57c278",
      colorSecundario: "#d9f7f9"
    },
    {
      titulo: "Front End",
      colorPrimario: "#82cffa",
      colorSecundario: "#e8f8ff"
    },
    {
      titulo: "Data Science",
      colorPrimario: "#a6d157",
      colorSecundario: "#f0f8e2"
    },
    {
      titulo: "DevOps",
      colorPrimario: "#e06b69",
      colorSecundario: "#fde7e8"
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#db6ebf",
      colorSecundario: "#fae9f5"
    },
    {
      titulo: "Movil",
      colorPrimario: "#ffba05",
      colorSecundario: "#fff5d9"
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#ff8a29",
      colorSecundario: "#ffeedf"
    },
    {
      titulo: "Programado Por",
      colorPrimario: "#696969",
      colorSecundario: "#c9c9c9"
    }
    
  ];


  return (
    <div>

      <Header/>
      {mostrarFormulario === true ? <Formulario equipos={equipos.map((equipo) => equipo.titulo)}/> : <></>}
      <MiOrg cambiarMostrar = {cambiarMostrar}/>
      {equipos.map((equipo, index) => <Equipo datos={equipo} key={index}/>)}
      
    </div>
  );
}

export default App;
