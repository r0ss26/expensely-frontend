import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import SignupForm from './components/Forms/SignupForm';
import LoginForm from './components/Forms/LoginForm';
import Home from './components/pages/Home'
import Navbar from './components/layout/Navbar';
import Dashboard from './components/Dashboard/Dashboard'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/signup" component={Signupform} />
      <Route exact path="/login" component={LoginForm} />
    </BrowserRouter>
  );
}

export default App;
