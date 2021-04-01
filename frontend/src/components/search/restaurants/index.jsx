import React, { useState } from "react";
import {useSelector, useDispatch } from 'react-redux'
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
import { BodyWrapper } from "../../../styledcomponents/forAll/layout";
import {searchAllRestaurantsAction} from '../../../store/actions/restaurantActions'

const Restaurant = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewFilter, setViewFilter] = useState("RESTAURANTS");
  const restaurants = useSelector(state => state.restaurantReducer.restaurants);
  const searchUsers = useSelector(state => state.restaurantReducer.searchUsers);
  const dispatch = useDispatch()


  const [categories] = useState([
    { label: "All", value: 'All' },
    { label: "Pub", value: "Pub" },
    { label: "Italian", value: "Italian" },
    { label: "Fast Food", value: "Fast Food" },
    { label: "Chinese", value: "Chinese" },
    { label: "Thai", value: "Thai" },
    { label: "Oriental", value: "Oriental" },
    { label: "Vegetarian", value: "Vegetarian" },
    { label: "Bar", value: "Bar" },
    { label: "Sea Food", value: "Sea Food" },
  ]);

  //   manage search field changes
  const onSearchFieldChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onCategoryChange = (e) => {
    // fetch by category
    const search_string = `search/?type=restaurants&search_string=${e.target.value}`
    dispatch(searchAllRestaurantsAction(search_string));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const search_string = `search/?type=${viewFilter.toLowerCase()}&search_string=${e.target.value}`
      dispatch(searchAllRestaurantsAction(search_string, viewFilter))
    }
  }

  const renderContent = () => {
    switch (viewFilter) {
      case "RESTAURANTS":
        return (restaurants ? (<RestaurantList items={restaurants} key={'restaurants'}></RestaurantList>) : <></>);
      case "REVIEWS":
        return <Reviews></Reviews>;
      case "USERS":
        return (searchUsers ? (<Users></Users>) : <></>);
      default:
        return <p>Invalid filter...</p>;
    }
  };

  return (
    <PageContainer>
      <Navbar></Navbar>
      <BodyWrapper>
        <PageContent>
          <SearchBar>
            <SearchField
              onChange={onSearchFieldChange}
              type="search"
              placeholder="Search..."
              defaultValue={searchTerm}
              onKeyPress={handleKeyPress}
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
      </BodyWrapper>
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
