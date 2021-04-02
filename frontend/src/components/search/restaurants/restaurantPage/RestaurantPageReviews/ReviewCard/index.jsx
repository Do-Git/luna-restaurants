import {
    DateTimeContainer,
    ReviewCardContainer,
    ReviewCardTop, ReviewCardTopLeft, ReviewContent
} from "../../../../../../styledcomponents/search/restaurants/restaurantPage/layout";
import userProfilePicture from '../../../../../../assets/users/IMG_6531.JPG.png';
import defaultProfilePic from '../../../../../../assets/users/default-user-icon.png';
import ReactStars from "react-rating-stars-component";
import {OrangeSpan} from "../../../../../../styledcomponents/forAll/text";
import {StarsReviewRestaurantPageContainer} from "../../../../../home/RestaurantList/RestaurantCard/style";
import React, {useState, useEffect} from "react";
import {
    GrayCommentButton,
    GrayLikeButton,
    OrangeSuperMiniButton
} from "../../../../../../styledcomponents/forAll/buttons";
import {FlexSpaceAroundDiv, FlexSpaceBetweenDiv} from "../../../../../../styledcomponents/forAll/layout";
import {CommentInput} from "../../../../../../styledcomponents/forAll/inputs";
import Moment from 'react-moment';

const ReviewCard = (props) => {

    const [showComments, setShowComments] = useState(false);
    const [likesAmount, setLikesAmount] = useState(0);
    const [likedByMe, setLikedByMe] = useState(false); 
    const token = localStorage.getItem('token');

    const clickHandler = () => {
        setShowComments(!showComments)
        // console.log(showComments)
    }

    useEffect( () => {  // fetch specific reviews to get likes amount
        const url = `https://luna-sagittarius.propulsion-learn.ch/backend/api/reviews/${props.review_id}/`;     
        const method = 'GET';
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });
        const config = {
            method: method,
            headers: headers,
        };
        fetch(url, config)
        .then( res => res.status === 200 ? res.json() : null )
        .then(data => {
            // console.log("Fetching ok, in useEffect, data (review) ->",data);
            console.log('liked_by.length', data.liked_by.length)
            setLikesAmount(data.liked_by.length)
        });
    }, [likedByMe])

    const likeHandler = () => {
        const url = `https://luna-sagittarius.propulsion-learn.ch/backend/api/reviews/like/${props.review_id}/`;     
        const method = 'POST';
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });
        const config = {
            method: method,
            headers: headers,
        };
        fetch(url, config)
        .then( res => res.status === 200 ? res.json() : null )
        .then(data => {
            // console.log("Fetching ok, in useEffect, data (review) ->",data);
            console.log("Toggle like ok", data)
            setLikedByMe(!likedByMe)
            console.log('liked by me',likedByMe)
        });
    }

    return(
        <ReviewCardContainer>
            <ReviewCardTop>
                <ReviewCardTopLeft>
                    <img src={props.profile_picture ? props.profile_picture : defaultProfilePic} alt="profile picture"/>
                    <div>
                        <h3>{props.first_name}</h3>
                        <span>{'2'} comments in total</span>
                    </div>
                    <StarsReviewRestaurantPageContainer id='stars-container'>
                        <ReactStars
                            activeColor="#F8E71C"
                            isHalf={true}
                            color={"rgba(235, 235, 235, 0.5)"}
                            size={17}
                            value={props.rating}
                            edit={false}
                        />
                    </StarsReviewRestaurantPageContainer>
                </ReviewCardTopLeft>
                <DateTimeContainer>
                    <span>
                        <Moment format='DD.MM.YYYY HH:MM'>{props.created}</Moment>
                    </span>
                </DateTimeContainer>
            </ReviewCardTop>
            <ReviewContent>
                <span>{props.content}</span>
            </ReviewContent>
            {
                !showComments ?
                <FlexSpaceBetweenDiv>
                    <div>
                        <GrayLikeButton 
                            onClick={likeHandler}
                            liked_by_me={likedByMe}>
                            <i className="far fa-thumbs-up"></i>
                            Like {likesAmount}
                        </GrayLikeButton>
                        <GrayCommentButton onClick={clickHandler}>
                            Comment {'2'}
                        </GrayCommentButton>
                    </div>
                    <OrangeSpan onClick={clickHandler}>View all comments</OrangeSpan>
                </FlexSpaceBetweenDiv>
                    :
                <div>
                    <FlexSpaceAroundDiv>
                        <CommentInput placeholder="Comment"/>
                        <OrangeSuperMiniButton>POST</OrangeSuperMiniButton>
                        <span onClick={clickHandler}>Hide</span>
                    </FlexSpaceAroundDiv>
                    <FlexSpaceBetweenDiv>
                        <div>
                            <h3>Dottie</h3>
                            <span>The best in town!</span>
                        </div>
                        <div>
                            <span>01.01.2018 15:22</span>
                        </div>
                    </FlexSpaceBetweenDiv>
                    <FlexSpaceBetweenDiv>
                        <div>
                            <h3>Tuni The Cat</h3>
                            <span>They don't have fish for me. Super disappointed!</span>
                        </div>
                        <div>
                            <span>01.01.2018 15:22</span>
                        </div>
                    </FlexSpaceBetweenDiv>
                </div>
            }

        </ReviewCardContainer>
    )
}

export default ReviewCard