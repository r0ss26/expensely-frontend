import React, { useState } from "react";
import axios from 'axios'

const LoginSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleInput = (event, setInputState) => {
    setInputState(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      email,
      password
    }

    try {
      const res = await axios.post('/auth/login', formData)
      localStorage.setItem('jwt', res.data.token)
    } catch (error) {
      console.error(error)
    }
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

export default LoginSignup;
