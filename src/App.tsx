import React, { FC } from 'react';
// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />

import Dashboard from './components/Dashboard';
import SignIn from './components/SignIn';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';

const App: FC = () => (
  <Router>
    <>
      {/* <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/old-match">Old Match, to be redirected</Link>
    </li>
    <li>
      <Link to="/will-match">Will Match</Link>
    </li>
    <li>
      <Link to="/will-not-match">Will Not Match</Link>
    </li>
    <li>
      <Link to="/also/will/not/match">Also Will Not Match</Link>
    </li>
  </ul> */}

      <Switch>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </>
  </Router>
);

function NoMatch() {
  const location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default App;
