import React, { useState, useContext, useEffect } from "react";
import AuthContext from '../../context/auth/authContext'
import M from 'materialize-css/dist/js/materialize.min.js';

const LoginForm = (props) => {

  const authContext = useContext(AuthContext)

  const { isAuthenticated, login, error } = authContext

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/")
    }
    if (error) {
      M.toast({ html: `${error}`, displayLength: 4000, classes: 'red' })
    }
  }, [isAuthenticated, props.history, error])


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleInput = (event, setInputState) => {
    setInputState(event.target.value)
  }

  const formData = {
    email,
    password
  }

  const handleSubmit = event => {
    event.preventDefault();
    login(formData)
  }

  return (
    <div className="container">

      <div className="row">
        <form onSubmit={handleSubmit} className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input onChange={(event) => handleInput(event, setEmail)} value={email} name="email" type="email" className="validate" />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input onChange={(event) => handleInput(event, setPassword)} value={password} name="password" type="password" className="validate" />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <button className="btn waves-effect waves-light" name="action">Login
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    </div>
  )
};

export default LoginForm;
