/* eslint-disable no-alert */
import React, { useCallback } from 'react';

import { Container } from './styles';

interface InterfacePokemon {
  name: string;
  url: string;
}

interface TableProps {
  pokemon: InterfacePokemon;
}

interface Pokemon {
  id: string;
  name: string;
}

const TableRow: React.FC<TableProps> = ({ pokemon, ...rest }: TableProps) => {
  const idPoke = pokemon.url.split('/').reverse().splice(1, 1).toString();

  const capturar = useCallback((id: string, name: string) => {
    const pokeitems = sessionStorage.getItem('@pokeball');

    let pokeball: Pokemon[];

    if (pokeitems !== null) {
      pokeball = JSON.parse(pokeitems);
    } else {
      pokeball = [] as Pokemon[];
    }

    if (pokeball?.length >= 4) {
      alert('Pokebola cheia!');
      return;
    }

    const pokemonExists = pokeball.find((poke) => poke.id === id);

    if (pokemonExists) {
      alert('Pokemon já existe');
      return;
    }

    pokeball.push({ id, name });

    sessionStorage.setItem('@pokeball', JSON.stringify(pokeball));
  }, []);

  return (
    <Container {...rest}>
      <td>
        <strong>{pokemon.url.split('/').reverse().splice(1, 1)}</strong>
      </td>

      <td>
        <span>{pokemon.name}</span>
      </td>

      <td>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url
            .split('/')
            .reverse()
            .splice(1, 1)}.png`}
          alt={pokemon.name}
        />
      </td>
      <td>
        <button
          type="button"
          className="btn btn-primary"
          style={{ margin: 20 }}
        >
          Informações
        </button>
        <button
          onClick={() => capturar(idPoke, pokemon.name)}
          type="button"
          className="btn btn-danger"
          style={{ margin: 20 }}
        >
          Capturar
        </button>
      </td>
    </Container>
  );
};

export default TableRow;
