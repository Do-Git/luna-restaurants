import React from "react";
import Masonry from "react-masonry-css";
import { Center } from "./style";
import "./index.css";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = () => {
  const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    992: 2,
    768: 2,
    576: 1,
  };

  return (
    <Center>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="custom-masonry"
        columnClassName="custom-masonry-column"
      >
        <RestaurantCard></RestaurantCard>
        <RestaurantCard></RestaurantCard>
        <RestaurantCard></RestaurantCard>
        <RestaurantCard></RestaurantCard>
      </Masonry>
    </Center>
  );
};

export default RestaurantList;
