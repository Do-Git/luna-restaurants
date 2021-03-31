import styled from "styled-components";

//Nav

export const NavWrapper = styled.div`
  width: 100%;
  min-width: 550px;
  height: 55px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  border-bottom: solid 2px #f2f2f2;
  background-color: white;
  z-index: 999;
`;

export const NavRightWrapper = styled.div`
  display: flex;
  min-width: 40%;
  justify-content: space-around;
  align-items: center;
`;

export const NavTextDiv = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  :hover {
    border-bottom: solid #e47d31;
    cursor: pointer;
    font-weight: bold;
  }
`;

export const ButtonWrapper = styled.div`
  white-space: nowrap;
`;

// Footer
export const FooterWrapper = styled.div`
  width: 100%;
  height: 91px;
  background-color: white;
`;

export const FooterFlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 550px;
  justify-content: space-between;
  padding-bottom: 0.2rem;
  padding-top: 0.2rem;
  border-bottom: solid 2px #f2f2f2;
  align-items: center;
  padding: 0.7rem 0 0.7rem 0;
`;

export const FooterLeftWrapper = styled(NavRightWrapper)``;

export const SocialMediaWrapper = styled.div`
  min-width: 180px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 15%;
`;

//TEXT and FONT
export const LunaLogoH1 = styled.h1`
  font-family: papyrus, fantasy;
  font-size: 2rem;
  padding-left: 30px;
`;

export const HeaderSpan = styled.span`
  vertical-align: middle;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  :hover {
    cursor: pointer;
    // color: #E47D31;
    // border-bottom: solid black;
  }
`;

export const CopyRightSpan = styled.span`
  font-size: 0.8rem;
  margin-left: 1rem;
`;
