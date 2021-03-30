import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../../headers/Footer";
import Navbar from "../../headers/Navbar";
import RestaurantList from "../../home/RestaurantList/index";
import {
  BestRatedWrapper,
  CardWrapper,
} from "../../../styledcomponents/HomePage";

const SearchBar = styled.div`
  width: 100vw;
  height: 60px;
  background: white;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  align-items: center;
  padding: 0 30px;
`;

const SearchField = styled.input`
  border: none;
  width: 100%;
  font-family: Helvetica;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  margin-left: 25px;
  margin-top: 10px;
  outline: none;
  color: #d8d8d8;
`;

const SearchSelector = styled.select`
  height: 100%;
  border: none;
  border-left: 1px solid #d8d8d8;
  padding: 0 20px;
  font-family: Helvetica;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  color: #d8d8d8;
  outline: none;
`;

const TabSelector = styled.ul`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 640px;
  height: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const TabSelectorItem = styled.li`
  list-style: none;
  height: 100%;
  margin-bottom: -2px;
  border-bottom: 2px solid;
  border-bottom-color: ${(props) => (props.isActive ? "#E47D31" : "#d8d8d8")};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #4c4c4c;
  font-weight: bold;

  :hover {
    border-bottom-color: #e47d31;
  }
`;
export const PageContainer = styled.div`
  padding-top: 70px;
  width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
  background-color: #f8f8f8;
`;

export const PageContent = styled.div`
  min-height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`;

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
          <CardWrapper>
            <RestaurantList />
          </CardWrapper>
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
