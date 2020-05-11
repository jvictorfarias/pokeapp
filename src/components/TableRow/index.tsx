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
    <tr>
      <td>{pokemon.url.split('/').reverse().splice(1, 1)}</td>

      <td>{pokemon.name}</td>

      <td />
      <td />
    </tr>
  </Container>
);

export default TableRow;
