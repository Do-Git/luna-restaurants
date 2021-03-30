import React from "react";
import { Link } from 'react-router-dom';
import {
    LunaLogoH1,
    NavRightWrapper,
    HeaderSpan,
    NavWrapper,
    NavTextDiv, ButtonWrapper
} from "../../styledcomponents/headers/layout";
import {NavBarSignInButton, NavBarSignUpButton} from "../../styledcomponents/forAll/buttons";

const Navbar = () => {
    return (
        <NavWrapper>
            <LunaLogoH1>LUNA</LunaLogoH1>
            <NavRightWrapper>
                <NavTextDiv>
                    <Link to={'/'}>
                        <HeaderSpan>Home</HeaderSpan>
                    </Link>
                </NavTextDiv>
                <NavTextDiv>
                    {/*<Link to={}>*/}
                        <HeaderSpan>Search</HeaderSpan>
                    {/*</Link>*/}
                </NavTextDiv>
                <NavTextDiv>
                    <Link to={'/profile/'}>
                        <HeaderSpan>Profile</HeaderSpan>
                    </Link>
                </NavTextDiv>
                <ButtonWrapper>
                    <NavBarSignUpButton>SIGNUP</NavBarSignUpButton>
                    <NavBarSignInButton>LOGIN</NavBarSignInButton>
                </ButtonWrapper>
            </NavRightWrapper>
        </NavWrapper>
  );
};

export default Navbar;
