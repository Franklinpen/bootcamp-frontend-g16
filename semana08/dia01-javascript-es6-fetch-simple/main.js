console.log('Hola JS!')

// PARA TRAER INFORMACIÓN EN FORMATO JSON DE UNA URL

const url = 'https://jsonplaceholder.typicode.com/posts'

// fetch(url) // Devuelve una promesa (Promise)
//   .then(response => response.json()) // Convertimos la respuesta a un objeto JS
//   .then(data => {
//     console.log(data)
//   }) // Podemos usar el objeto JS

const fetchPost = () => {
  console.log('Llamando al api JASONPLACEHOLDER')

  return fetch(url)
    .then(response => response.json())
    // .then(data => {
    //   return data
    // })
}

const renderPosts = (posts = []) => {
  const appDiv = document.getElementById('app')
  // const appDiv = document.querySelector('#app')

  let postList = ''

  posts.forEach(post => {
    // console.log(post)
    postList += `
      <div>
        <h2>${post.id}: ${post.title}</h2>
        <p>${post.body}</p>
      </div>
    `
  })

  appDiv.innerHTML = postList
  // console.log(appDiv)
}

fetchPost()
  .then(posts => {
    renderPosts(posts)
    console.log(posts)
  })