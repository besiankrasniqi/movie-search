import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter, Switch } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchMovies from './components/search-movies.component';
import NavBar from './components/navbar/navbar.component';
import Dashboard from './components/dashboard/dashboard.component';
import Routes from './routes';

import './app.sass';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Routes />
            </Switch>
        </BrowserRouter>
    );
}

export default hot(App);
