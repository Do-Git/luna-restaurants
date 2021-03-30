import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import history from "../history";
import Home from "../components/home";
import Login from "../components/Login";
import CreateRestaurant from "../components/profile/restaurants/CreateRestaurant";
import Profile from "../components/profile/userProfile"

function OurRouter() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sign-in/" exact component={Login}/>
        <Route path="/create-restaurant/" exact component={CreateRestaurant} />
        <Route path="/profile/" exact component={Profile} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </Router>
  );
}

export default OurRouter;
