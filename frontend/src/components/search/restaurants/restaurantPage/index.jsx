import Navbar from "../../../headers/Navbar";
import Footer from "../../../headers/Footer";
import RestaurantPageReviews from "./RestaurantPageReviews";
import RestaurantPageBanner from "./RestaurantPageBanner";

const RestaurantPage = () => {
    return (
        <>
            <Navbar />
            <RestaurantPageBanner />
            <RestaurantPageReviews />
            <Footer />
        </>
    )
}

export default RestaurantPage