import React, {useEffect, useState} from 'react'
import axios from 'axios';

const PokemonApi = (props) => {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon/?limit=811')
            .then(response => {setPokemonList(response.data.results)})
            .catch(error => console.error(`Error: ${error}`))
    }, []);

    return (
        <ul>
            {pokemonList.length > 0 && pokemonList.map((pokemon, index)=>{
                return (<li key={index} style={{textTransform: 'capitalize'}}>{pokemon.name}</li>)
            })}
        </ul>
    );
}
export default PokemonApi;