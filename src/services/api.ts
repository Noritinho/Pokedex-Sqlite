import axios from 'axios';
import { IPokemon } from '../interface/pokemonInterface';
import { pokeapiUrl } from '../constants/constants';

export class FetchPokemon {
  public async getPokemonByNumbers(ids: number[]): Promise<IPokemon[]> {
    const promises = ids.map((id) => axios(`${pokeapiUrl}${id}`));
    const responses = await Promise.all(promises);
    return responses.map((response) => response.data.id);
  }
}

async function executeFetch() {
  const fetchPokemon = new FetchPokemon();
  const pokemons = await fetchPokemon.getPokemonByNumbers(Array.from({ length: 151 }, (_, i) => i + 1));
  pokemons.forEach((pokemon) => console.log(pokemon));
}

console.log(executeFetch());
