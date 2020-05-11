import React, { useState, useEffect, useCallback } from 'react';

import { Container } from './styles';
import Header from '../../components/Header';

import api from '../../services/api';
import TableRow from '../../components/TableRow';

interface Pokemon {
  name: string;
  url: string;
}

const Pokedex: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [count, setCount] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    async function loadPokemons(): Promise<void> {
      try {
        const { data } = await api.get('/pokemon', {
          params: {
            offset,
            limit: 20,
          },
        });

        setPokemons([...data.results]);
        setCount(data.count);
      } catch (err) {
        console.log(err);
      }
    }

    loadPokemons();
  }, [offset]);

  const handleNextButtonClick = useCallback(() => {
    setOffset(offset + 20);
  }, [offset]);

  const handlePreviousButtonClick = useCallback(() => {
    if (offset >= 20) setOffset(offset - 20);
  }, [offset]);

  return (
    <Container>
      <Header />
      <h3>Pokedéx ({count}) </h3>
      <table
        className="table table-striped table-sm table-bordered"
        style={{ marginTop: 20, width: '80%' }}
      >
        <thead className="thead-dark">
          <tr style={{ textAlign: 'center' }}>
            <th>ID</th>
            <th>Nome</th>
            <th>Imagem</th>
            <th colSpan={2}>Opções</th>
          </tr>
        </thead>
        <tbody>
          {pokemons.map((poke) => (
            <TableRow key={poke.url} pokemon={poke} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4}>
              <button
                onClick={handlePreviousButtonClick}
                type="button"
                className="btn btn-secondary"
                style={{ margin: 20 }}
              >
                Anterior
              </button>
              <button
                onClick={handleNextButtonClick}
                type="button"
                className="btn btn-secondary"
                style={{ margin: 20 }}
              >
                Próximo
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </Container>
  );
};

export default Pokedex;
