import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import LandingPage from './LandingPage';
import RememberMe from './RememberMe/RememberMe';
import Competition from './Football/Competition';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/rememberme">
          <RememberMe />
        </Route>
        <Route path="/pinnekamp">
          <Competition />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
