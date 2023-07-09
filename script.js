// Función para realizar la petición a la API de Mercado Libre y mostrar los datos
function getMercadolibreData() {
  fetch('https://api.mercadolibre.com/sites/MLA/search?q=ordenadores')
    .then(res => res.json())
    .then(data => {
      const mercadolibreData = document.getElementById('mercadolibre-data');
      mercadolibreData.innerHTML = ''; // Limpiar los datos anteriores

      // Recorrer los resultados y crear elementos de lista
      data.results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result.title;
        mercadolibreData.appendChild(li);
      });
    })
    .catch(err => console.error(err));
}

// Función para realizar la petición a la API de Pokemon y mostrar los datos
function getPokemonData() {
  fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(res => res.json())
    .then(data => {
      const pokemonData = document.getElementById('pokemon-data');
      pokemonData.innerHTML = ''; // Limpiar los datos anteriores

      // Mostrar el nombre del Pokemon en un elemento de lista
      const li = document.createElement('li');
      li.textContent = data.name;
      pokemonData.appendChild(li);
    })
    .catch(err => console.error(err));
}

// Obtener referencias a los botones
const mercadolibreButton = document.getElementById('mercadolibre-button');
const pokemonButton = document.getElementById('pokemon-button');

// Asociar eventos click a los botones para llamar a las funciones correspondientes
mercadolibreButton.addEventListener('click', getMercadolibreData);
pokemonButton.addEventListener('click', getPokemonData);
