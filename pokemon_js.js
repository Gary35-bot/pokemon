let base_URL = "https://pokeapi.co/api/v2/pokemon/";

// Function to fetch a list of pokemon
function getPokemonList(url) {
  fetch(url)
    // Convert data from JSON
    .then((response) => response.json())
    //Stuff to do with data
    .then((data) => {
      // Console log to make sure I am getting the data
      console.log(data);
      // Get the list of pokemon from the results
      let pokemon = data.results;
      // Get element from HTML to write buttons in
      let container = document.querySelector(".pokemon-list-container");
      // Clear the container
      container.innerHTML = "";
      // Loop over pokemon list and create an HTML button for each one. Add the button to the container
      pokemon.forEach((btn) => {
        container.innerHTML += `<div class=pokemon-buttons><img class="poko" onclick="getPokemonInfo('${btn.url}')" src="./images/lureball.webp" alt=""><p>${btn.name}</p></><br></br></div>`;
      });
      // Add a next pokemon button
      container.innerHTML += `<div class="next"> <br></br><button class= "nex" onclick="getPokemonList('${data.next}')">Next</button> </div>`;
      container.innerHTML += `<div class="next"><br></br><button class="nex" onclick="getPokemonList('${data.previous}')"> 
previous</button></div>`;
    });
}

// Get default pokemon list
getPokemonList(base_URL);

// Function to get information about a specific pokemin
function getPokemonInfo(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Make sure data comes throufg
      console.log(data);
      // Write data to pokemon information container
      document.querySelector(".pokemon-info").innerHTML = `<div class= "contain">
    <img class="creature" src="${data.sprites.other["official-artwork"].front_default} ">
    <div class="definition">
      <h2>Name: ${data.name}</h2>
      <div class="specs">
        <p>Height: ${data.height}</p>
        <p>Ability: ${data.abilities[0].ability.name}, ${data.abilities[1].ability.name}</p>
        <p>Species: ${data.species.name}</p>
        <p>Type: ${data.types[0].type.name} </p>
      </div>
    </div>
    </div>`;
    });
}
