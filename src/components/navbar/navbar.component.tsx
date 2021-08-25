import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RoutesConfig from '../../config/routes-config';
import { Link } from 'react-router-dom';
import './sass/navbar.sass';

const NavBar = () => {
    return (
        <>
            <Link className="navicons-link" to={{ pathname: RoutesConfig.home.route }}>
                <div className="navbar-icon-app">
                    <FontAwesomeIcon icon={['fas', 'camera-retro']} size="sm" />
                </div>
            </Link>

            <div className="row m-0 p-0 mb-5 navbar-drawings-horizontal">
                <div className="col-md-12 p-0"></div>
            </div>
        </>
    );
};

export default NavBar;
