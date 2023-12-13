import { useState } from 'react';
import './App.css'
import PokemonCard from './components/PokemonCard';

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const nexthandleClick = () => {
    setPokemonIndex(pokemonIndex + 1)
  }

  const previoushandleClick = () => {
    setPokemonIndex(pokemonIndex - 1)
  }


  return (

   <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />

      {pokemonIndex > 0 ? <button onClick={previoushandleClick}>Précédent</button> : null } 
      
      {pokemonIndex < pokemonList.length -1 ? <button onClick={nexthandleClick}>Suivant</button> : null}

    </div>
  
  );
}




const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

export default App
