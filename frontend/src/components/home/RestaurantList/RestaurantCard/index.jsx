import React, { useState } from "react";
import StarRatingComponent from "react-rating-stars-component";
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
  const [rating, setRating] = useState(0);

  const onClickHandler = (e) => {
    e.preventDefault();
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
            activeColor="#F8E71C"
            isHalf={true}
            color={"rgba(235, 235, 235, 0.5)"}
            size={27}
            value={rating}
          />
          <p>75</p>
        </StarsReviewContainer>
      </RestaurantDetailsContainer>
      <img src={DefaultRestaurantImage} alt="Restaurant" />
    </RestaurantMainContainer>
  );
};

export default RestaurantCard;
