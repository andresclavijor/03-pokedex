import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-responce.interface';
import { PokemonService } from 'src/pokemon/pokemon.service';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;
  constructor(private readonly pokemonService: PokemonService) {}

  async executeSeed() {
    await this.pokemonService.pokemonModel.deleteMany({});

    const { data } = await axios.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=10000',
    );

    const arrayData = data.results.map(({ name, url }) => {
      const segments = url.split('/');
      const numero = +segments[segments.length - 2];
      return { name, numero };
    });

    await this.pokemonService.createArray(arrayData);
    return 'Seed Execute';
  }
}
