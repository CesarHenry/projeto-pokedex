  import getBackgroundColor from './get-background.js';   
  
  export default function setCards() {
    const baseUrl = "https://pokeapi.co/api/v2";
    const inputPokemon = document.querySelector(".buscapokemon");
    const namePokemon = document.querySelector(".name");
    const typePokemon = document.querySelector(".type"); 
    const abilityPokemon = document.querySelector(".ability");
    const imgPokemon = document.querySelector(".card__img img");    
  
    const getPokemon = async (pokemon) => {
      const response = await fetch(`${baseUrl}/pokemon/${pokemon}`);
      const responseJson = await response.json();
    
      return responseJson;
    };
  
    function getCardOne() {
      if (!inputPokemon) return;
    
      inputPokemon.addEventListener("change", handleChange);
    
      function handleChange(event) {
        event.preventDefault();
        const pokemon = event.target.value;
        buscaPokemon(pokemon);
      }
    
      function setPokemon(response) {
        const getType = response.types[0]?.type.name;
        console.log(response)
    
        namePokemon.innerText = response.name;
        typePokemon.innerText = response.types[0]?.type.name;
        imgPokemon.src = response.sprites.front_default;
        response.abilities.forEach((item) => {
          // abilityPokemon.innerHTML = `<li>${item.ability.name}</li>`;
          abilityPokemon.innerText = item.ability.name;
        });
    
        getBackgroundColor(getType);
      }
    
      async function buscaPokemon(pokemon) {
        const response = await getPokemon(pokemon);
        setPokemon(response);
      }
    }    
    getCardOne();   
}

  