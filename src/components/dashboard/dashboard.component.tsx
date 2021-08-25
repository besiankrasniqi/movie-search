import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import RoutesConfig from '../../config/routes-config';
import './sass/dashboard.sass';

const Dashboard = () => {
    return (
        <div className="container dashboard-container p-4">
            <div className="row">
                <div className="col-md-3 dashboard-item">
                    <Link
                        className="navicons-link"
                        to={{ pathname: RoutesConfig.movieSearch.route }}
                    >
                        <div className="dashboard-tile">
                            <FontAwesomeIcon icon={['fas', 'video']} size="sm" />
                        </div>
                        <div className="dashboard-tile-description">Movie Search</div>
                    </Link>
                </div>
                <div className="col-md-3 dashboard-item">
                    <div className="dashboard-tile">
                        <FontAwesomeIcon icon={['fas', 'wrench']} size="sm" />
                    </div>
                    <div className="dashboard-tile-description">Placeholder</div>
                </div>
                <div className="col-md-3 dashboard-item">
                    <div className="dashboard-tile">
                        <FontAwesomeIcon icon={['fas', 'compass']} size="sm" />
                    </div>
                    <div className="dashboard-tile-description">Placeholder</div>
                </div>
                <div className="col-md-3 dashboard-item">
                    <div className="dashboard-tile">
                        <FontAwesomeIcon icon={['fas', 'location-arrow']} size="sm" />
                    </div>
                    <div className="dashboard-tile-description">Placeholder</div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
