import { ReviewsContainer, ReviewCard } from '../../../../styledcomponents/Profile.js';
import StarRatingComponent from "react-rating-stars-component";
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Reviews = (props) => {

    const [reviews, setReviews] = useState([]);

    const id = useSelector(state => state.mixReducers.id);

    useEffect(() => {
            const token = localStorage.getItem('token');
            const url = `https://luna-sagittarius.propulsion-learn.ch/backend/api/reviews/user/${id}/`;
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
                    console.log(data);
                    setReviews(data.results);
                })
    }, []);

    return (
        <ReviewsContainer className={props.hide ? "hide" : null} >
            <h2>REVIES</h2>
            {reviews.length > 0 ? reviews.map((review, index) => {
                // const year = parseInt(review.created.slice(0, 4));
                // const monthNum = parseInt(review.created.slice(0, 2));
                // const day = parseInt(review.created.slice(8, 10));
                // const date = new Date(year, day, monthNum);
                // const month = date.toLocaleString('default', {month: 'long'});

                return (
                    <ReviewCard key={index} >
                        <article>
                            <h3>{ review.restaurant.name }</h3>
                            <span>{ review.created.slice(0, 10) }</span>
                        </article>
                        <StarRatingComponent
                            count={5}
                            value={review.rating}
                            isHalf={true}
                            size={30}
                            edit={false}
                        />
                        <p>{review.content}</p>
                    </ReviewCard>
                )
            })
            
            

            :
            <ReviewCard >
                <article>
                    <h3>Läderach Chocolatier Suisse</h3>
                    <span>01.01.2018 15:22</span>
                </article>
                <StarRatingComponent
                    count={5}
                    value={3.5}
                    isHalf={true}
                    size={30}
                    edit={false}
                />
                <p>This location at the Bahnhofstrasse is quite friendly and easily located across the
                    street from the train station. The people there seem to be quite good and helpful
                    in their service.
                </p>
            </ReviewCard>
            }
        </ReviewsContainer>
    )
}

export default Reviews;