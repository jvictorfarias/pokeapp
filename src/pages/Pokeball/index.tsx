import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import PokeballTableRow from '../../components/PokeballTableRow';
import { Container } from './styles';

interface Pokemon {
  name: string;
  id: string;
}

const Pokeball: React.FC = () => {
  const [pokeitems, setPokeitems] = useState<Pokemon[]>(() => {
    const pokeStorage = sessionStorage.getItem('@pokeball');

    if (!pokeStorage) {
      return [] as Pokemon[];
    }

    return JSON.parse(pokeStorage);
  });

  return (
    <Container>
      <Header />
      <h3>Pokéball</h3>
      <table
        className="table table-striped table-sm table-bordered"
        style={{ marginTop: 20, width: '50%' }}
      >
        <thead className="thead-dark">
          <tr>
            <th style={{ textAlign: 'center', width: '20%' }}>ID</th>
            <th style={{ textAlign: 'center', width: '20%' }}>Nome</th>
            <th style={{ textAlign: 'center', width: '20%' }}>Imagem</th>
          </tr>
        </thead>
        <tbody>
          {pokeitems ? (
            pokeitems.map((pokemon) => {
              return (
                <PokeballTableRow
                  name={pokemon.name}
                  id={pokemon.id}
                  key={pokemon.id}
                />
              );
            })
          ) : (
              <tr>
                <td colSpan={3} style={{ textAlign: 'center' }}>
                  Pokébola está vazia.
              </td>
              </tr>
            )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3} style={{ textAlign: 'center' }}>
              <Link className="btn btn-secondary" to="/pokedex">
                Pokédex
              </Link>
            </td>
          </tr>
        </tfoot>
      </table>
    </Container>
  );
};

export default Pokeball;
