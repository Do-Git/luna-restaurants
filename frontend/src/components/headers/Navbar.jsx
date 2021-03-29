import React from "react";
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
                    <HeaderSpan>Home</HeaderSpan>
                </NavTextDiv>
                <NavTextDiv>
                    <HeaderSpan>Search</HeaderSpan>
                </NavTextDiv>
                <NavTextDiv>
                    <HeaderSpan>Profile</HeaderSpan>
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
