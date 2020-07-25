import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { Sidenav } from 'materialize-css/dist/js/materialize.min.js'
import AuthContext from "../../context/auth/authContext"
import logo from '../../assets/logo.png'

const Nav = () => {

    const authContext = useContext(AuthContext)
    
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
            <li className="icon-wrapper">
                <Link to='/profile'>
                    <i className="small material-icons">account_circle</i>
                    <p>Profile</p>
                </Link>
            </li>
            <li className="icon-wrapper">
                <Link to='/dashboard'>
                    <i className="small material-icons">insert_chart</i>
                    <p>Dashboard</p></Link>
            </li>
            <li className="icon-wrapper">
                <Link to='/transactions'>
                    <i className="small material-icons">import_export</i>
                    <p>Transactions</p>
                </Link>
            </li>
            <li className="icon-wrapper">
                <Link to='/budget'>
                    <i className="small material-icons">attach_money</i>
                    <p>Budget</p>
                </Link>
            </li>
            <li className="icon-wrapper">
                <Link to='/categories'>
                    <i className="small material-icons">storage</i>
                    <p>Category</p>
                </Link>
            </li>
        </>
    )

    return (
        <>
            <Link to="#" data-target="mobile-demo" className="sidenav-trigger "><i className="medium material-icons">menu</i></Link>
            <div className="navigation hide-on-med-and-down">

                <ul className='links'>
                    <li className="logo-img"><img src={logo} /></li>
                    <li>Hello {user && user.firstName}</li>
                    {navLinks}
                </ul>
                <div className="logout">
                    <Link to="/login" onClick={onLogout}>
                        <i className="medium material-icons">exit_to_app</i>
                        <p>Logout</p>
                    </Link>
                </div>
            </div>
            <div className="sidenav-navigation">
                <ul className="sidenav sidenav-close" id="mobile-demo">
                    <li className="logo-img"><img src={logo} /></li>
                    <li>Hello {user && user.firstName}</li>
                    {navLinks}
                    <li></li>
                    <div className="logout">
                        <Link to="/login" onClick={onLogout}>
                            <i className="small material-icons">exit_to_app</i>
                            <p>Logout</p>
                        </Link>
                    </div>
                </ul>

            </div>


        </>
    )
}

export default Nav
