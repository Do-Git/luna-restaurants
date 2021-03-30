import CreateRestaurantForm from "./CreateRestaurantForm";
import {
    CreateRestaurantContainer,
    TitleH1
} from "../../../../../styledcomponents/profile/restaurants/CreateRestaurant/layout";
import {OrangeUnderline, UserAccessTitleWrapper} from "../../../../../styledcomponents/HomePage";


const CreateRestaurantBody = () => {
    return (
        <CreateRestaurantContainer>
            <UserAccessTitleWrapper titletext="CREATE NEW RESTAURANT" />
            <CreateRestaurantForm />
        </CreateRestaurantContainer>
    )

}

export default CreateRestaurantBody