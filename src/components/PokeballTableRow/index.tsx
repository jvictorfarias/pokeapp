import React from 'react';

import { Container } from './styles';

interface PokeballRowProps {
  id: string;
  name: string;
}

const PokeballTableRow: React.FC<PokeballRowProps> = ({ id, name }) => {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <Container>
      <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{id}</td>
      <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
        <strong>
          <span style={{ textTransform: 'capitalize' }}>{name}</span>
        </strong>
      </td>
      <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
        <img src={imgUrl} alt={id} />
      </td>
    </Container>
  );
};

export default PokeballTableRow;
