import styled from "styled-components";

export const NavBarButton = styled.button`
    background-color: #E47D31;
    color: white;
    width: 6rem;
    height: 2.5rem;
    border: none;
    margin: 1px;
    :hover {
        cursor: pointer;    
    }
`
export const NavBarSignUpButton = styled(NavBarButton)`
    border-radius: 25px 0 0 25px;
`

export const NavBarSignInButton = styled(NavBarButton)`
    border-radius: 0 25px 25px 0;
`

export const SocialMediaIcon = styled.div`
    border-radius: 50%;
    border: solid 1.8px #979797;
    color: #979797;
    width: 1.5rem;
    height: 1.5rem;
    text-align: center;
    vertical-align: middle;
    line-height: 1.5rem
`
