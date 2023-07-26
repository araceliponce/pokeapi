// fetch('https://pokeapi.co/api/v2/generation/1/', {})
// .then(response => response.json())
// .then(data => {
// const pokemons = data.pokemon_species
// console.log(pokemons)
// for (const index in pokemons){
// document.write(pokemons[index].name)
// document.write("<br>")
// }
// })
// ;

let select = document.getElementById("pokemons");
function getPokemons() {
  fetch("https://pokeapi.co/api/v2/generation/1/", {})
    .then((response) => response.json())
    .then((data) => {
      const pokemons = data.pokemon_species;
      console.log(pokemons);
      //let select = document.getElementById('pokemons');
      for (const index in pokemons) {
        let option = document.createElement("option");
        option.value = pokemons[index].name;
        option.innerText = pokemons[index].name;
        select.appendChild(option);
      }
    });
}
getPokemons();
select.addEventListener("change", viewPokemon);
function viewPokemon() {
  let pokemon = select.value
  fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon, {})
    .then((response) => response.json())
    .then((data) => {
      let conImg = document.querySelector(".imgPokemon");
      conImg.innerHTML = "";
      let img = document.createElement("img");
      conImg.append(img);
      img.src = data.sprites.front_shiny;

      let conName = document.querySelector(".namePokemon");
      conName.innerText = data.name;
      console.log(data);
      //let select = document.getElementById('pokemons');
    });
}
