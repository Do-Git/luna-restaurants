import {useParams} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Navbar from "../../../headers/Navbar";
import Footer from "../../../headers/Footer";
import RestaurantPageReviews from "./RestaurantPageReviews";
import RestaurantPageBanner from "./RestaurantPageBanner";
import {RestaurantPageContainer} from "../../../../styledcomponents/search/restaurants/restaurantPage/layout";
import { StarsReviewRestaurantPageContainer } from "../../../home/RestaurantList/RestaurantCard/style";
import {useDispatch, useSelector} from 'react-redux'
import { BodyWrapper } from "../../../../styledcomponents/forAll/layout";

const RestaurantPage = () => {

    const { id } = useParams();
    const token = localStorage.getItem('token');
    const [restaurantInfo, setRestaurantInfo] = useState({});
    const dispatch = useDispatch();
    const restaurantReduxState = useSelector( state => state.mixReducers.current_restaurant );

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
    }, [])

    return (
        <RestaurantPageContainer>
            <Navbar />
            <BodyWrapper>
                <RestaurantPageBanner/>
                <RestaurantPageReviews/>
            </BodyWrapper>
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