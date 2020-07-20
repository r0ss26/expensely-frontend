import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import SignupForm from './components/Forms/SignupForm';
import LoginForm from './components/Forms/LoginForm';
import Home from './components/pages/Home'
import Navbar from './components/layout/Navbar';
import AuthState from './context/auth/AuthState'
import PrivateRoute from './components/routing/PrivateRoute'
import PublicRoute from './components/routing/PublicRoute'
import Dashboard from './components/pages/Dashboard';


function App() {

  return (
    <AuthState>
      <Router>
        <Navbar />
        <Switch>
          <PublicRoute restricted={false} exact path="/" component={Home} />
          <PublicRoute restricted={true} exact path="/signup" component={SignupForm} />
          <PublicRoute restricted={true} exact path="/login" component={LoginForm} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </AuthState>

  );
}

export default App;
