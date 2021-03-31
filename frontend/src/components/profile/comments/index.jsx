import { ReviewsContainer, ReviewCard } from '../../../styledcomponents/Profile.js'

const Comments = (props) => {
    return (
        <ReviewsContainer className={props.hide ? "hide" : null} >
            <h2>COMMENTS</h2>
            <ReviewCard>
                <article>
                    <h3>Review 1</h3>
                    <span>01.01.2018 15:22</span>
                </article>
                <p>This is horrible!</p>
            </ReviewCard>
            <ReviewCard>
                <article>
                    <h3>Review 2</h3>
                    <span>01.01.2018 15:22</span>
                </article>
                <p>Thats a good idea!</p>
            </ReviewCard>
        </ReviewsContainer>
    )
}

export default Comments;
