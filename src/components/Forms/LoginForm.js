import React, { useState, useContext, useEffect } from "react";
import AuthContext from '../../context/auth/authContext'
import M from 'materialize-css/dist/js/materialize.min.js';
import './formStyle.css'
import { Link } from 'react-router-dom'

const LoginForm = (props) => {

  const authContext = useContext(AuthContext)

  const { isAuthenticated, login, error, clearErrors } = authContext

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/dashboard")
    }
    if (error) {
      M.toast({ html: `${error}`, displayLength: 4000, classes: 'red' })
    }
    clearErrors()
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
    <div className="auth-form-container">
      <div className="row">
        <h2>Account Login </h2>
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
          <div>
            <button className="btn waves-effect waves-light right" name="action">Login
            <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
        <h5 className="right">No account? Sign up <Link to="/signup">here</Link></h5>
      </div>
    </div>
  )
};

export default LoginForm;
