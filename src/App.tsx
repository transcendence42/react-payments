import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import { ROUTE } from './Constants';
import CardList from './Route/CardList';
import CardForm from './Route/CardForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={[ROUTE.HOME, ROUTE.CARD_LIST]}>
            <CardList />
          </Route>
          <Route path={ROUTE.CARD_FORM}>
            <CardForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
