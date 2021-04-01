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

    const token = localStorage.getItem('token');
    const [review, setReview] = useState('');
    const [rating, setRating] = useState('');
    

    const Review = e => {
        e.preventDefault();
        const url = "https://luna-sagittarius.propulsion-learn.ch/backend/api/reviews/new/";
        const method = 'POST';
        const body = {
            review: review,
            rating: rating,
        };
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });
        const config = {
            method: method,
            headers: headers,
            body: JSON.stringify(body)
        };
        fetch(url, config)
        .then(res => res.status)
        .then(status => {
            if (status === 201){
                console.log("ok")
            } else {
                console.log("response not ok");
            }
        });
    }

    return(
            <ReviewCardCenter>  
                <form onSubmit={Review}>
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
                    <ReviewCardSecond><p>This field is required</p> 
                    <OrangeSmallSubmitButton id='review' value={review} onChange={event => setReview(event.target.value)} required>SUBMIT</OrangeSmallSubmitButton></ReviewCardSecond>
                </form>      
            </ReviewCardCenter>
    )
}

export default CreateReview