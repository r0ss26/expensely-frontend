import React, { useState, useContext, useEffect } from "react";
import AuthContext from '../../context/auth/authContext'

const LoginForm = (props) => {

  const authContext = useContext(AuthContext)

  console.log("auth context in login", authContext)

  const { isAuthenticated, login } = authContext

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/")
    }
  }, [isAuthenticated, props.history])


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
    console.log("formData", formData)
    login(formData)
  }

  return (
    <div className="container">

      <div className="row">
        <form onSubmit={handleSubmit} className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input onChange={(event) => handleInput(event, setEmail)} value={email} id="email" type="email" className="validate" />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input onChange={(event) => handleInput(event, setPassword)} value={password} id="password" type="password" className="validate" />
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
