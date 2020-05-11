import React from 'react';

import { Container } from './styles';

interface InterfacePokemon {
  name: string;
  url: string;
}

interface TableProps {
  pokemon: InterfacePokemon;
}

const TableRow: React.FC<TableProps> = ({ pokemon, ...rest }: TableProps) => (
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
      <button type="button" className="btn btn-primary" style={{ margin: 20 }}>
        Informações
      </button>
      <button type="button" className="btn btn-danger" style={{ margin: 20 }}>
        Capturar
      </button>
    </td>
  </Container>
);

export default TableRow;
