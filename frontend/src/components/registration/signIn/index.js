//import { connect } from 'react-redux';
import React from 'react';
import SignInBody from "./SignInBody";
import Navbar from "../../headers/Navbar";
import Footer from "../../headers/Footer";
import {
  LandingPageContainer,
} from "../../../styledcomponents/HomePage";


export const SignIn = () => {
    return (
        <LandingPageContainer>
            <Navbar />
                <SignInBody/>
            <Footer />
        </LandingPageContainer>
    )
}
 
// const mapStateToProps = state => {
//   return {};
// };
// const connection = connect(mapStateToProps);
// const ConnectedApp = connection(SignIn);
// export default ConnectedApp; 
export default SignIn

