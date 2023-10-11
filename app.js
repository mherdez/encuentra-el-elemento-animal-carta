const $container = document.querySelector('#app');
const cartas = ['♠︎', '♥︎', '♣︎'];
let $cartas = '';

const view = (id) => {
  const $cardSelect = document.getElementById(id);
  $cardSelect.classList.remove('reverso');
  $cardSelect.textContent = id;
  if (id === '♥︎') {
    $cardSelect.classList.add('corazon');
    console.log('Ganaste');
  } else {
    console.log('Perdiste');
  }
};

cartas.map(carta => {
  $cartas += `<h3 id='${carta}' class='carta reverso' onclick='view("${carta}")'></h3>`;
});

$container.innerHTML = $cartas;
