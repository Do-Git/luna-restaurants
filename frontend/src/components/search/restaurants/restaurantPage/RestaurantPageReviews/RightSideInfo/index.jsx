import {RightSideDetailsContainer} from "../../../../../../styledcomponents/search/restaurants/restaurantPage/layout";
import {BlackSpan} from "../../../../../../styledcomponents/forAll/text";
import {OrangeSmallButton} from "../../../../../../styledcomponents/forAll/buttons";
import {FlexSpaceBetweenDiv} from "../../../../../../styledcomponents/forAll/layout";
import {Link} from 'react-router-dom'

export const RightSideInfo = () => {

    return (
        <RightSideDetailsContainer>
            <div>
                <i className="far fa-clock"></i>
                <BlackSpan>Monday-Friday 9:00am - 8:00pm</BlackSpan>
            </div>
            <div>
                <i className="fas fa-money-check-alt"></i>
                <BlackSpan>Price level: {'$$$'}</BlackSpan>
            </div>
            <FlexSpaceBetweenDiv>
                <OrangeSmallButton><Link to="/restaurants/review">WRITE A REVIEW</Link></OrangeSmallButton>
                <OrangeSmallButton>EDIT DATA</OrangeSmallButton>
            </FlexSpaceBetweenDiv>
        </RightSideDetailsContainer>
    )

}

export default RightSideInfo