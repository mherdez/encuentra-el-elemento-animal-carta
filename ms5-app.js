// const figuras = ['♥︎','♠︎','♣︎'].sort( (a,b) => Math.floor(Math.random() - .5) )
const figuras = ['🐶','🦊','🐹','🦁','🐵','🐮','🐼','🐷'].sort( (a,b) => Math.floor(Math.random() - .5) )

// const contenedor = document.getElementById('app')
const contenedor = document.querySelector('#app')
const elegida = figuras[Math.floor(Math.random() * figuras.length)]

const span = document.querySelector('span')
span.textContent = elegida

function ver(id) {
  const cartaSeleccionada = document.getElementById(id)
  cartaSeleccionada.classList.remove('reverso')
  cartaSeleccionada.textContent = id
  if( id === elegida) {
    cartaSeleccionada.classList.add('rojo')
    document.body.innerHTML += '<h1>Ganaste</h1>'
  } else {
    document.body.innerHTML += '<h1>Perdiste</h1>'
  }
}

figuras.forEach( (item) => {
  contenedor.innerHTML += `<h3 id='${item}' class='reverso' onclick='ver("${item}")'></h3>`
})