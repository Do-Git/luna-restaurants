import RightSideInfo from "./RightSideInfo";
import ReviewCard from "./ReviewCard";
import {FlexCenterDiv} from "../../../../../styledcomponents/forAll/layout";
import {
    AllReviewCardsDiv,
    FilterWrapper
} from "../../../../../styledcomponents/search/restaurants/restaurantPage/layout";
import {OrangeMiniButton} from "../../../../../styledcomponents/forAll/buttons";
import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import {FilterInput} from "../../../../../styledcomponents/forAll/inputs";

const RestaurantPageReviews = (props) => {
  
    // const [restaurantInfo, setRestaurantInfo] = useState({})
    // const [reviews, setReviews] = useState([])
    // const [reviewsCount, setReviewsCount] = useState(0)
    const reviews = useSelector(state => state.mixReducers.current_restaurant.reviews);
    // const restaurantInfo = useSelector( state => state.mixReducers.current_restaurant );
    console.log('Reviews', reviews);
    console.log('typeof reviews', typeof reviews);

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
                { reviews === [] || !reviews ? <span>No reviews available</span> :
                    reviews.map( (review, index) => 
                        <ReviewCard 
                            key={'review'+index}
                            review_id={review.id}
                            first_name={review.author.first_name ? review.author.first_name : review.author.username}
                            created={review.created}
                            rating={review.rating}
                            content={review.content}
                        />
                    )
                }
            </AllReviewCardsDiv>
            <RightSideInfo 
                opening_hours={props.opening_hours}
                price_level={props.price_level}
            />
        </FlexCenterDiv>
    )
}

export default RestaurantPageReviews

// author: {id: 43, username: "14440", first_name: "", last_name: ""}
// content: "okok not bad"
// created: "2021-04-01T20:33:38.309515Z"
// id: 5
// rating: 3