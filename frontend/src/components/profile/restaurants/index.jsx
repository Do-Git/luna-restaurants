import { ReviewsContainer, ReviewCard, CreateButton, RestaurantContainer } from '../../../styledcomponents/Profile.js';
import StarRatingComponent from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Restaurants = (props) => {

    const [restaurants, setRestaurants] = useState([]);

    const id = useSelector(state => state.mixReducers.id);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const url = `https://luna-sagittarius.propulsion-learn.ch/backend/api/restaurants/user/${id}/`;
        const method = 'GET';
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        const config = {
            method: 'GET',
            headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            })
        }
        fetch(url, config).then(res => res.json())
            .then(data => {
                console.log("restaurant", data);
                setRestaurants(data.results);
            })
    }, []);


    return (
        <ReviewsContainer className={props.hide ? "hide" : null} >
            <h2>RESTAURANTS</h2>
            {restaurants.length > 0 ? restaurants.map((restaurant, index) => {
                return (
                <ReviewCard key={index} >
                    <article>
                        <Link id="restaurant-link" to={`/restaurant-page/${restaurant.id}/`}>
                            <h3>{restaurant.name}</h3>
                        </Link>
                    </article>
                    <StarRatingComponent
                        count={5}
                        value={restaurant.avg_rating ? restaurant.avg_rating : 0}
                        isHalf={true}
                        size={30}
                        edit={false}
                    />
                    <RestaurantContainer>
                        <h3>Address</h3>
                        <p id="restaurant-address" >{`${restaurant.street} ${restaurant.city}, ${restaurant.country}`}</p>
                        <h3>Details</h3>
                        <p><b>Category:&nbsp;&nbsp;&nbsp;&nbsp;</b>
                        <i class="fas fa-utensils"></i>&nbsp;{restaurant.categories}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <b>Price level:&nbsp;&nbsp;&nbsp;&nbsp;</b>
                        <i class="far fa-money-bill-alt"></i>&nbsp;{restaurant.price_level}</p>
                    </RestaurantContainer>
                </ReviewCard>
                )
            })   

            :
            <ReviewCard >
                <article>
                    <h3>Laurentio Gelato Store</h3>
                </article>
                <StarRatingComponent
                    count={5}
                    value={3.5}
                    isHalf={true}
                    size={30}
                />
                <p>
                    Lorem ipsum dolor sit amet, et legere populo quodsi sea. Nec quodsi albucius eu,
                    simul soleat accusata te sea. Vix maluisset sententiae et, eam an salutatus consectetuer,
                    ludus partiendo te ius. Vivendum convenire pro in. Cum impedit honestatis eu.
                </p>
            </ReviewCard>}

            <ReviewCard>
                <Link to="/create-restaurant/">
                    <CreateButton>Create Restaurant</CreateButton>
                </Link>
            </ReviewCard>
        </ReviewsContainer>
    )
}

export default Restaurants;