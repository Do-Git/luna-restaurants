import Navbar from "../../../headers/Navbar";
import Footer from "../../../headers/Footer";
import CreateRestaurantBody from "./CreateRestaurantBody";
import { BodyWrapper } from "../../../../styledcomponents/forAll/layout";


const CreateRestaurant = () => {

    return (
        <>
            <Navbar />
            <BodyWrapper>
                <CreateRestaurantBody/>
            </BodyWrapper>
            <Footer />
        </>
    )
}

export default CreateRestaurant