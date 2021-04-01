// import ReviewCard from "./ReviewCard";
import {FlexCenterDiv} from "../../../../../styledcomponents/forAll/layout";
import {
    AllReviewCardsDiv,
    FilterWrapper,
    ReviewCardContainer2
} from "../../../../../styledcomponents/search/restaurants/restaurantPage/layout";
import {OrangeMiniButton} from "../../../../../styledcomponents/forAll/buttons";
import React from "react";
import {FilterInput} from "../../../../../styledcomponents/forAll/inputs";
import CreateReview from "./CreateReview";

const RestaurantPageReviews = () => {

    return (
        <ReviewCardContainer2>
            <FlexCenterDiv>
                <AllReviewCardsDiv>
                <CreateReview/>
                </AllReviewCardsDiv>
            </FlexCenterDiv>
        </ReviewCardContainer2>
    )
}

export default RestaurantPageReviews