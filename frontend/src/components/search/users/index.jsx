import React from "react";
import styled from "styled-components";
import {useSelector} from 'react-redux'
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
  const searchUsers = useSelector(state => state.restaurantReducer.searchUsers);
  return (
    <>
      <TileGrid>
      {searchUsers.map((user) => (
        <TileContainer key={user.id}>
          <TileTopLine />
          <UserReviewHeader user={user}></UserReviewHeader>
          <UserAbout>
            <UserAboutText>
              {user.things_I_love}
            </UserAboutText>
          </UserAbout>
        </TileContainer>
      ))}
      </TileGrid>
    </>
  );
};

export default SearchUsers;
