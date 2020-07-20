import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import SignupForm from './components/Forms/SignupForm';
import LoginForm from './components/Forms/LoginForm';
import Home from './components/pages/Home'
import Navbar from './components/layout/Navbar';
import AuthState from './context/auth/AuthState'
import setToken from './utils/setToken'

// if (localStorage.jwt) {
//   setToken(localStorage.jwt)
// }


function App() {
  return (
    <AuthState>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignupForm} />
        <Route exact path="/login" component={LoginForm} />
      </BrowserRouter>
    </AuthState>

  );
}

export default App;
