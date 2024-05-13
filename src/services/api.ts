import axios from 'axios';
import { IPokemon } from '../interface/pokemonInterface';
import { pokeapiUrl } from '../constants/constants';

export class FetchPokemon {
  public async getPokemonByNumbers(ids: number[]): Promise<IPokemon[]> {
    const promises = ids.map((id) => axios(`${pokeapiUrl}${id}`));

    const responses = await Promise.all(promises);

    const pokemon: IPokemon[] = responses.map((response) => {
      return {
        number: response.data.id,
        name: response.data.name,
        sprite: response.data.sprites.front_default,
      };
    });

    return pokemon;
  }
}

export async function executeFetch(): Promise<IPokemon[]> {
  const ids = Array.from({ length: 151 }, (_, i) => i + 1);
  const pokemonData = await new FetchPokemon().getPokemonByNumbers(ids);
  return pokemonData;
}

console.log(executeFetch());
