import {
    DateTimeContainer,
    ReviewCardContainer,
    ReviewCardTop, ReviewCardCenter, ReviewContent, ReviewCardFirst, TextWrapper, ReviewCardSecond
} from "../../../../../../styledcomponents/search/restaurants/restaurantPage/layout";
import {TextInput} from "../../../../../../styledcomponents/forAll/inputs";
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
        <ReviewCardContainer>
                <ReviewCardCenter>  
                    <div>
                    <ReviewCardFirst> 
                        <StarsReviewRestaurantPageContainer id='stars-container-review'>
                            <StarRatingComponent
                                activeColor="#F8E71C"
                                isHalf={true}
                                color={"rgba(235, 235, 235, 0.5)"}
                                size={67}
                                value={rating}
                            />
                        </StarsReviewRestaurantPageContainer>
                    </ReviewCardFirst> 
                    <ReviewCardFirst> <span>{'Select your rating '}</span></ReviewCardFirst> 
                        <ReviewCardFirst>  
                        </ReviewCardFirst>
                    </div>
                    <div>
                    <ReviewCardSecond><TextInput placeholder="Your review helps others learn about great local businesses. 
                        Please don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees." />
                    </ReviewCardSecond>
                    </div>
                    <div>
                    </div>
                </ReviewCardCenter>
  </ReviewCardContainer>
    )
}

export default CreateReview