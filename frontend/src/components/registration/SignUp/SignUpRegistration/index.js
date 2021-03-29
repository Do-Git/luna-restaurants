import { connect } from 'react-redux';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BigButton } from '../../../../styledcomponents/forAll/buttons.js';

const SignUpRegistration = () => {

    return (
        <div>
            <BigButton>Registration</BigButton>
        </div>
    )
}

// const mapStateToProps = state => {

// };

// const connection = connect(mapStateToProps);
// const ConnectedApp = connection(SignUpRegistration);
// export default ConnectedApp;
export default SignUpRegistration