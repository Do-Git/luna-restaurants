import { RegistrationPageContainer } from '../../../styledcomponents/Profile.js';
import Navbar from '../../headers/Navbar.jsx';
import Footer from '../../headers/Footer.jsx';
import ProfileImage from './profileImage';
import SideBar from './sideBar';
import Reviews from './reviews';
import About from './About';
import Comments from '../comments';
import Restaurants from '../restaurants';
import EditProfile from '../edit';
import React, { useState } from 'react';
import { BodyWrapper } from '../../../styledcomponents/forAll/layout.js';

const Profile = () => {
    const [clickedIndex, setClickedIndex] = useState(0);

    return (
        <RegistrationPageContainer>
            <Navbar />
                <ProfileImage />
                <SideBar clickedIndex={clickedIndex} setClickedIndex={setClickedIndex} />
                <Reviews hide={clickedIndex !== 0 ? true : false} />
                <Comments hide={clickedIndex !== 1 ? true : false} />
                <Restaurants hide={clickedIndex !== 2 ? true : false} />
                <EditProfile hide={clickedIndex !== 3 ? true : false} />
                <About />
            <Footer />
        </RegistrationPageContainer>
    )
}

export default Profile;