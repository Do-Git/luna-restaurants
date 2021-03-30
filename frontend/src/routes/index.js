import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import history from "../history";
import Home from "../components/home";
import SignIn from "../components/registration/signIn/index.js";
import SignUp from "../components/registration/signUp/index.js";
import Congratulation from "../components/registration/Congratulation/index.js";
import Verification from "../components/registration/verification";
import CreateRestaurant from "../components/profile/restaurants/CreateRestaurant";
import Restaurants from "../components/search/restaurants/index";

function OurRouter() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sign-in/" exact component={SignIn} />
        <Route path="/sign-up/" exact component={SignUp} />
        <Route
          path="/sign-up/congratulation"
          exact
          component={Congratulation}
        />
        <Route path="/sign-up/verification" exact component={Verification} />
        <Route path="/create-restaurant/" exact component={CreateRestaurant} />
        <Route path="/restaurants" exact component={Restaurants} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </Router>
  );
}

export default OurRouter;
