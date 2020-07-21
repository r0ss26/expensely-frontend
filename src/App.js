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
import Transactions from './components/pages/Transactions';
import Categories from './components/pages/Categories';
import Profile from './components/pages/Profile';
import Budget from './components/pages/Budget';


function App() {

  const Layout = ({ children }) => (
    <>
      <Navbar />
      {children}
    </>
  )

  return (
    <AuthState>
      <Router>
        <Switch>
          <PublicRoute restricted={false} exact path='/' component={Home} />
          <PublicRoute restricted={true} exact path='/signup' component={SignupForm} />
          <PublicRoute restricted={true} exact path='/login' component={LoginForm} />
          <Layout>
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute exact path='/transactions' component={Transactions} />
            <PrivateRoute exact path='/categories' component={Categories} />
            <PrivateRoute exact path='/profile' component={Profile} />
            <PrivateRoute exact path='/budget' component={Budget} />
          </Layout>
        </Switch>
      </Router>
    </AuthState>
  );
}

export default App;
