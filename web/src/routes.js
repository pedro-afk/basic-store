import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard/index';
import Details from './pages/Details/index';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Dashboard}/>
                <Route path="/:slug" component={Details}/>
            </Switch>
        </BrowserRouter>
    );
}