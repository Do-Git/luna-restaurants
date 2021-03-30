import { connect } from 'react-redux';
import React from 'react';
import styled from 'styled-components';
import { BigButton } from "../../../../styledcomponents/forAll/buttons";
// import {Link} from "react-router-dom"

const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;


const SignUpRegistration = () => {
    return (
        <ButtonDiv>
            {/* <Link to={'/sign-up/congratulation'}> */}
                <BigButton type="submit">Register</BigButton>
            {/* </Link> */}
        </ButtonDiv>
    )
}

const mapStateToProps = state => {
    return {
    }
};

const connection = connect(mapStateToProps);
const ConnectedApp = connection(SignUpRegistration);
export default ConnectedApp;
