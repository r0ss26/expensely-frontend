import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import M from 'materialize-css';
import Logo from '../../assets/logo.png';
import graphImage from '../../assets/undraw_laptop_graph.png';
import financeImage from '../../assets/undraw_personal_finance.png';
import savingsImage from '../../assets/undraw_savings.png';
import timeImage from '../../assets/undraw_time.png';

const Home = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, user, logout, getUser } = authContext;

  useEffect(() => {
    getUser();

    const homeNav = document.querySelectorAll('#home-nav');
    M.Sidenav.init(homeNav);
    // eslint-disable-next-line

    const slider = document.querySelectorAll('#slider');
    M.Slider.init(slider);
  }, [getUser]);

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <>
      <li>Hello {user && user.firstName}</li>
      <li>
        <Link className="btn" to="/dashboard">
          Dashboard
        </Link>
        <Link className="btn" to="/login" onClick={onLogout}>
          Logout
        </Link>
      </li>
      {/* <i className="fas fa-sign-out-alt"></i> <span className="logout" >Logout</span> */}
    </>
  );

  const publicLinks = (
    <>
      <li>
        <Link className="btn" to="signup">
          Signup
        </Link>
      </li>
      <li>
        <Link className="btn" to="login">
          Login
        </Link>
      </li>
    </>
  );

  return (
    <>
      <nav>
        <div class="nav-wrapper blue lighten-4">
          <div className="container">
            <img alt="Logo" height="60" src={Logo} />
            <a href="/#" data-target="home-nav" class="sidenav-trigger">
              <i class="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {isAuthenticated ? authLinks : publicLinks}
            </ul>
          </div>
        </div>
      </nav>

      <ul class="sidenav" id="home-nav">
        {isAuthenticated ? authLinks : publicLinks}
      </ul>

      <div style={{ padding: '20px 0' }} className="container">
        <div id="slider" class="slider">
          <ul class="slides">
            <li>
              <img alt="" src={graphImage} />
              <span
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
                class="caption center-align"
              >
                <h3 class="black-text">Expense.ly</h3>
                <h5 class="light black-text text-lighten-3">
                  Take control of your finances.
                </h5>
              </span>
            </li>
            <li>
              <img alt="" height="250" src={financeImage} />
              <span
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
                class="caption black-text left-align"
              >
                <h3>Track your spending.</h3>
                <h5 class="light black-text text-lighten-3">
                  Better understand your finances.
                </h5>
              </span>
            </li>
            <li>
              <img alt="" height="250" src={savingsImage} />
              <div
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
                class="caption right-align black-text"
              >
                <h3>Reach your savings goals faster.</h3>
              </div>
            </li>
            <li>
              <img alt="" height="250" src={timeImage} />
              <div
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
                class="caption black-text center-align"
              >
                <h3>Save time!</h3>
                <h5 class="light black-text text-lighten-3">
                  No more spreadsheets, manage all your expenses in a single
                  place.
                </h5>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col s12 l2 offset-l3">
          <div class="card center-align">
            <span class="card-title">
              {' '}
              <i className="material-icons medium">attach_money</i>
            </span>
            <div class="card-content">
              <p>
                Do you want to make personal finance a priority? Expense.ly
                allows you to improve your finances by giving you insight into
                how you spend your money.
              </p>
            </div>
          </div>
        </div>
        <div className="col s12 l2">
          <div class="card center-align">
            <span class="card-title">
              {' '}
              <i className="material-icons medium">all_inclusive</i>
            </span>
            <div class="card-content">
              <p>
                <strong>Expense.ly</strong> allows you to track your
                transactions, spending categories, budget goals and more.
              </p>
            </div>
          </div>
        </div>
        <div className="col s12 l2">
          <div class="card center-align">
            <span class="card-title">
              {' '}
              <i className="material-icons medium">alarm</i>
            </span>
            <div class="card-content">
              <p>
                Use <strong>expense.ly</strong> to save time! The app includes a
                simple and easy-to-use interface. Graphical statistics and data
                visualisations provide a quick overview of your finances.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
