import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import './App.scss';
import { ROUTE } from './Constants';
import CardForm from './Route/CardForm';

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="app__layout">
        <Router basename="/react-payments">
          <Switch>
            <Route exact path={[ROUTE.HOME, ROUTE.CARD_LIST]}>
              <CardForm />
            </Route>
            <Route path={ROUTE.CARD_FORM}>
              <CardForm />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
