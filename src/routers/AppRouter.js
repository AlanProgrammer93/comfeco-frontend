import React, { useState } from 'react'
import { Redirect, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Home } from '../components/screens/home/Home';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        path="/auth"
                        component={ AuthRouter }
                        isAuthenticated={ isLoggedIn } />

                    <PrivateRoute
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/"
                        component={ Home } />

                    <Redirect to="/auth/login" />

                </Switch>
            </div>
        </Router>
    )
}
