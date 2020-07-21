import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { Sidenav } from 'materialize-css/dist/js/materialize.min.js'
import AuthContext from "../../context/auth/authContext"

const Nav = () => {

    const authContext = useContext(AuthContext)
    //console.log("navbar", authContext)
    const { logout, getUser, user } = authContext

    useEffect(() => {
        getUser()
        const elems = document.querySelectorAll('.sidenav');
        const instances = Sidenav.init(elems, {});
        // eslint-disable-next-line
    }, [])

    const onLogout = () => {
        logout()
    }

    const navLinks = (
        <>
            <h3>Expense.ly</h3>
            <ul className='links'>
                <li>Hello {user && user.firstName}</li>
                <li>
                    <Link to='/profile'><i class="medium material-icons">account_circle</i>Profile</Link>
                </li>
                <li className="icon-wrapper">
                    <Link to='/dashboard'><i class="medium material-icons">insert_chart</i>Dashboard</Link>
                </li>
                <li className="icon-wrapper">
                    <Link to='/transactions'> <i class="medium material-icons">import_export</i>Transactions</Link>
                </li>
                <li className="icon-wrapper">
                    <Link to='/budget'><i class="medium material-icons">attach_money</i>Budget</Link>
                </li>
                <li className="icon-wrapper">
                    <Link to='/categories'><i class="medium material-icons">storage</i>Category</Link>
                </li>
            </ul>
            <i class="medium material-icons">exit_to_app</i>
            <Link className="btn" to="/login" onClick={onLogout}>Logout</Link>
        </>
    )

    return (
        <>
            <Link to="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></Link>
            <div className="navigation hide-on-med-and-down">
                {navLinks}
            </div>
            <ul className="sidenav sidenav-close" id="mobile-demo">
                {navLinks}
            </ul>
        </>
    )
}

export default Nav
