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
import history from '../../../../history'

const RestaurantCard = ({ item }) => {
  const [rating, setRating] = useState(0);

  const onClickHandler = (e) => {
    e.preventDefault();
    // go to detail restaurant
    history.push(`/restaurant-page/${item.id}/`)
  };

  return (
    <RestaurantMainContainer onClick={onClickHandler}>
      <TopBar />
      <RestaurantDetailsContainer>
        <RestaurantName>{item.name}</RestaurantName>
        <RestaurantAddress>
          {item.street}, {item.city}
        </RestaurantAddress>
        <StarsReviewContainer>
          <StarRatingComponent
            activeColor="#F8E71C"
            isHalf={true}
            color={"rgba(235, 235, 235, 0.5)"}
            size={27}
            // edit={false}
            value={item.avg_rating ? item.avg_rating : rating}
          />
          <p>{item.reviews.length}</p>
        </StarsReviewContainer>
      </RestaurantDetailsContainer>
      <img
        src={item.image ? item.image : DefaultRestaurantImage}
        alt="Restaurant"
      />
    </RestaurantMainContainer>
  );
};

export default RestaurantCard;
