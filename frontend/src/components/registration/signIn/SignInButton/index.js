import { connect } from 'react-redux';
import React from 'react';
import styled from 'styled-components';
import { BigButton } from "../../../../styledcomponents/forAll/buttons";
import history from '../../../../history'



const SignInButton = () => {


    return (
        
          <BigButton type="submit">Login</BigButton>
        
    )
}

const mapStateToProps = state => {
    return {
    }
};

const connection = connect(mapStateToProps);
const ConnectedApp = connection(SignInButton);
export default ConnectedApp;
