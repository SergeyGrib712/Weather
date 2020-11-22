import React from 'react';
import {
    Route,
    Switch,
    Redirect,
    BrowserRouter,
} from 'react-router-dom';
import { Weather } from '../pages';

const Routers: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/'>
                    <Weather />
                </Route>

                <Redirect to='/' />
            </Switch>
        </BrowserRouter>
    );
};

export default Routers;
