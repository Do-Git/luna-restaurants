import React, { useState } from "react";
import { ButtonSearchbar } from "../../../styledcomponents/forAll/buttons";
import { HomeHeroWrapper, InputWrapper } from "./style";

const Searchbar = () => {
  const [search, setSearch] = useState("");

  const submitHandler = () => {
    // fetch with the submitted string
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
