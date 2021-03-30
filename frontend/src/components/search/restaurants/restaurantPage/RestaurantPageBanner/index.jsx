import {
    BannerBackground,
    BannerGrayLayer,
    BannerDiv,
    MapDiv, MapImage
} from "../../../../../styledcomponents/search/restaurants/restaurantPage/layout";
import {MapText, WhiteH1, WhiteReviewCountSpan, WhiteSpan} from "../../../../../styledcomponents/forAll/text";
import StarRatingComponent from "react-rating-stars-component";
import {StarsReviewRestaurantPageContainer} from "../../../../home/RestaurantList/RestaurantCard/style";
import React, {useState} from "react";
import mapImage from "../../../../../assets/map/Screen Shot 2018-04-26 at 00.15.36.png"

const RestaurantPageBanner = () => {

    const [rating, setRating] = useState(0);

    return(
        <>
            <BannerGrayLayer>
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
            </BannerGrayLayer>
            <BannerDiv />
            <MapDiv>
                <MapImage src={mapImage} alt="map" />
                <i className="fas fa-map-marker-alt"></i>
                <MapText>Bahnhofstrasse 106</MapText>
                <br />
                <i className="fas fa-mobile-alt"></i>
                <MapText>+41 343 76 34</MapText>
                <br />
                <i className="fas fa-laptop"></i>
                <MapText>xyz.com</MapText>
            </MapDiv>
        </>
    )
}

export default RestaurantPageBanner