import React from 'react';
import LegacyApp from './components/LegacyApp';
import ModernApp from './components/ModernApp';
import { Route, Switch, Router, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export default () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path='/v2' component={ModernApp} />
                <Route path='/' component={LegacyApp} />
            </Switch>
        </Router>
    )
}