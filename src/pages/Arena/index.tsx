import React, { useState, useEffect } from 'react';

import PokeArenaTableRow from '../../components/PokeArenaTableRow';

import { Container } from './styles';

interface Pokemon {
  id: string;
  name: string;
}

const Arena: React.FC = () => {
  const [chosen, setChosen] = useState(0);
  const [challenger, setChallenger] = useState(0);
  const [message, setMessage] = useState({ mensagem: '' });
  const [challengers, setChallengers] = useState(() => {
    return [
      { id: 24, nome: 'arbok', life: 100 },
      { id: 52, nome: 'meowth', life: 100 },
      { id: 110, nome: 'weezing', life: 100 },
      { id: 112, nome: 'rhydon', life: 100 },
    ];
  });
  const [pokeball, setPokeball] = useState<Pokemon[]>(() => {
    const pokemon = sessionStorage.getItem('@pokeball');

    if (!pokemon) {
      return [] as Pokemon[];
    }

    return JSON.parse(pokemon);
  });

  useEffect(() => {
    setMessage({ mensagem: 'A batalha vai começar' });
  }, []);

  return (
    <Container>
      <h3>Batalha Pokémon</h3>
      <div
        className="container"
        style={{
          width: '70%',
          marginTop: '1em',
          border: '1px solid #cecece',
        }}
      >
        <div className="row">
          <div className="col-2" style={{ padding: '0.5em' }}>
            {pokeball.map((pokemon) => (
              <PokeArenaTableRow id={pokemon.id} />
            ))}
          </div>
          <div
            className="col-8"
            style={{
              borderLeft: '1px solid #cecece',
              borderRight: '1px solid #cecece',
              paddingTop: '2em',
            }}
          >
            Arena
          </div>
          <div className="col-2" style={{ padding: '0.5em' }}>
            Desafiantes
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Arena;
