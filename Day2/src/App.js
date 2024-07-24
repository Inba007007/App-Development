import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const switchToRegister = () => setIsLogin(false);
  const switchToLogin = () => setIsLogin(true);

  return (
    <div className="App">
      {isLogin ? (
        <Login switchToRegister={switchToRegister} />
      ) : (
        <Register switchToLogin={switchToLogin} />
      )}
    </div>
  );
}

export default App;