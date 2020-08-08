import React from 'react';
import{Switch,Route} from "react-router-dom";

import Main from './Main';

const Abc = () => <h2>I am ABC</h2>
const Def = () => <h2>I am DEF</h2>

const MainRouter =() => (
    <switch>
        <Route exact path ="/abc" components={Abc}/>
        <Route exact path ="/def" components={Def}/>
        <Route exact path ="/" components={Main}/>

    </switch>

);
export default MainRouter;