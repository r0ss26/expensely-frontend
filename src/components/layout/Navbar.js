import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import { Sidenav } from 'materialize-css/dist/js/materialize.min.js'

const Navbar = () => {

  useEffect(() => {
    const elems = document.querySelectorAll('.sidenav');
    const instances = Sidenav.init(elems, {});
  }, [])

  return (
    <>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <div className="container">
              <a href="#" className="brand-logo">Logo</a>
              <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link className="btn" to="signup">Signup</Link></li>
                <li><Link className="btn" to="login">Login</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <ul className="sidenav sidenav-close" id="mobile-demo">
        <li><Link className="btn" to="signup">Signup</Link></li>
        <li><Link className="btn" to="login">Login</Link></li>
      </ul>
    </>
  )
}

export default Navbar
