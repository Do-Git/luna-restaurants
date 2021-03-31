import { ReviewsContainer, ReviewCard } from '../../../../styledcomponents/Profile.js';
import StarRatingComponent from "react-rating-stars-component";

const Reviews = (props) => {
    return (
        <ReviewsContainer className={props.hide ? "hide" : null} >
            <h2>REVIES</h2>
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
                />
                <p>This location at the Bahnhofstrasse is quite friendly and easily located across the
                    street from the train station. The people there seem to be quite good and helpful
                    in their service.
                </p>
            </ReviewCard>
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
                />
                <p>This location at the Bahnhofstrasse is quite friendly and easily located across the
                    street from the train station. The people there seem to be quite good and helpful
                    in their service.
                </p>
            </ReviewCard>
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
                />
                <p>This location at the Bahnhofstrasse is quite friendly and easily located across the
                    street from the train station. The people there seem to be quite good and helpful
                    in their service.
                </p>
            </ReviewCard>
        </ReviewsContainer>
    )
}

export default Reviews;