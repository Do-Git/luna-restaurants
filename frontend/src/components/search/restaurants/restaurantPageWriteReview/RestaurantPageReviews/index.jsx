// import ReviewCard from "./ReviewCard";
import {FlexCenterDiv} from "../../../../../styledcomponents/forAll/layout";
import {
    AllReviewCardsDiv,
    FilterWrapper
} from "../../../../../styledcomponents/search/restaurants/restaurantPage/layout";
import {OrangeMiniButton} from "../../../../../styledcomponents/forAll/buttons";
import React from "react";
import {FilterInput} from "../../../../../styledcomponents/forAll/inputs";
import CreateReview from "./CreateReview";

const RestaurantPageReviews = () => {

    return (
        <FlexCenterDiv>
            <AllReviewCardsDiv>
               <CreateReview/>
            </AllReviewCardsDiv>
        </FlexCenterDiv>
    )
}

export default RestaurantPageReviews