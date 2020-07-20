import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Sidenav } from 'materialize-css/dist/js/materialize.min.js'
import AuthContext from "../../context/auth/authContext"

const Navbar = () => {

  const authContext = useContext(AuthContext)

  //console.log("navbar", authContext)
  const { isAuthenticated, user, logout} = authContext

  useEffect(() => {
    const elems = document.querySelectorAll('.sidenav');
    const instances = Sidenav.init(elems, {});
  }, [])

  const onLogout = () => {
    logout()
  }

  const authLinks = (
    <>
      <li>Hello {user && user.firstName}</li>
      <li><Link className="btn" to="logout" onClick={onLogout}>Logout</Link></li>
      {/* <i className="fas fa-sign-out-alt"></i> <span className="logout" >Logout</span> */}
    </>
  )

  const publicLinks = (
    <>
      <li><Link className="btn" to="signup">Signup</Link></li>
      <li><Link className="btn" to="login">Login</Link></li>
    </>

  )

  return (
    <>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <div className="container">
              <a href="#" className="brand-logo">Logo</a>
              <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                {isAuthenticated ? authLinks : publicLinks}
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <ul className="sidenav sidenav-close" id="mobile-demo">
        {isAuthenticated ? authLinks : publicLinks}
      </ul>
    </>
  )
}

export default Navbar
