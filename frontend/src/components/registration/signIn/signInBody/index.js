import { connect } from 'react-redux';
import React, { Component } from 'react';
import styled from 'styled-components';
import SignInButton from "../SignInButton";
import { withRouter } from "react-router-dom";
import { MiddleSection, H1 , OrangeDiv, TopDiv, BottomDiv}from "../../../../styledcomponents/forAll/layout.js";
import { Input, InputDiv, }from "../../../../styledcomponents/forAll/inputs.js";
import {Link} from "react-router-dom"

const Form = styled.form`
    display: flex;
    flex-direction: column;
  `
class SignInBody extends Component {
  constructor (props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  
  

  setEmail = e => {
      this.setState({
          email: e.target.value
      });
  }
  setPassword = e => {
      this.setState({
          password: e.target.value 
      });
  }
  login = (e) => {
    console.log("inside login")
    e.preventDefault();
      const url = "https://localhost:8000/backend/api/auth/token/";
      const method = 'POST';
      const body = {
          email: this.state.email,
          password: this.state.password
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
      .then(res => res.status ? res.json() : console.log('login response not ok'))
      .then(data => {
          console.log(data);
          if (data.access){
            const token = data.access;
            localStorage.setItem('token', token);
            this.props.dispatch({type: 'SET_TOKEN', payload: token});
            this.props.history.push(`/`);
            console.log('inside login')
          } else {
            this.props.history.push("/");
            this.setState({
              email: '',
              password: ''
            });
          }
      });
  }
  render(){
    return (
      <MiddleSection>
           <H1>LOGIN</H1>
             <OrangeDiv/>
           <Form onSubmit={ this.login } >
              <InputDiv>
                <i className="far fa-user input-i" />
                <Input value={ this.state.email } onChange={ this.setEmail } type="email" placeholder="   Username" required />
                {/* <Input type="email" placeholder="   Username" required /> */}
              </InputDiv>
              <InputDiv>
                <i className="fas fa-unlock-alt input-i" />
                <Input value={ this.state.password } onChange={ this.setPassword } type="password" placeholder="   Password" required />
                {/* <Input type="password" placeholder="   Password" required /> */}
              </InputDiv>
           </Form>
           <SignInButton />
      </MiddleSection>
         
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  }
};

const connection = connect(mapStateToProps);
const ConnectedApp = connection(SignInBody);
export default withRouter(ConnectedApp);
