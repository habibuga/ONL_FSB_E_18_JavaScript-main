fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => {
        if (response.status >= 200 && response.status <= 299) {
            return response.json();
        }

        throw Error(response.status, response.statusText);
    })
    .then(data => {
        const pokemonList = document.querySelector('.list-group');

        data.results.forEach((pokemon, index) => {
            const pokemonElement = document.createElement('li');
            pokemonElement.classList.add('list-group-item');
            pokemonElement.innerText = pokemon.name.toUpperCase();

            const pokemonImage = document.createElement('img');

            pokemonImage.setAttribute('src',
                `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`);

            pokemonElement.appendChild(pokemonImage);

            pokemonList.appendChild(pokemonElement);
            })
        })
    .catch(error => {
        console.log(error);
    })