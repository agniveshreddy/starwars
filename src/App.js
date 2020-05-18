import React, { useState, useCallback } from 'react';
import './App.css';
import LoginPage from './components/LoginPage';
import SearchPage from './components/SearchPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <div className="App">
        {!isLoggedIn && <LoginPage onLogin={() =>setIsLoggedIn(true)}/>}
        {isLoggedIn && <SearchPage />}
    </div>
  );
}

export default App;
