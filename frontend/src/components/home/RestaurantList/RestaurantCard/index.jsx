import React from "react";
import StarRatingComponent from "react-star-rating-component";
import {
  RestaurantAddress,
  RestaurantDetailsContainer,
  RestaurantMainContainer,
  RestaurantName,
  StarsReviewContainer,
  TopBar,
} from "./style";
import DefaultRestaurantImage from "../../../../assets/restaurants/default.png";

const RestaurantCard = () => {
  const onClickHandler = () => {
    // go to detail restaurant
  };

  return (
    <RestaurantMainContainer onClick={onClickHandler}>
      <TopBar />
      <RestaurantDetailsContainer>
        <RestaurantName>Kansas</RestaurantName>
        <RestaurantAddress>123 Buenos Aires</RestaurantAddress>
        <StarsReviewContainer>
          <StarRatingComponent
            name="Restaurant_Rating"
            starColor={"#F8E71C"}
            emptyStarColor={"rgba(235, 235, 235, 0.5)"}
            starDimension={"30px"}
            editing={false}
            starCount={5}
            value={4}
          />
          <p>75</p>
        </StarsReviewContainer>
      </RestaurantDetailsContainer>
      <img src={DefaultRestaurantImage} alt="Restaurant" />
    </RestaurantMainContainer>
  );
};

export default RestaurantCard;
