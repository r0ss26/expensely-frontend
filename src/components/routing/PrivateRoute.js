import React, { useContext } from 'react'
import AuthContext from '../../context/auth/authContext'
import { Route, Redirect } from 'react-router-dom'


//pass in components 
const PrivateRoute = ({ component: Component, ...rest }) => {

    const authContext = useContext(AuthContext)
     //console.log(authContext)
    const { isAuthenticated, loading } = authContext;

    return (
          // Show the component only when the user is authenticated
        // Otherwise, redirect the user to /login page
        <Route {...rest} render= { props => !isAuthenticated && !loading ? (
            <Redirect to='/login' />
        ) : (<Component {...props} />
            )
        }
        />
    )
}

export default PrivateRoute

