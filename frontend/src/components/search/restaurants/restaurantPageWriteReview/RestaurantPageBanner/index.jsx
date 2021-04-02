import {
    BannerBackground,
    BannerGrayLayer,
    BannerGrayLayerSmall,
    BannerDivSmall,
    BannerDiv
} from "../../../../../styledcomponents/search/restaurants/restaurantPage/layout";
import { WhiteH1, WhiteReviewCountSpan, WhiteSpan} from "../../../../../styledcomponents/forAll/text";
import StarRatingComponent from "react-rating-stars-component";
import {StarsReviewRestaurantPageContainer} from "../../../../home/RestaurantList/RestaurantCard/style";
import React, {useState} from "react";
import {useSelector} from 'react-redux';
import {useParams} from "react-router-dom";


const RestaurantPageBannerReview = () => {

    const restaurantInfo = useSelector( state => state.mixReducers.current_restaurant );
    // console.log("inside restaurant reviews-> current restaurant from redux state", restaurantInfo)
    const default_rating = 4
    // console.log('avg rating', restaurantInfo.avg_rating)


    return(
        <>
        <BannerDivSmall>
            <BannerGrayLayerSmall>
                <WhiteH1 className="title">{restaurantInfo.name ? restaurantInfo.name : 'Restaurant Name'}</WhiteH1>
                <WhiteSpan className="title">{restaurantInfo.categories ? restaurantInfo.categories : 'Category'}</WhiteSpan>
                <StarsReviewRestaurantPageContainer id='stars-container'>
                    <StarRatingComponent
                        activeColor="#F8E71C"
                        isHalf={true}
                        color={"rgba(235, 235, 235, 0.5)"}
                        size={30}
                        value={restaurantInfo.avg_rating ? restaurantInfo.avg_rating : default_rating}
                        edit={false}
                    />
                    <WhiteReviewCountSpan>{restaurantInfo.reviews ? restaurantInfo.reviews.length : 'Review count'} reviews</WhiteReviewCountSpan>
                </StarsReviewRestaurantPageContainer>
            </BannerGrayLayerSmall>
        </BannerDivSmall>
        </>
    )
}

export default RestaurantPageBannerReview