import {
    BannerBackground,
    BannerGrayLayer,
    BannerDiv,
    MapDiv, MapImage
} from "../../../../../styledcomponents/search/restaurants/restaurantPage/layout";
import {MapText, WhiteH1, WhiteReviewCountSpan, WhiteSpan} from "../../../../../styledcomponents/forAll/text";
import ReactStars from "react-rating-stars-component";
import {StarsReviewRestaurantPageContainer} from "../../../../home/RestaurantList/RestaurantCard/style";
import React, {useState} from "react";
import {useSelector} from 'react-redux';
import mapImage from "../../../../../assets/map/Screen Shot 2018-04-26 at 00.15.36.png"

const RestaurantPageBanner = (props) => {

    const restaurantInfo = useSelector( state => state.mixReducers.current_restaurant );
    console.log("inside restaurant reviews-> current restaurant from redux state", restaurantInfo)
    const default_rating = 4
    console.log('avg rating', restaurantInfo.avg_rating)

    return(
        <>
        <BannerDiv>
            <BannerGrayLayer>
                <WhiteH1 className="title">{restaurantInfo.name ? restaurantInfo.name : 'Restaurant Name'}</WhiteH1>
                <WhiteSpan className="title">{restaurantInfo.categories ? restaurantInfo.categories : 'Category'}</WhiteSpan>
                <StarsReviewRestaurantPageContainer id='stars-container'>
                    <ReactStars
                        activeColor="#F8E71C"
                        isHalf={true}
                        color={"rgba(235, 235, 235, 0.5)"}
                        size={30}
                        value={restaurantInfo.avg_rating ? restaurantInfo.avg_rating : default_rating}
                        edit={false}
                    />
                    <WhiteReviewCountSpan>{restaurantInfo.reviews ? restaurantInfo.reviews.length : 'Review count'} reviews</WhiteReviewCountSpan>
                </StarsReviewRestaurantPageContainer>
            </BannerGrayLayer>
            <MapDiv>
                <MapImage src={mapImage} alt="map" />
                <i className="fas fa-map-marker-alt"></i>
                <MapText>{restaurantInfo.street ? restaurantInfo.street : 'Street'}</MapText>
                <br />
                <i className="fas fa-mobile-alt"></i>
                <MapText>{restaurantInfo.phone ? restaurantInfo.phone : 'Phone number'}</MapText>
                <br />
                <i className="fas fa-laptop"></i>
                <MapText>{restaurantInfo.website ? restaurantInfo.website : 'Not available'}</MapText>
            </MapDiv>
        </BannerDiv>
    </>
        // <>
        //     <BannerDiv>
        //         <BannerGrayLayer>
        //             <WhiteH1 className="title">{props.name}</WhiteH1>
        //             <WhiteSpan className="title">{props.category}</WhiteSpan>
        //             <StarsReviewRestaurantPageContainer id='stars-container'>
        //                 <ReactStars
        //                     activeColor="#F8E71C"
        //                     isHalf={true}
        //                     color={"rgba(235, 235, 235, 0.5)"}
        //                     size={30}
        //                     value={props.avg_rating ? props.avg_rating : default_rating}
        //                     count={5}
        //                     edit={false}
        //                 />
        //                 <WhiteReviewCountSpan>{props.reviews_count} reviews</WhiteReviewCountSpan>
        //             </StarsReviewRestaurantPageContainer>
        //         </BannerGrayLayer>
        //         <MapDiv>
        //             <MapImage src={mapImage} alt="map" />
        //             <i className="fas fa-map-marker-alt"></i>
        //             <MapText>{props.street}</MapText>
        //             <br />
        //             <i className="fas fa-mobile-alt"></i>
        //             <MapText>{props.phone}</MapText>
        //             <br />
        //             <i className="fas fa-laptop"></i>
        //             <MapText>{props.website ? props.website : 'Not available'}</MapText>
        //         </MapDiv>
        //     </BannerDiv>
        // </>
    )
}

export default RestaurantPageBanner