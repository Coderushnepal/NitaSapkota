import React from 'react';
import {BrowserRouter , Switch,Route} from 'react-router-dom';
import Main from './main/Main';

 
const AppRouter = () => (
    <BrowserRouter >
      <Switch>
        <Route to ='/' component={Main} />
        

       
      </Switch>
    </BrowserRouter>
  );

export default AppRouter;