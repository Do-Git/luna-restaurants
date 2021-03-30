import React from 'react';
import { connect } from 'react-redux';
import VerificationBody from './VerificationBody';


const Verification = (props) => {
    return (
        <>
          <VerificationBody/>    
        </>
    )
}

const mapStateToProps = () => {
    return {
        
    };
}

const connection = connect(mapStateToProps);
const ConnectedApp = connection(Verification);
export default ConnectedApp;

