import React from "react";
import styled from "styled-components";
import UserReviewHeader from "./UserReviewHeaderActual";
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import { TileContainer, TileGrid, TileTopLine } from "../style";
import Axios from '../../../axios'
import {searchAllReviewsAction} from '../../../store/actions/reviewActions'

export const SplitButtonWrapper = styled.div`
  background-color: rgba(145, 145, 145, 0.6);
  width: auto;
  max-width: 280px;
  height: 35px;
  border-radius: 20px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const SplitButton = styled.button`
  height: 100%;
  border: none;
  outline: none;
  border-right: 1px solid white;
  background: transparent;
  font-size: 16px;
  color: white;
  cursor: pointer;

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:last-child {
    border: none;
  }
`;

const ReviewContainer = styled.div`
  padding: 15px;
  border-bottom: 1px solid #ebebeb;
`;

const RestaurantName = styled(Link)`
  font-weight: bold;
  color: #e47d31;
  margin-bottom: 10px;
  text-decoration: none;
  display: block;
`;

const ReviewText = styled.p`
  color: #4c4c4c;
  font-size: 18px;
  margin-top: 10px;
`;

const ButtonContainer = styled.div`
  padding: 15px;
`;

const CommentsContainer = styled.div`
  padding: 0 15px 15px 15px;
`;

const CommentsTitle = styled.p`
  font-weight: 300;
  margin-bottom: 10px;
`;

const CommentWrapper = styled.div`
  margin-bottom: 15px;
`;

const CommentAuthor = styled.p`
  font-weight: bold;
  color: #e47d31;
  font-size: 16px;
  margin-bottom: 2px;
`;

const CommentDetail = styled.p`
  font-size: 16px;
`;

const Reviews = () => {
  const searchReview = useSelector(state => state.reviewReducer.searchReviewResults)
  const dispatch = useDispatch()
  console.log('inside reviewwws', searchReview)

  const likeReview = async (id) => {
    // like a review (post)
    // reviews/like/1/
    console.log(searchReview, 'searchReview inside likeReview')
    // dispatch(iLikeReview(`reviews/like/${id}/`))
    try {
      const response = await Axios.post(`reviews/like/${id}/`);
      console.log(response, 'response from like review')
      if(response) {
        dispatch(searchAllReviewsAction('reviews/all/'))
      }
  } catch (error) {
      console.log('Error in searching Reviews>', error);
      return error
  }
  };

  return (
    <>
    {searchReview.length > 0 ? (
      <TileGrid>
       {searchReview.map((review) => (
        <TileContainer key={review.id}>
          <TileTopLine />
          <UserReviewHeader user={review}></UserReviewHeader>
          <ReviewContainer>
            <RestaurantName to={`/restaurant-page/${review.restaurant.id}`} >{review.restaurant.name} </RestaurantName>
            <ReviewText></ReviewText>
          </ReviewContainer>
          <ButtonContainer>
            <SplitButtonWrapper>
              <SplitButton onClick={() => likeReview(review.id)}>Likes: {review.liked_by.length}</SplitButton>
              <SplitButton>Comments: {searchReview.length}</SplitButton>
            </SplitButtonWrapper>
          </ButtonContainer>
          <CommentsContainer>
            <CommentsTitle>Latest Comments</CommentsTitle>
            <CommentWrapper>
              <CommentAuthor></CommentAuthor>
              <CommentDetail>{review.content}</CommentDetail>
            </CommentWrapper>
          </CommentsContainer>
        </TileContainer>
  ))}
      </TileGrid>
    ) : ('No reviews')}
    </>
);
}
export default Reviews;