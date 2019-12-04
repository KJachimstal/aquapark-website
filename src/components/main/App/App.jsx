import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../../Home';
import NotFound from '../../NotFound';
import Header from '../../modules/Header';
import Footer from '../../modules/Footer';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </Router>
);

export default App;
