import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'

const PublicRoute = ({ component: Component, restricted, ...rest }) => {

    const authContext = useContext(AuthContext)
    const { isAuthenticated } = authContext;

    return (
        //restricted = false meaning public route
        //restricted = true meaning restricted route
        <Route {...rest} render={props => (
            isAuthenticated && restricted ? <Redirect to='/profile' />
                : <Component {...props} />
        )}>
        </Route>
    )
}

export default PublicRoute
