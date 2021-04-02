import { ReviewsContainer, ReviewCard } from '../../../styledcomponents/Profile.js';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Moment from 'react-moment';

const Comments = (props) => {

    const [comments, setComments] = useState([]);

    const id = useSelector(state => state.mixReducers.id);

    useEffect(() => {
            const token = localStorage.getItem('token');
            const url = `https://luna-sagittarius.propulsion-learn.ch/backend/api/review/comment/${id}/`;
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
                    setComments(data.results);
                })
    }, []);


    return (
        <ReviewsContainer className={props.hide ? "hide" : null} >
        <h2>COMMENTS</h2>
        {comments.length > 0 ? comments.map((comment, index) => {
            return (
                <ReviewCard>
                    <article>
                        <h3>{`Review ${comment.review.id}`}</h3>
                        <span><Moment format='MMMM Do YYYY, h:mm:ss a'>{comment.created.slice(0, 10)}</Moment></span>
                    </article>
                    <p>{ comment.content }</p>
                </ReviewCard>
            )
        })
            

        :
            <ReviewCard>
                <article>
                    <h3>You haven't commented yet. Why? &#x1F620;</h3>
                </article>
                <p>Log in and start commenting, so everyone will know the truth!</p>
            </ReviewCard>}
        </ReviewsContainer>
    )
}

export default Comments;
