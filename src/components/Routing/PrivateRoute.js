import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import { Route, Redirect } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import AddBtn from '../Layout/AddBtn';
import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';

//pass in components
const PrivateRoute = ({ component: Component, ...rest }) => {


    useEffect(() => {
        //initialize materialize JS
        M.AutoInit()
    }, [])


    const authContext = useContext(AuthContext)
    //console.log(authContext)
    const { isAuthenticated, loading, getUser } = authContext;

    useEffect(() => {
        //Check for token and update application state if required
        const token = localStorage.getItem('token');
        if (token && !isAuthenticated) {
            getUser();
        }
    }, [isAuthenticated, getUser]);

    return (
        // Show the component only when the user is authenticated
        // Otherwise, redirect the user to /login page
        <Route {...rest} render={props => (!isAuthenticated && loading) ? (
            <Redirect to='/login' />
        ) : (
          <>
            <AddBtn />
            <div className="row">
              <div className="col s2">
                <Navbar />
              </div>
              <div className="col s12 l10 offset-l2">
                <Component {...props} />
              </div>
            </div>
          </>
        )
      }
    />
  );
};

export default PrivateRoute;
