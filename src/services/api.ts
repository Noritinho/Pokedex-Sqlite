import axios from 'axios';

axios('https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
  console.log(response.data);
});
