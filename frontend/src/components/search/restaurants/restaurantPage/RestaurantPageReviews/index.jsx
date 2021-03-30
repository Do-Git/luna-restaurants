import RightSideInfo from "./RightSideInfo";
import ReviewCard from "./ReviewCard";
import {FlexCenterDiv} from "../../../../../styledcomponents/forAll/layout";
import {
    AllReviewCardsDiv,
    FilterWrapper
} from "../../../../../styledcomponents/search/restaurants/restaurantPage/layout";
import {OrangeMiniButton} from "../../../../../styledcomponents/forAll/buttons";
import React from "react";
import {FilterInput} from "../../../../../styledcomponents/forAll/inputs";

const RestaurantPageReviews = () => {

    return (
        <FlexCenterDiv>
            <AllReviewCardsDiv>
                <FilterWrapper>
                    <FilterInput
                    type="text"
                    name="filter"
                    placeholder="Filter list..."
                    // value={search}
                    // onChange={(e) => setSearch(e.target.value)}
                    />
                    <OrangeMiniButton>Filter</OrangeMiniButton>
                </FilterWrapper>
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </AllReviewCardsDiv>
            <RightSideInfo />
        </FlexCenterDiv>
    )
}

export default RestaurantPageReviews