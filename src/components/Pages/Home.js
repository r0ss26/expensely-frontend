import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from "../../context/auth/authContext"

const Home = () => {

    const authContext = useContext(AuthContext)

    const { isAuthenticated, user, logout, getUser } = authContext

    useEffect(() => {
        getUser()
        // eslint-disable-next-line
    }, [])

    const onLogout = () => {
        logout()
    }

    const authLinks = (
        <>
            <li>Hello {user && user.firstName}</li>
            <li><Link className="btn" to="/login" onClick={onLogout}>Logout</Link></li>
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
        <div>
            You are in Home Page!
            <div className="container">
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {isAuthenticated ? authLinks : publicLinks}
                </ul>
            </div>
        </div>
    )
}

export default Home
