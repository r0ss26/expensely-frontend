import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { Sidenav } from 'materialize-css/dist/js/materialize.min.js'
import AuthContext from "../../context/auth/authContext"

const Nav = () => {

    const authContext = useContext(AuthContext)
    //console.log("navbar", authContext)
    const { logout, user } = authContext

    useEffect(() => {
        const elems = document.querySelectorAll('.sidenav');
        const instances = Sidenav.init(elems, {});
        // eslint-disable-next-line
    }, [])

    const onLogout = () => {
        logout()
    }

    const navLinks = (
        <>
            <h4>Expense.ly</h4>
            <li>Hello {user && user.firstName}</li>
            <li className="icon-wrapper">
                <Link to='/profile'>
                    <i className="medium material-icons">account_circle</i>
                    <p>Profile</p>
                </Link>
            </li>
            <li className="icon-wrapper">
                <Link to='/dashboard'>
                    <i className="medium material-icons">insert_chart</i>
                    <p>Dashboard</p></Link>
            </li>
            <li className="icon-wrapper">
                <Link to='/transactions'>
                    <i className="medium material-icons">import_export</i>
                    <p>Transactions</p>
                </Link>
            </li>
            <li className="icon-wrapper">
                <Link to='/budget'>
                    <i className="medium material-icons">attach_money</i>
                    <p>Budget</p>
                </Link>
            </li>
            <li className="icon-wrapper">
                <Link to='/categories'>
                    <i className="medium material-icons">storage</i>
                    <p>Category</p>
                </Link>
            </li>
            <li className="icon-wrapper">
                <Link to="/login" onClick={onLogout}>
                    <i className="medium material-icons">exit_to_app</i>
                    <p>Logout</p>
                </Link>
            </li>
        </>
    )

    return (
        <>
            <Link to="#" data-target="mobile-demo" className="sidenav-trigger"><i className="medium material-icons">menu</i></Link>
            <div className="navigation hide-on-med-and-down">
                <ul className='links'>
                    {navLinks}
                </ul>

            </div>

            <ul className="sidenav sidenav-close" id="mobile-demo">
                {navLinks}
            </ul>

        </>
    )
}

export default Nav
