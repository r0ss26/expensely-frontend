import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import SignupForm from './components/Forms/SignupForm';
import LoginForm from './components/Forms/LoginForm';
import Home from './components/Pages/Home'
import AuthState from './context/auth/AuthState'
import PrivateRoute from './components/Routing/PrivateRoute'
import PublicRoute from './components/Routing/PublicRoute'
import Dashboard from './components/Pages/Dashboard';
import Transactions from './components/Pages/Transactions';
import CategoriesList from './components/Pages/Categories/CategoriesList';
import Profile from './components/Pages/Profile';
import Budget from './components/Pages/Budget';
import setToken from "./utils/setToken"


function App() {
  return (
    <AuthState>
      <Router>
        <Switch>
          <PublicRoute restricted={false} exact path="/" component={Home} />
          <PublicRoute
            restricted={true}
            exact
            path="/signup"
            component={SignupForm}
          />
          <PublicRoute
            restricted={true}
            exact
            path="/login"
            component={LoginForm}
          />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/transactions" component={Transactions} />
          <PrivateRoute exact path="/categories" component={CategoriesList} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/budget" component={Budget} />
        </Switch>
      </Router>
    </AuthState>
  );
}

export default App;
