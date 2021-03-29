import CreateRestaurantForm from "./CreateRestaurantForm";
import {CreateRestaurantContainer} from "../../../../../styledcomponents/profile/restaurants/CreateRestaurant/layout";


const CreateRestaurantBody = () => {
    return (
        <CreateRestaurantContainer>
            <h1>CREATE NEW RESTAURANT</h1>
            <CreateRestaurantForm />
        </CreateRestaurantContainer>
    )

}

export default CreateRestaurantBody