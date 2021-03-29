import React from "react";
import Searchbar from "./Searchbar";
import RestaurantList from "./RestaurantList";
import {
  LandingPageContainer,
  UserAccessTitleWrapper,
  BestRatedWrapper,
  CardWrapper,
} from "../../styledcomponents/HomePage";

const Home = () => {
  return (
    <LandingPageContainer>
      <Searchbar />
      <UserAccessTitleWrapper titletext="Best Rated Restaurants" />
      <BestRatedWrapper>
        <CardWrapper>
          <RestaurantList />
        </CardWrapper>
      </BestRatedWrapper>
    </LandingPageContainer>
  );
};

export default Home;
