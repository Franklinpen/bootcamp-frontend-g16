console.log("Hola JS")

//Arrays

const numero = 399
const cadena = "Franklin"
const esMayor = 39

//un arreglo tiene elementos a cualquier tipo de dato: Cadena, numero, boolean, undefind, null, arrays, object, etc.

const listaDeValores = [1, 2, "Franklin", "Peña", true]

console.log(listaDeValores)

console.log(listaDeValores[0]) //1
console.log(listaDeValores[1]) //2
console.log(listaDeValores[2]) //Franklin
console.log(listaDeValores[3]) //Peña
console.log(listaDeValores[4]) //true

console.log(listaDeValores[100]) //Undefind

//Escritura en un arreglo

listaDeValores[1] = 99

console.log(listaDeValores)

// Insertar nuevos elementos en un arreglo

listaDeValores.push("Javascript") //.push añade elementos a un arreglo

console.log(listaDeValores)

// Remover elementos de un arreglo

listaDeValores.pop()

console.log(listaDeValores)

// Eliminar un elemento

// const listaDeValores = [1, 2, "Franklin", "Peña", true]

listaDeValores.splice(0,1)

console.log('splice', listaDeValores)

// Obtener el tamaño de nuestro arreglo

console.log('bienvenido', length)
console.log(listaDeValores.length)

// Objetos

// const x { 
//    KEY : VALUE,
//    KEY : VALUE,
// }

const miObjeto = {
    nombre: 'Franklin',
    apellido: 'Peña',
    colorFavorito: 'rojo',
    'mi edad': 28,
    coloresFavoritos: ['rosado', 'rojo', 'azul'],
    cursos: [
        {
            nombre: 'Matematica',
            nota: 18,
        },
        {
            nombre: 'Algoritmos',
            nota: 20,
        }
    ]
}

console.log(miObjeto)

// LEER LOS CAMPOS DE UN OBJETO

console.log(miObjeto.nombre) // Franklin
console.log(miObjeto.apellido) // Peña
console.log(miObjeto.edad) // Undefind

// console.log(miObjeto.mi edad) // BAD
console.log(miObjeto['mi edad']) // OK

console.log(miObjeto.coloresFavoritos)
console.log(miObjeto.coloresFavoritos[1])

// Acceder a los elementos de un arreglo
console.log(miObjeto.cursos) 
console.log(miObjeto.cursos[1])
console.log(miObjeto.cursos[1].nombre) // 1ra Forma usando .
console.log(miObjeto.cursos[1]['nota']) // 2da Forma usando corchete []