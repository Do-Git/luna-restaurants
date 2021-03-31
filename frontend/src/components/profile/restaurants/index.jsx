import { ReviewsContainer, ReviewCard, CreateButton } from '../../../styledcomponents/Profile.js';
import StarRatingComponent from "react-rating-stars-component";

const Restaurants = (props) => {
    return (
        <ReviewsContainer className={props.hide ? "hide" : null} >
            <h2>RESTAURANTS</h2>
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
            </ReviewCard>

            <ReviewCard>
                <CreateButton>Create Restaurant</CreateButton>
            </ReviewCard>
        </ReviewsContainer>
    )
}

export default Restaurants;