import {
    BannerBackground,
    BannerGrayLayer,
    BannerGrayLayerSmall,
    BannerDivSmall,
    BannerDiv
} from "../../../../../styledcomponents/search/restaurants/restaurantPage/layout";
import {MapText, WhiteH1, WhiteReviewCountSpan, WhiteSpan} from "../../../../../styledcomponents/forAll/text";
import StarRatingComponent from "react-rating-stars-component";
import {StarsReviewRestaurantPageContainer} from "../../../../home/RestaurantList/RestaurantCard/style";
import React, {useState} from "react";
import mapImage from "../../../../../assets/map/Screen Shot 2018-04-26 at 00.15.36.png"

const RestaurantPageBannerReview = () => {

    const [rating, setRating] = useState(0);

    return(
        <>
        <BannerDivSmall>
            <BannerGrayLayerSmall>
                <WhiteH1 className="title">Läderach Chocolatier Suisse</WhiteH1>
                <WhiteSpan className="title">Chocolatiers & Shops</WhiteSpan>
                <StarsReviewRestaurantPageContainer id='stars-container'>
                    <StarRatingComponent
                        activeColor="#F8E71C"
                        isHalf={true}
                        color={"rgba(235, 235, 235, 0.5)"}
                        size={27}
                        value={rating}
                    />
                    <WhiteReviewCountSpan>68 reviews</WhiteReviewCountSpan>
                </StarsReviewRestaurantPageContainer>
            </BannerGrayLayerSmall>
        </BannerDivSmall>
        </>
    )
}

export default RestaurantPageBannerReview