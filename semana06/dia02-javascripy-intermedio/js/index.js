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

// METODOS DE ARREGLOS

// Metodos INCLUDES, nos indica si el valor que se pasa como parametro se encuentra en el arreglo y devuelve un boolenao

const numeros = [1, 2, 3, 4, 5]

console.log(numeros.includes(3))
console.log(numeros.includes(99))

// Metodo FILTER, nos ayuda a ubicar un elemento dentro de un arreglo usando una consicion y devuelve un arreglo con los resultados.

const languages = ['javascript', 'php', 'python', 'c', 'c++', 'java', 'python']

console.log(
    languages.filter(
        function(language) {
            // return language === 'pyhon' ['python', 'python']
            return language.includes('c')
        }
    )
)

// OBJETOS

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

// ELIMINAR PROPIEDADES DE UN OBJETO

console.log(miObjeto)
delete miObjeto.colorFavorito // Con la Propiedad 'delete' se eliminan propiedades de un objeto
console.log(miObjeto)

// INSERTAR UNA NUEVA PROPIEDAD

miObjeto.platoFavorito = 'Aji de Gallina'
miObjeto['juegos favoritos'] = ['Crash Team Reacing', 'Mario', 'Minecraft']

console.log(miObjeto)

// DESTRUCTURING: Separar objetos en distintas propiedades

const nombreValue = miObjeto.nombre
const apellidoValue = miObjeto.apellido
const cursosValue = miObjeto.cursos

console.log(nombreValue, apellidoValue, cursosValue)

const {nombre, apellido} = miObjeto

console.log(nombre, apellido)

const {nombre: nombreValor, apellido: apellidoValor} = miObjeto

console.log(nombreValue, apellidoValue)

// DESTRUCTURING PARA ARREGLOS

const amigos = ['Angel', 'Carlos', 'Claudia', 'Franklin', 'Samuel']

const [amigo1, amigo2] = amigos

console.log(amigo1)
console.log(amigo2)

// SPREAD OPERATOR

const producto = {
    nombre: 'Laptop',
    precio: 6800,
    categoria: 'tech',
}

const cliente = {
    nombre: 'Claudia',
    isVip: true,
}

console.log(producto + cliente) // 
const nuevoObjeto = {...producto, ...cliente}  // Tener cuidado con los nombres de propiedades de los objetos, se interponen

console.log(nuevoObjeto)

// SPREAD OPERATOR SIN COLICIONES

const nuevoObjetoSinColiciones = {
    producto: {...producto},
    cliente: {...cliente},
}

console.log(nuevoObjetoSinColiciones)

// OTROS MÉTODOS DE OBJETOS

console.log(Object.keys(producto)) // Obtenmemos las claves (keys) del objeto
console.log(Object.values(producto)) // Muestra solo los valores de un objeto
console.log(Object.entries(producto))  // Convertimos un objeto en un arreglo