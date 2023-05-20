import { IsInt, IsPositive, Min, IsString, MinLength } from 'class-validator';

export class CreatePokemonDto {
    @IsInt()
    @IsPositive()
    @Min(1)
    numero:number;

    @IsString({ message: 'The brand most be a cool string' })
    @MinLength(3)
    name: string;
}
