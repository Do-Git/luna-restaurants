import React from 'react';
import { connect } from 'react-redux';
// import SignInLink from "./SignInLink";
import SignUpBody from './SignUpBody';


const SignUp = (props) => {
    return (
        <>
          <SignUpBody />    
        </>
    )
}

const mapStateToProps = () => {
    return {
        
    };
}

const connection = connect(mapStateToProps);
const ConnectedApp = connection(SignUp);
export default ConnectedApp;

