import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Header from './componentes/header/header';
import Formulario from './componentes/formulario/formulario';
import MiOrg from './componentes/miOrg/miOrg';
import Equipo from './componentes/equipo/equipo';
import Footer from './componentes/footer/footer';
import './App.css';


function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)
  //lista de colaboradores
  const [colaboradores, setColaboradores] = useState([{
    id: uuid(),
    equipo: "Programado Por",
    nombre: "Camilo Arango",
    Puesto: "Estudiante",
    foto: "https://github.com/Akami-Usagi.png",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora", 
    puesto: "Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programacion",
    foto: "https://github.com/genesysaluralatam.png", 
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png", 
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programacion",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png", 
    nombre: "Jose Gonzalez",
    puesto: "Dev Fullstack",
    fav: false
  }
])

  const [equipos, setEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programacion",
      colorPrimario: "#57c278",
      colorSecundario: "#d9f7f9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82cffa",
      colorSecundario: "#e8f8ff"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#a6d157",
      colorSecundario: "#f0f8e2"
    },
    {
      id: uuid(),
      titulo: "DevOps",
      colorPrimario: "#e06b69",
      colorSecundario: "#fde7e8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#db6ebf",
      colorSecundario: "#fae9f5"
    },
    {
      id: uuid(),
      titulo: "Movil",
      colorPrimario: "#ffba05",
      colorSecundario: "#fff5d9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#ff8a29",
      colorSecundario: "#ffeedf"
    },
    {
      id: uuid(),
      titulo: "Programado Por",
      colorPrimario: "#696969",
      colorSecundario: "#c9c9c9"
    }
  ]);

  //cambiar mostrar el formulario
  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario)
  }
  

  //registrar colaborador
  const registrarColaborador = (colaborador) =>{
    
    //spread operator forma de hacer push en un arreglo
    setColaboradores([...colaboradores, colaborador])
  }

  //Eliminar Colaborador
  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    setColaboradores(nuevosColaboradores)
  }

  //crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    setEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
    
  }

  //like
  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador)=>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    setColaboradores(colaboradoresActualizados)
  }

  //{mostrarFormulario && <Formulario/>} tambien se puede
  return (
    <div>

      <Header/>
      {mostrarFormulario === true ? <Formulario equipos={equipos.map((equipo) => equipo.titulo)} registrarColaborador={registrarColaborador} crearEquipo={crearEquipo}/> : <></>} 
      
      <MiOrg cambiarMostrar = {cambiarMostrar}/>
      {equipos.map((equipo) => <Equipo 
      datos={equipo} 
      key={equipo.titulo} 
      colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
      eliminarColaborador={eliminarColaborador}
      like={like}/>)}
      
      <Footer/>
    </div>
  );
}

export default App;
