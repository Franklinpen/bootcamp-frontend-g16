// console.log('Hola modulos de Javascript!')
import { renderPeliculas } from "./peliculas.js"
import { fetchPeliculas } from "./services.js"

const peliculasForm = document.getElementById('peliculasForm')

peliculasForm.addEventListener('submit', (event) => {
  event.preventDefault() // Cancela la actualizacion de pagina por defecto de un form
  // console.log('Creando una nueva película...')
  const peliculasForm = document.forms['peliculasForm']

  console.log(peliculasForm)

  const nombre = peliculasForm.nombre.value
  const imagen = peliculasForm.imagen.value
  const estreno = peliculasForm.estreno.value
  const generoId = peliculasForm.genero.value
  const resumen = peliculasForm.resumen.value

  console.log({nombre, imagen, estreno, generoId, resumen})

  const nuevaPelicula = {
    nombre, 
    imagen,
    estreno, 
    generoId: Number(generoId),
    resumen
  }

  console.log(nuevaPelicula)
})

document.addEventListener('DOMContentLoaded', async (event) => {
  // Ejemplo usando promesas

  // fetchPeliculas()
  //   .then(peliculas => {
  //     console.log(peliculas)
  //     // renderPeliculas(peliculas)
  //   })

  // Ejemplo usando async/await

  const peliculas = await fetchPeliculas()

  console.log(peliculas)

  renderPeliculas(peliculas)
})