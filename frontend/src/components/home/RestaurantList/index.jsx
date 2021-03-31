import React from "react";
import Masonry from "react-masonry-css";
import { Center } from "./style";
import "./index.css";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ items }) => {
  const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    992: 2,
    768: 2,
    576: 1,
  };
  console.log(items, "items");
  return (
    <Center>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="custom-masonry"
        columnClassName="custom-masonry-column"
      >
        {items
          ? [
              ...items.map((item, i) => (
                <RestaurantCard item={item} key={"item" + item.id} />
              )),
            ]
          : "No data available"}
        {/* <RestaurantCard></RestaurantCard> */}
      </Masonry>
    </Center>
  );
};

export default RestaurantList;
