
const NavBar = ({previoushandleClick, nexthandleClick, pokemonIndex, pokemonList}) => {
    return (
        <div>
        {pokemonIndex > 0 ? <button onClick={previoushandleClick}>Précédent</button> : null } 
      
        {pokemonIndex < pokemonList.length -1 ? <button onClick={nexthandleClick}>Suivant</button> : null}

        </div>
    );
};

export default NavBar;