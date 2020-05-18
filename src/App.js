import React, { useState, useCallback } from 'react';
import './App.scss';
import LoginPage from './components/LoginPage';
import SearchPage from './components/SearchPage';
import PlanetDetails from './components/PlanetDetails';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
 /*   <div className="App">
        {!isLoggedIn && <LoginPage onLogin={() =>setIsLoggedIn(true)}/>}
        {isLoggedIn && <SearchPage />}
    </div>
*/
    <Router>
    <div className='App'>
      <Route exact path="/" component={LoginPage}/>
      <Route path="/search" component={SearchPage}/>
      <Route path="/planet" component={PlanetDetails}/>
    </div>
    </Router>
  );
}

export default App;
