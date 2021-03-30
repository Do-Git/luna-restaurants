import React from 'react';
import { connect } from 'react-redux';
import { LandingPageContainer } from '../../../styledcomponents/HomePage';
import Footer from '../../headers/Footer';
import Navbar from '../../headers/Navbar';
import SignUpBody from './SignUpBody';


const SignUp = (props) => {
    return (
        <LandingPageContainer>
            <Navbar/>
                <SignUpBody/>  
            <Footer/>
        </LandingPageContainer> 
    )
}

const mapStateToProps = () => {
    return {
        
    };
}

const connection = connect(mapStateToProps);
const ConnectedApp = connection(SignUp);
export default ConnectedApp;

