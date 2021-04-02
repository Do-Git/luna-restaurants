import React, {useEffect} from "react";
import styled from "styled-components";
import {useSelector, useDispatch} from 'react-redux'
import { TileContainer, TileGrid, TileTopLine } from "../style";
import UserReviewHeader from "../reviews/UserReviewHeader";
import {searchAllUsersAction} from '../../../store/actions/userActions'

const UserAbout = styled.div`
  padding: 15px;
`;

const UserAboutText = styled.p`
  color: #4c4c4c;
  font-size: 18px;
`;

const SearchUsers = () => {
  const dispatch = useDispatch()
  const searchUsers = useSelector(state => state.restaurantReducer.searchUsers);
  const allUsers = useSelector(state => state.userReducer.allUsers);

  useEffect(() => {
    dispatch(searchAllUsersAction('users/list/'));
}, []);

  return (
    <>
    {searchUsers.length > 0 ? (
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
      </TileGrid>) : (
        <TileGrid>
      {allUsers.map((user) => (
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
      )}
    </>
  );
};

export default SearchUsers;
