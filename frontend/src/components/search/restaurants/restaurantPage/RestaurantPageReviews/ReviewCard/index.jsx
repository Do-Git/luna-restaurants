import {
    DateTimeContainer,
    ReviewCardContainer,
    ReviewCardTop, ReviewCardTopLeft, ReviewContent
} from "../../../../../../styledcomponents/search/restaurants/restaurantPage/layout";
import userProfilePicture from '../../../../../../assets/users/IMG_6531.JPG.png'
import ReactStars from "react-rating-stars-component";
import {OrangeSpan} from "../../../../../../styledcomponents/forAll/text";
import {StarsReviewRestaurantPageContainer} from "../../../../../home/RestaurantList/RestaurantCard/style";
import React, {useState} from "react";
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

    const clickHandler = () => {
        setShowComments(!showComments)
        console.log(showComments)
    }

    return(
        <ReviewCardContainer>
            <ReviewCardTop>
                <ReviewCardTopLeft>
                    <img src={userProfilePicture} alt="profile picture"/>
                    <div>
                        <h3>{props.first_name}</h3>
                        <span>{'6'} reviews in total</span>
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
                        {/* {props.created} */}
                        <Moment format='YYYY/MM/DD HH:MM'>{props.created}</Moment>
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
                        <GrayLikeButton>
                            <i className="far fa-thumbs-up"></i>
                            Like {'63'}
                        </GrayLikeButton>
                        <GrayCommentButton onClick={clickHandler}>
                            Comment {'23'}
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
                            <h3>Colin Wirtz</h3>
                            <span>actually you have no taste!</span>
                        </div>
                        <div>
                            <span>01.01.2018 15:22</span>
                        </div>
                    </FlexSpaceBetweenDiv>
                    <FlexSpaceBetweenDiv>
                        <div>
                            <h3>Colin Wirtz</h3>
                            <span>actually you have no taste!</span>
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