import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Signupform from './components/Forms/SignupForm';
import LoginForm from './components/Forms/LoginForm';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/signup" component={Signupform} />
        <Route exact path="/login" component={LoginForm} />
      </BrowserRouter>
    </div>
  );
}

export default App;
