import React, { useState } from "react";
import Footer from "../../headers/Footer";
import Navbar from "../../headers/Navbar";
import RestaurantList from "../../home/RestaurantList/";
import Reviews from "../reviews/";
import Users from "../users";
import {
  BestRatedWrapper,
  CardWrapper,
} from "../../../styledcomponents/HomePage";
import {
  PageContainer,
  PageContent,
  SearchBar,
  SearchField,
  SearchSelector,
  TabSelector,
  TabSelectorItem,
} from "./style";

const Restaurant = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewFilter, setViewFilter] = useState("RESTAURANTS");

  const [categories] = useState([
    { label: "Select a category...", value: 0 },
    { label: "Pub", value: 1 },
    { label: "Italian", value: 2 },
    { label: "Fast Food", value: 3 },
    { label: "Chinese", value: 4 },
    { label: "Thai", value: 5 },
    { label: "Oriental", value: 6 },
    { label: "Vegetarian", value: 7 },
    { label: "Bar", value: 8 },
    { label: "Sea Food", value: 9 },
  ]);

  //   manage search field changes
  const onSearchFieldChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onCategoryChange = (e) => {
    // fetch by category
  };

  const renderContent = () => {
    switch (viewFilter) {
      case "RESTAURANTS":
        return <RestaurantList></RestaurantList>;
      case "REVIEWS":
        return <Reviews></Reviews>;
      case "USERS":
        return <Users></Users>;
      default:
        return <p>Invalid filter...</p>;
    }
  };

  return (
    <PageContainer>
      <Navbar></Navbar>
      <PageContent>
        <SearchBar>
          <SearchField
            onChange={onSearchFieldChange}
            type="search"
            placeholder="Search..."
            defaultValue={searchTerm}
          ></SearchField>
          {viewFilter === "RESTAURANTS" ? (
            <SearchSelector onChange={onCategoryChange}>
              {categories.map((category) => {
                return (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                );
              })}
            </SearchSelector>
          ) : (
            <></>
          )}
        </SearchBar>
        <TabSelector>
          <TabSelectorItem
            isActive={viewFilter === "RESTAURANTS"}
            onClick={() => setViewFilter("RESTAURANTS")}
          >
            RESTAURANTS
          </TabSelectorItem>
          <TabSelectorItem
            isActive={viewFilter === "REVIEWS"}
            onClick={() => setViewFilter("REVIEWS")}
          >
            REVIEWS
          </TabSelectorItem>
          <TabSelectorItem
            isActive={viewFilter === "USERS"}
            onClick={() => setViewFilter("USERS")}
          >
            USERS
          </TabSelectorItem>
        </TabSelector>
        <BestRatedWrapper>
          <CardWrapper>{renderContent()}</CardWrapper>
        </BestRatedWrapper>
      </PageContent>
      <Footer></Footer>
    </PageContainer>
  );
};

export default Restaurant;

//   CATEGORIES = (
//     ('0', 'No category'),
//     ('1', 'Pub'),
//     ('2', 'Italian'),
//     ('3', 'Fast Food'),
//     ('4', 'Chinese'),
//     ('5', 'Thai'),
//     ('6', 'Oriental'),
//     ('7', 'Vegetarian'),
//     ('8', 'Bar'),
//     ('9', 'Sea Food'),
// ) from backend
