import React from "react";
import "./App.css";
import Users from "./components/Users";
import Api from "./components/Api";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Api} />
        <Route path="/Users" component={Users} />
        <Route path="/login" component={LogIn} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
