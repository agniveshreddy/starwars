import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginPage from './components/LoginPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/">
              <LoginPage />
            </Route>
            <Route path="/public">
              <h1>public page</h1>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
