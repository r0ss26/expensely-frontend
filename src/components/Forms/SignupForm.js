import React, { useState, useContext, useEffect } from "react";
import AuthContext from '../../context/auth/authContext'
// import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const SignupForm = (props) => {

  const authContext = useContext(AuthContext)

  const { register, isAuthenticated, error } = authContext

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const { firstName, lastName, email, password, confirmPassword } = user

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/dashboard')
    }

    if (error) {
      M.toast({ html: `${error}`, displayLength: 4000, classes: 'red' })
    }
  }, [isAuthenticated, props.history, error])


  const handleInput = e => setUser({ ...user, [e.target.name]: e.target.value })

  const formData = {
    firstName,
    lastName,
    email,
    password,
  };

  const handleSignupFormSubmit = event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      M.toast({ html: "Passwords do not match", displayLength: 4000, classes: "red" })
    } else {
      register(formData)
    }

  }

  return (
    <div className="container">
      <div className="row">
        <form onSubmit={handleSignupFormSubmit} className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <label htmlFor="firstName">First Name</label>
              <input required value={firstName} onChange={handleInput} type="text" name="firstName" className="validate" />
            </div>
            <div className="input-field col s6">
              <input required value={lastName} onChange={handleInput} name="lastName" type="text" className="validate" />
              <label htmlFor="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input required value={email} onChange={handleInput} name="email" type="email" className="validate" />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input required value={password} onChange={handleInput} name="password" type="password" className="validate" minLength='6' />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input required value={confirmPassword} onChange={handleInput} name="confirmPassword" type="password" className="validate" />
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
