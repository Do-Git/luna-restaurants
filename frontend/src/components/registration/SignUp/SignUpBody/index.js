import { connect } from 'react-redux';
import { MiddleSection, H1 , OrangeDiv}from "../../../../styledcomponents/forAll/layout.js";
import { Input, InputDiv, }from "../../../../styledcomponents/forAll/inputs.js";
import SignUpRegistration from "../SignUpRegistration";
import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";

const Form = styled.form`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
  `

const SignUnBody = (props) => {

    const [email, setEmail] = useState('');
    
    const register = e => {
        e.preventDefault();
        // const url = "https://luna-sagittarius.propulsion-learn.ch/backend/api/registration/";
        const url = "http://localhost:8000/backend/api/registration/";
        const method = 'POST';
        const body = {
           email: email
        };
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        const config = {
            method: method,
            headers: headers,
            body: JSON.stringify(body)
        };
        fetch(url, config)
        .then(res => res.status)
        .then(status => {
            if (status === 201){
                console.log("ok")
                props.dispatch({type: 'ADD_EMAIL', payload: email});
                props.history.push("/sign-up/congratulation/");
            } else {
                console.log("response not ok");
            }
        });
    }
        return(
        <MiddleSection>
          <H1>REGISTRATION</H1>
          <OrangeDiv/>
          <Form onSubmit={ register }>
            <InputDiv>
              <i className="fas fa-envelope input-i" />
              <Input type="email" placeholder="   Email" value={ email } onChange={ event => setEmail(event.target.value) } required />
            </InputDiv>
                <SignUpRegistration />
          </Form>
       </MiddleSection>
    )
}

const mapStateToProps = () => {
    return {
    };
}

const connection = connect(mapStateToProps);
const ConnectedApp = connection(SignUnBody);
export default withRouter(ConnectedApp);
