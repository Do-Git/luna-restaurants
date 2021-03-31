import React from "react";
import styled from "styled-components";

import { TileContainer, TileGrid, TileTopLine } from "../style";
import UserReviewHeader from "../reviews/UserReviewHeader";

const UserAbout = styled.div`
  padding: 15px;
`;

const UserAboutText = styled.p`
  color: #4c4c4c;
  font-size: 18px;
`;

const SearchUsers = () => {
  return (
    <>
      <TileGrid>
        <TileContainer>
          <TileTopLine />
          <UserReviewHeader></UserReviewHeader>
          <UserAbout>
            <UserAboutText>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
              beatae nesciunt cumque cupiditate. Aliquam aperiam hic aliquid ex
              ratione, sint facere veritatis ab excepturi, cum praesentium.
              Nostrum, pariatur? Autem, perferendis?
            </UserAboutText>
          </UserAbout>
        </TileContainer>
      </TileGrid>
    </>
  );
};

export default SearchUsers;
