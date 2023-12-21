
const NavBar = ({pokemonIndex, pokemonList, setPokemonIndex}) => {
    
const handleButtonClick = (index) => {
    setPokemonIndex(index);
      };
    
    return (
        <div>
        {pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => handleButtonClick(index)}>
          {pokemon.name}
        </button>
      ))}

        </div>
    );
};

export default NavBar;