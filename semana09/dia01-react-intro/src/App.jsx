// LO MÍNIMO QUE TIENE UN COMPONENTE USANDO function

// function App() {
//   return <h1>Hola React!</h1>
// }

// export default App

// LO MÍNIMO QUE TIENE UN COMPONENTE USANDO arrow functions

// const app = () => {
//   return <h1>Hola React con ArrowFunctions</h1>
// }

// export default app

// COMPONENTE DE REACT USANDO MULTIPLES LINEAS CON SU ELEMENTO PADRE

//  const app = () => {
//   return (
//     <div>
//       <h1>Hola React</h1>
//       <p>Estoy en el Bootcamp!!</p>
//     </div>    
//   )
//  }

// COMPONENTE USANDO FRAGMENTOS (FRAGMENTS) PARA EVITAR RENDERIZAR EN UN ELEMENTO PADRE

// function Saludo () {
//   return <h1>Hola Franklin</h1>
// }

// const Despedida = () => {
//   return <h1>Adios Franklin!</h1>
// }

// const app = () => {
//   return (
//     <>
//       <h1>Hola React</h1>
//       <p>Estoy en el Bootcamp!!</p>
//       {/* Comentarios de lineas multiples dentro de JSX */}
//       <Saludo/>
//       <Despedida/>
//     </>    
//   )
//  }

//  export default app

// IMPORTANDO COMPONENTES EXTERNOS

// import Saludo from "./components/Saludo.jsx"
// import Despedida from "./components/Despedida.jsx"

// import { FRUTAS, EDAD } from "./components/frutas.js"

// import './demo.css'


// const app = () => {
//   return (
//     <>
//       <h1>Hola React</h1>
//       <p>Estoy en el Bootcamp!!</p>
//       {/* Comentarios de lineas multiples dentro de JSX */}
//       <Saludo/>
//       <Despedida/>
//       {1+2}
//       {FRUTAS}
//       {EDAD}

//     </>    
//   )
//  }

// USANDO CSS EN REACT

import Saludo from "./components/Saludo.jsx"
import Despedida from "./components/Despedida.jsx"

import { FRUTAS, EDAD } from "./components/frutas.js"

import './demo.css'  // Importando css Global


const app = () => {
  return (
    <>
      <h1 style={{ color: 'red', textDecoration: 'underline'}}>Hola React</h1>
      <p>Estoy en el Bootcamp!!</p>
      {/* Comentarios de lineas multiples dentro de JSX */}
      <Saludo/>
      <Despedida/>
      {1+2}
      {FRUTAS}
      {EDAD}

    </>    
  )
 }

 export default app

