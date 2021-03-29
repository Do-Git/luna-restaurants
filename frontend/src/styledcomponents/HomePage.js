import styled from "styled-components";

export const LandingPageContainer = styled.div`
  align-self: flex-start;
  background: #f8f8f8;
`;

export const BestRatedWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 44px;
`;

export const CardWrapper = styled.div`
  width: 1170px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserAccessTitle = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-transform: uppercase;
  color: #4c4c4c;
`;

export const UserAccessContentContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 50px;
`;

export const UserAccessTitleInnerWrapper = styled.div`
  height: 46px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
`;

export const OrangeUnderline = styled.div`
  height: 2px; // was 52 px, unified it to 50
  width: 265px;
  border: 1px solid #e47d31;
  background-color: #e47d31;
`;

export const UserAccessTitleWrapper = (props) => {
  return (
    <>
      <UserAccessTitleInnerWrapper>
        <UserAccessTitle>{props.titletext}</UserAccessTitle>
        <OrangeUnderline />
      </UserAccessTitleInnerWrapper>
    </>
  );
};
