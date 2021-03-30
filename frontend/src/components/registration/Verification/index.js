import React from 'react';
import { connect } from 'react-redux';
import { LandingPageContainer } from '../../../styledcomponents/HomePage';
import Footer from '../../headers/Footer';
import Navbar from '../../headers/Navbar';
import VerificationBody from './VerificationBody';


const Verification = (props) => {
    return (
        <LandingPageContainer>
            <Navbar/>
                <VerificationBody/>  
            <Footer/>  
        </LandingPageContainer>
    )
}

const mapStateToProps = () => {
    return {
        
    };
}

const connection = connect(mapStateToProps);
const ConnectedApp = connection(Verification);
export default ConnectedApp;

