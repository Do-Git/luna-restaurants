import {useParams} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Navbar from "../../../headers/Navbar";
import Footer from "../../../headers/Footer";
import RestaurantPageReviews from "./RestaurantPageReviews";
import RestaurantPageBanner from "./RestaurantPageBanner";
import {RestaurantPageContainer} from "../../../../styledcomponents/search/restaurants/restaurantPage/layout";
import { StarsReviewRestaurantPageContainer } from "../../../home/RestaurantList/RestaurantCard/style";
import {useDispatch, useSelector} from 'react-redux'

const RestaurantPage = () => {

    const { id } = useParams();
    const token = localStorage.getItem('token');
    const [restaurantInfo, setRestaurantInfo] = useState({});
    const dispatch = useDispatch();
    const restaurantReduxState = useSelector( state => state.current_restaurant );

    useEffect(() => {
        const url = `https://luna-sagittarius.propulsion-learn.ch/backend/api/restaurants/${id}/`;     
        const method = 'GET';
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });
        const config = {
            method: method,
            headers: headers,
        };
        fetch(url, config)
        .then( res => res.status === 201 || res.status === 200 ? res.json() : null )
        .then(data => {
            console.log("Fetching ok, in useEffect, data ->",data);
            // setRestaurantInfo(data);
            dispatch({type: 'ADD_CURRENT_RESTAURANT', payload: data});
        });
        // console.log('restaurantInfo state', restaurantInfo);
    }, [])

    // useEffect(() => {
    //     console.log('from useEffect Restaurant info', restaurantInfo)
    //     console.log('review', restaurantInfo.reviews)
    //     console.log('avg rating', restaurantInfo.avg_rating)
    //     console.log('name', restaurantInfo.name)
    //     console.log(restaurantReduxState)
    // }, [restaurantInfo])

    return (
        <RestaurantPageContainer>
            <Navbar />
            <RestaurantPageBanner 
                // name={restaurantInfo !== {} ? restaurantInfo.name : 'Loading'}
                // category={restaurantInfo !== {} ? restaurantInfo.categories : 'Loading'}
                // avg_rating={restaurantInfo !== {} ? restaurantInfo.avg_rating : 0} 
                // reviews_count={restaurantInfo !== {} && typeof restaurantInfo.reviews === 'array' ? restaurantInfo.reviews.length : 'Loading'}
                // street={restaurantInfo !== {} ? restaurantInfo.street : 'Loading'}
                // phone={restaurantInfo !== {} ? restaurantInfo.phone : 'Loading'}
                // website={restaurantInfo !== {} ? restaurantInfo.website : 'Loading'}
            />
            <RestaurantPageReviews
                // opening_hours={restaurantInfo !== {} ? restaurantInfo.opening_hours : 'Loading'}
                // price_level={restaurantInfo !== {} ? restaurantInfo.price_level : 'Loading'}
            />
            <Footer />
        </RestaurantPageContainer>
    )
}

export default RestaurantPage

// avg_rating: 5
// categories: "3"
// city: "Alberrobello"
// country: "Italy"
// created: "2021-03-31T19:23:45.119676Z"
// email: ""
// id: 2
// image: null
// name: "Hungey Kitty"
// opening_hours: "09:00-20:00"
// owner: {id: 42, username: "evavivaa", first_name: "Eve", last_name: "Klopfenstein"}
// phone: "+4123432432"
// price_level: "2"
// reviews: [{…}]
// street: "Furry 21"
// website: ""
// zip_code: ""