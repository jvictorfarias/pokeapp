import React from 'react';

import { Container } from './styles';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header: React.FC = () => (
  <Container className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand">Pokedex</span>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li>
            <span className="nav-link">Home</span>
          </li>
          <li>
            <span className="nav-link">Pokedéx</span>
          </li>
          <li>
            <span className="nav-link">PokeBall</span>
          </li>
          <li>
            <span className="nav-link">PokeArena</span>
          </li>
        </ul>
      </div>
    </nav>
  </Container>
);

export default Header;
