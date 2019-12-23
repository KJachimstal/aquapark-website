import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../../scenes/Home';
import NotFound from '../../scenes/NotFound';
import Header from '../../modules/Header';
import Footer from '../../modules/Footer';
import Attractions from '../../scenes/Attractions';
import Pricing from '../../scenes/Pricing';
import Carnet from '../../scenes/Carnet';
import Tickets from '../../scenes/Tickets';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/atrakcje" component={Attractions} />
      <Route exact path="/cennik" component={Pricing} />
      <Route exact path="/karnet" component={Carnet} />
      <Route exact path="/bilety" component={Tickets} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </Router>
);

export default App;
