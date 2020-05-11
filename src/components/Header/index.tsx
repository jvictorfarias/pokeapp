import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Header: React.FC = () => (
  <Container className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand">Pokemon App</span>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/pokedex" className="nav-link">
              Pokedéx
            </Link>
          </li>
          <li>
            <Link to="/pokeball" className="nav-link">
              PokeBall
            </Link>
          </li>
          <li>
            <Link to="/pokearena" className="nav-link">
              PokeArena
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </Container>
);

export default Header;
