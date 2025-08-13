document.getElementById("btnPokemons").addEventListener("click", function() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
        .then(r => r.json())
        .then(data => {
            console.log(data); // Debugging para ver lo que contiene `data`
            let lista = document.getElementById('listaPokemons');
            lista.innerHTML = '';  // Limpiar la lista cada vez que cargamos nuevos Pokémon
            
            data.results.forEach(pokemon => {
                // Hacer una segunda llamada para obtener la imagen de cada Pokémon
                fetch(pokemon.url)
                    .then(response => response.json())
                    .then(pokemonData => {
                        let li = document.createElement('li');
                        
                        // Crear un elemento de imagen para el Pokémon
                        let img = document.createElement('img');
                        img.src = pokemonData.sprites.front_default; // Imagen del Pokémon
                        img.alt = pokemon.name; // Texto alternativo con el nombre del Pokémon
                        img.width = 50; // Ajustar el tamaño de la imagen

                        // Agregar nombre del Pokémon
                        let name = document.createElement('span');
                        name.textContent = pokemon.name;

                        // Agregar imagen y nombre al elemento `li`
                        li.appendChild(img);
                        li.appendChild(name);

                        // Añadir el `li` al `ul`
                        lista.appendChild(li);
                    })
                    .catch(error => console.error('Error al obtener el Pokémon:', error));
            });
        })
        .catch(error => console.error('Error al cargar los Pokémons:', error));    
});