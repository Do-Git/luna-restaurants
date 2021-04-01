import styled from "styled-components";

export const BigButton = styled.button`
  background-color: #e47d31;
  border: none;
  border-radius: 28px;
  width: 200px;
  height: 56px;
  color: white;
  font-size: 20px;
  margin-top: 150px;
  :hover {
    cursor: pointer;
  }
`;
export const ButtonSearchbar = styled.button`
  height: 58px;
  width: 200px;
  border-radius: 28px;
  border: none;
  background-color: #e47d31;
  cursor: pointer;
  font-family: Helvetica, Arial, serif;
  font-size: 20px;
  line-height: 23px;
  margin-top: 65px;
  color: #ffffff;
  &:hover {
    background-color: #e87520;
  }
  &:focus {
    outline: none;
  }

  a {
    font-family: Helvetica, Arial, serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    color: #ffffff;
  }
`;

// export const OrangeBigButton = styled(ButtonSearchbar)`
//   margin-top: 30px;
// `

export const OrangeSmallButton = styled(ButtonSearchbar)`
    height: 40px;
    width: 170px;
    font-size: 16px;
    font-weight: 400px;
    font-family: Helvetica;
    line-height: 18px;
    text-align: center;
    // margin-left: 1rem;
    white-space: nowrap;
`

export const OrangeSmallSubmitButton = styled(ButtonSearchbar)`
    height: 57px;
    width: 200px;
    border-radius: 28px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
`

export const OrangeMiniButton = styled(OrangeSmallButton)`
    width: 120px;
    margin-left: 1rem;
`

export const OrangeSuperMiniButton = styled(OrangeSmallButton)`
    min-width: 90px;
    width: 15%;
    min-height: 2rem;
    height: 70%;
`

export const NavBarButton = styled.button`
  background-color: #e47d31;
  color: white;
  width: 6rem;
  height: 2.5rem;
  border: none;
  margin: 1px;
  :hover {
    cursor: pointer;
    background-color: #e87520;
  }
`;
export const NavBarSignUpButton = styled(NavBarButton)`
  border-radius: 25px 0 0 25px;
`;

export const NavBarSignInButton = styled(NavBarButton)`
  border-radius: 0 25px 25px 0;
`;

export const SocialMediaIcon = styled.div`
  border-radius: 50%;
  border: solid 1.8px #979797;
  color: #979797;
  width: 1.5rem;
  height: 1.5rem;
  text-align: center;
  vertical-align: middle;
  line-height: 1.5rem;
`;

export const GrayLikeButton = styled(NavBarSignUpButton)`
  background-color: #919191;
  height: 33px;
`;

export const GrayCommentButton = styled(NavBarSignInButton)`
  background-color: #919191;
  height: 33px;
`;
