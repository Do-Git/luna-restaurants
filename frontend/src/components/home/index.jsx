import React, { useEffect } from "react";
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
import { connect, useDispatch } from "react-redux";
import { top4RestaurantsAction } from "../../store/actions/restaurantActions";
import { BodyWrapper } from "../../styledcomponents/forAll/layout";

const Home = ({ top4Restaurants }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(top4RestaurantsAction());
  }, []);

  return (
    <LandingPageContainer>
      <Navbar />
      <BodyWrapper>
        <Searchbar />
        <UserAccessTitleWrapper titletext="Best Rated Restaurants" />
        <BestRatedWrapper>
          <CardWrapper>
            {top4Restaurants ? (
              <RestaurantList items={top4Restaurants} key={"top-4-restaurants"} />
            ) : (
              <></>
            )}
          </CardWrapper>
        </BestRatedWrapper>
      </BodyWrapper>
      <Footer />
    </LandingPageContainer>
  );
};
const mapStateToProps = (state) => {
  return {
    top4Restaurants: state.top4Restaurants,
  };
};

export default connect(mapStateToProps, {
  top4RestaurantsAction,
})(Home);
