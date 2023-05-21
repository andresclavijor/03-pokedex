import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-responce.interface';
import { PokemonService } from 'src/pokemon/pokemon.service';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    private readonly pokemonService: PokemonService,
    private readonly http: AxiosAdapter,
  ) {}

  async executeSeed() {
    await this.pokemonService.pokemonModel.deleteMany({});

    const data: PokeResponse = await this.http.get<PokeResponse>(
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
