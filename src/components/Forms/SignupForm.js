import React, { useState } from "react";

const SignupForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleInput = (event, setInputState) => {
    setInputState(event.target.value)
  }

  const handleSignupFormSubmit = (event) => {
    event.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    };
    console.log(formData)
  }

  return (
    <div className="container">
      <div className="row">
        <form onSubmit={handleSignupFormSubmit} className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input required value={firstName} onChange={(event) => handleInput(event, setFirstName)} id="first_name" type="text" className="validate" />
              <label htmlFor="first_name">First Name</label>
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
              <input required value={password} onChange={(event) => handleInput(event, setPassword)} id="password" type="password" className="validate" />
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
