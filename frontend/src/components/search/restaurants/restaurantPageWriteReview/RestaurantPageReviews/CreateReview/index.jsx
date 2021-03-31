import {
    DateTimeContainer,
    ReviewCardContainer2,
    ReviewCardTop, ReviewCardCenter, ReviewContent, ReviewCardFirst, TextWrapper, ReviewCardSecond
} from "../../../../../../styledcomponents/search/restaurants/restaurantPage/layout";
import {TextInput} from "../../../../../../styledcomponents/forAll/inputs";
import {OrangeSmallSubmitButton} from "../../../../../../styledcomponents/forAll/buttons";
import userProfilePicture from '../../../../../../assets/users/IMG_6531.JPG.png'
import StarRatingComponent from "react-rating-stars-component";
import {OrangeSpan} from "../../../../../../styledcomponents/forAll/text";
import {StarsReviewRestaurantPageContainer} from "../../../../../home/RestaurantList/RestaurantCard/style";
import React, {useState} from "react";
import {
    GrayCommentButton,
    GrayLikeButton,
    OrangeMiniButton
} from "../../../../../../styledcomponents/forAll/buttons";
import {FlexSpaceBetweenDiv} from "../../../../../../styledcomponents/forAll/layout";

const CreateReview = () => {

    const [rating, setRating] = useState(0);
    const [showComments, setShowComments] = useState(false);

    return(
            <ReviewCardCenter>  
                    <ReviewCardFirst> 
                        <StarsReviewRestaurantPageContainer id='stars-container-review'>
                            <StarRatingComponent
                                activeColor="#F8E71C"
                                isHalf={true}
                                color={"rgba(235, 235, 235, 0.5)"}
                                size={67}
                                value={rating}
                            />
                        </StarsReviewRestaurantPageContainer><span>{'Select your rating '}</span> 
                    </ReviewCardFirst> 
                    <ReviewCardSecond>
                        <TextInput placeholder="Your review helps others learn about great local businesses. 
                        Please don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees." />
                    </ReviewCardSecond>
                        <ReviewCardSecond>
                        </ReviewCardSecond>
                    <ReviewCardSecond><p>This field is required</p><OrangeSmallSubmitButton >SUBMIT</OrangeSmallSubmitButton></ReviewCardSecond>
            </ReviewCardCenter>
    )
}

export default CreateReview