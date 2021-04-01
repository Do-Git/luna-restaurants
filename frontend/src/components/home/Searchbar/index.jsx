import React, { useState } from "react";
import { ButtonSearchbar } from "../../../styledcomponents/forAll/buttons";
import { HomeHeroWrapper, InputWrapper } from "./style";
import {searchAllRestaurantsAction} from '../../../store/actions/restaurantActions'
import {useDispatch} from 'react-redux'

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const submitHandler = async e => {
    e.preventDefault();
    const search_string = `search/?type=restaurants&search_string=${search}`

    dispatch(searchAllRestaurantsAction(search_string));
};

  return (
    <>
      <HomeHeroWrapper>
        <InputWrapper>
          <input
            type="text"
            name="search"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </InputWrapper>
        <ButtonSearchbar onClick={submitHandler}>Search</ButtonSearchbar>
      </HomeHeroWrapper>
    </>
  );
};

export default Searchbar;
