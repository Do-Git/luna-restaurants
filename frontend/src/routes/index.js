import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import history from "../history";
import Home from "../components/home";
import Login from "../components/Login";
import CreateRestaurant from "../components/profile/restaurants/CreateRestaurant";
import RestaurantPage from "../components/search/restaurants/restaurantPage";

function OurRouter() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sign-in/" exact component={Login}/>
        <Route path="/restaurant-page/" exact component={RestaurantPage} />
        <Route path="/create-restaurant/" exact component={CreateRestaurant} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </Router>
  );
}

export default OurRouter;
