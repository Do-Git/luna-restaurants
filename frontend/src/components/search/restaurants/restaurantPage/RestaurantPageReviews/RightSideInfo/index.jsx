import {RightSideDetailsContainer} from "../../../../../../styledcomponents/search/restaurants/restaurantPage/layout";
import {BlackSpan} from "../../../../../../styledcomponents/forAll/text";
import {OrangeSmallButton} from "../../../../../../styledcomponents/forAll/buttons";
import {FlexSpaceBetweenDiv} from "../../../../../../styledcomponents/forAll/layout";
import {Link} from 'react-router-dom'

export const RightSideInfo = (props) => {

    return (
        <RightSideDetailsContainer>
            <div>
                <i className="far fa-clock"></i>
                <BlackSpan>{props.opening_hours}</BlackSpan>
            </div>
            <div>
                <i className="fas fa-money-check-alt"></i>
                <BlackSpan>Price level: {props.price_level}</BlackSpan>
            </div>
            <FlexSpaceBetweenDiv>
                <Link to="/restaurants/review"><OrangeSmallButton>WRITE A REVIEW</OrangeSmallButton></Link>
                <OrangeSmallButton>EDIT DATA</OrangeSmallButton>
            </FlexSpaceBetweenDiv>
        </RightSideDetailsContainer>
    )

}

export default RightSideInfo