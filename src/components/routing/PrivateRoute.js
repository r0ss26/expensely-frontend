import React, { useContext, useEffect } from 'react'
import AuthContext from '../../context/auth/authContext'
import { Route, Redirect } from 'react-router-dom'
import Navbar from '../layout/Navbar'
import AddBtn from '../layout/AddBtn'
import "materialize-css/dist/css/materialize.min.css"
import M from "materialize-css/dist/js/materialize.min.js"

import CreateTransactionModal from '../Modals/CreateTransactionModal'


//pass in components 
const PrivateRoute = ({ component: Component, ...rest }) => {

    useEffect(() => {
        //initialize materialize JS
        M.AutoInit()
    })

    const authContext = useContext(AuthContext)
    //console.log(authContext)
    const { isAuthenticated, loading } = authContext;

    return (
        // Show the component only when the user is authenticated
        // Otherwise, redirect the user to /login page
        <Route {...rest} render={props => (!localStorage.token) ? (
            <Redirect to='/login' />
        ) : (
                <>
                    <AddBtn />
                    <Navbar />
                    <CreateTransactionModal />
                    <div className="container">
                        <Component {...props} />
                    </div>
                </>
            )
        }
        />
    )
}

export default PrivateRoute

