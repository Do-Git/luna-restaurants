import Navbar from "../../../headers/Navbar";
import Footer from "../../../headers/Footer";
import RestaurantPageReviews from "./RestaurantPageReviews";
import RestaurantPageBanner from "./RestaurantPageBanner";
import {RestaurantPageContainer} from "../../../../styledcomponents/search/restaurants/restaurantPage/layout";
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from "react-router-dom";
import React, { useState, useEffect } from 'react';

const RestaurantPageCreateReview = () => {

    const {id} = useParams();
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

    return (
        <RestaurantPageContainer>
            <Navbar />
            <RestaurantPageBanner />
            <RestaurantPageReviews />
            <Footer />
        </RestaurantPageContainer>
    )
}

export default RestaurantPageCreateReview