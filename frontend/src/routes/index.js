import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import history from "../history";
import Home from "../components/home";
import CreateRestaurant from "../components/profile/restaurants/CreateRestaurant";
// test. delete this

function OurRouter() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/create-restaurant/" exact component={CreateRestaurant} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </Router>
  );
}

export default OurRouter;
