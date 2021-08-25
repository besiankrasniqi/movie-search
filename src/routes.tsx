import * as React from 'react';
import { Route } from 'react-router-dom';
import RoutesConfig from './config/routes-config';
import NavBar from './components/navbar/navbar.component';
import Dashboard from './components/dashboard/dashboard.component';
import SearchMovies from './components/search-movies.component';

const Routes = (): React.ReactElement => {
    return (
        <>
            <Route exact path={`${RoutesConfig.home.route}*`} component={NavBar} />
            <Route exact path={RoutesConfig.home.route} component={Dashboard} />
            <Route exact path={RoutesConfig.movieSearch.route} component={SearchMovies} />
        </>
    );
};

export default Routes;
