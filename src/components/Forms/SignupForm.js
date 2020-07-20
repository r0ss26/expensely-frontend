import React, { useState, useContext, useEffect } from "react";
import AuthContext from '../../context/auth/authContext'

// import axios from "axios";
// import M from 'materialize-css/dist/js/materialize.min.js'

const SignupForm = (props) => {

  const authContext = useContext(AuthContext)

  //console.log(authContext)
  const { register, isAuthenticated, error } = authContext

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/')
    }
  }, [isAuthenticated, props.history])

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')


  const handleInput = (event, setInputState) => {
    setInputState(event.target.value)
  }

  const formData = {
    firstName,
    lastName,
    email,
    password,
    // confirmPassword
  };

  const handleSignupFormSubmit = event => {
    event.preventDefault();

    console.log("Submited")
    register(formData)
  }


  // try {
  //   const res = await axios.post('/users/register', formData)
  //   console.log(res)
  //   localStorage.setItem('jwt', res.data.token)
  // } catch (error) {

  //   console.error(error)
  //   if (error.response.data.errors) {
  //     error.response.data.errors.forEach((e) => {
  //       M.toast({html: `${e.param}: ${e.msg}`, displayLength: 1000 * 60})
  //     })
  //   }
  // }

  return (
    <div className="container">
      <div className="row">
        <form onSubmit={handleSignupFormSubmit} className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input required value={firstName} onChange={(event) => handleInput(event, setFirstName)} id="first_name" type="text" className="validate" />
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="input-field col s6">
              <input required value={lastName} onChange={(event) => handleInput(event, setLastName)} id="last_name" type="text" className="validate" />
              <label htmlFor="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input required value={email} onChange={(event) => handleInput(event, setEmail)} id="email" type="email" className="validate" />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input required value={password} onChange={(event) => handleInput(event, setPassword)} id="password" type="password" className="validate" minLength='6' />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input required value={confirmPassword} onChange={(event) => handleInput(event, setConfirmPassword)} id="confirm-password" type="password" className="validate" />
              <label htmlFor="confirm-password">Confirm Password</label>
            </div>
          </div>
          <button className="btn waves-effect waves-light" name="action">Signup
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    </div>
  )
};

export default SignupForm;
