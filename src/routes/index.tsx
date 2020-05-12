import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Pokedex from '../pages/Pokedex';
import Pokeball from '../pages/Pokeball';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/pokedex" component={Pokedex} />
      <Route path="/pokeball" component={Pokeball} />
      <Route path="/" component={() => <h1>404 not found</h1>} />
    </Switch>
  </Router>
);

export default Routes;
