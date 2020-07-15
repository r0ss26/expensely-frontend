import React, { useState } from "react";

const LoginSignup = () => {
  const [formType, setFormType] = useState('signup');

  return (
    <div className="container">

      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <input id="email" type="email" class="validate" />
              <label for="email">Email</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="password" type="password" class="validate" />
              <label for="password">Password</label>
            </div>
          </div>
        </form>
        <button class="btn waves-effect waves-light" name="action">Login
          <i class="material-icons right">send</i>
        </button>
      </div>
    </div>
  )
};

export default LoginSignup;
