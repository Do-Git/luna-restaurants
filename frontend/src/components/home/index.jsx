import React from "react";
import Searchbar from "./Searchbar";
import RestaurantList from "./RestaurantList";
import Navbar from "../headers/Navbar";
import Footer from "../headers/Footer";
import {
  LandingPageContainer,
  UserAccessTitleWrapper,
  BestRatedWrapper,
  CardWrapper,
} from "../../styledcomponents/HomePage";

const Home = () => {
  return (
    <LandingPageContainer>
      <Navbar />
      <Searchbar />
      <UserAccessTitleWrapper titletext="Best Rated Restaurants" />
      <BestRatedWrapper>
        <CardWrapper>
          <RestaurantList />
        </CardWrapper>
      </BestRatedWrapper>
      <Footer />
    </LandingPageContainer>
  );
};

export default Home;
