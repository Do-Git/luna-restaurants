import { connect } from 'react-redux';
import React from 'react';
import styled from 'styled-components';
import { BigButton } from "../../../../styledcomponents/forAll/buttons";
import history from '../../../../history'



const SignInButton = () => {
    const loginHandler = (e) => {
        e.preventDefault()
        const token = localStorage.getItem('token')
        if(token) history.push('/')
    }
    return (
        
          <BigButton type="submit" onClick={loginHandler}>Login</BigButton>
        
    )
}

const mapStateToProps = state => {
    return {
    }
};

const connection = connect(mapStateToProps);
const ConnectedApp = connection(SignInButton);
export default ConnectedApp;
