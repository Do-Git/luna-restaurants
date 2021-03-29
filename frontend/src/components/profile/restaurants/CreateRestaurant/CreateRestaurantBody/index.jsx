import CreateRestaurantForm from "./CreateRestaurantForm";
import {
    CreateRestaurantContainer,
    TitleH1
} from "../../../../../styledcomponents/profile/restaurants/CreateRestaurant/layout";
import {OrangeUnderline} from "../../../../../styledcomponents/HomePage";


const CreateRestaurantBody = () => {
    return (
        <CreateRestaurantContainer>
            <TitleH1>CREATE NEW RESTAURANT</TitleH1>
            <CreateRestaurantForm />
        </CreateRestaurantContainer>
    )

}

export default CreateRestaurantBody