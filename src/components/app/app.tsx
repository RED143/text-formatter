import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from '../home';
import Layout from '../layout';
import '../../theme/reset.css';
import '../../theme/variables.css';
import '../../theme/fonts.css';
import '../../theme/base.css';

const App = () => {
  return (
    <HashRouter>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/layout">
        <Layout />
      </Route>
    </HashRouter>
  );
};

export default App;
