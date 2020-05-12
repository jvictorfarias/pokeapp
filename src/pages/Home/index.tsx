import React, { useState } from 'react';

import Header from '../../components/Header';

import { Container, Content } from './styles';

const Home: React.FC = () => {
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
