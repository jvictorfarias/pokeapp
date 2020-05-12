import React, { useState } from 'react';

import Header from '../../components/Header';

import { Container, Content } from './styles';

const Home: React.FC = () => {
  const [pokeball, setPokeball] = useState(() => {
    const pokeitems = sessionStorage.getItem('@pokeball');

    if (!pokeitems) {
      return [];
    }

    return JSON.parse(pokeitems);
  });
  return (
    <Container>
      <Header />
      <Content>
        <h1>Pokémon</h1>
      </Content>
    </Container>
  );
};

export default Home;
