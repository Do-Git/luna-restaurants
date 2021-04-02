import React from 'react';
import { connect } from 'react-redux';
import { LandingPageContainer } from '../../../styledcomponents/HomePage';
import Footer from '../../headers/Footer';
import Navbar from '../../headers/Navbar';
import CongratulationBody from './CongratulationBody';


const Verification = (props) => {
    return (
        <LandingPageContainer>
            <Navbar/>
                <CongratulationBody/>  
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
