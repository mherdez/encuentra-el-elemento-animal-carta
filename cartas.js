// const contenedor = document.querySelector('#contenedor');
const contenedor = document.getElementById('contenedor');

function ver(id) {
  // const cartaSeleccionada = document.querySelector(`#${id}`)
  const cartaSeleccionada = document.getElementById(id)
  cartaSeleccionada.classList.remove('reverso')
  cartaSeleccionada.textContent = id
  if( id === '♥︎') {
    cartaSeleccionada.classList.add('rojo')
    document.body.innerHTML += `<h1>Ganaste</h1>`
  } else {
    document.body.innerHTML += `<h1>Perdiste</h1>`
  }
}

let figuras = ['♥︎','♠︎','♣︎']

for(let i = 0; i <= 50; i++) {
  figuras.sort( (a,b) => Math.floor(Math.random() - .5))
}

figuras.forEach( (item) => {
  contenedor.innerHTML += `<h3 id='${item}' class='reverso' onclick='ver("${item}")'></h3>`
})