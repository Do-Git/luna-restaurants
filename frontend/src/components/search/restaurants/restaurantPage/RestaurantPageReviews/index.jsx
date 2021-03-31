import RightSideInfo from "./RightSideInfo";
import ReviewCard from "./ReviewCard";
import {FlexCenterDiv} from "../../../../../styledcomponents/forAll/layout";
import {
    AllReviewCardsDiv,
    FilterWrapper
} from "../../../../../styledcomponents/search/restaurants/restaurantPage/layout";
import {OrangeMiniButton} from "../../../../../styledcomponents/forAll/buttons";
import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import {FilterInput} from "../../../../../styledcomponents/forAll/inputs";

const RestaurantPageReviews = () => {

    // http://localhost:8000/backend/api/restaurants/2/  ->get restaurant by id
    // http://localhost:8000/backend/api/reviews/restaurant/2/ -> get reviews of a specific restaurant
    
    const [restaurantInfo, setRestaurantInfo] = useState({})
    const [reviews, setReviews] = useState([])
    const [reviewsCount, setReviewsCount] = useState(0)

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
                { reviews === [] ? <span>No reviews available</span> :
                    reviews.map( (review, index) => 
                        <ReviewCard 
                            key={'review'+index}
                            first_name={review.author.FilterInputfirst_name}
                            create={review.created}
                            likesAmount={review.liked_by.length}
                            content={review.content}
                        />
                    )
                }
                <ReviewCard />   
                {/* dont for get to delte this line ^*/}
            </AllReviewCardsDiv>
            <RightSideInfo />
        </FlexCenterDiv>
    )
}

export default RestaurantPageReviews