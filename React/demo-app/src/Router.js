import React from 'react';
import { BrowserRouter, Switch, Route, } from "react-router-dom";
import * as routes from "./constants/routes";

import Main  from './Components/main/Main';

import history from './utils/history';

const Favourites = () => <h2>favourites page</h2>



const Router = () => (
    <BrowserRouter history = {history}>
        <Switch>
            <Route exact path = {routes.HOME} component= { Main } />
            <Route exact path = {routes.FAVOURITES} component= {Favourites }/>

            

        </Switch>
    </BrowserRouter>
);

export default Router;