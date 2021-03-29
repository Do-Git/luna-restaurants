import styled from "styled-components";

export const TopBar = styled.div`
  background: #e47d31;
  height: 8px;
  width: 100%;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
`;

export const RestaurantMainContainer = styled.div`
  position: relative;
  width: 271px;
  height: 410px;
  background: white;
  margin-bottom: 50px;
  border-radius: 3px;
  border: 1px solid #ebebeb;
  cursor: pointer;

  &:hover ${TopBar} {
    height: 16px;
  }

  img {
    height: 283px;
    width: 100%;
    margin-top: 14px;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
  }
`;

export const RestaurantDetailsContainer = styled.div`
  height: 118px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 13px;
`;

export const RestaurantName = styled.p`
  height: 23px;
  margin-top: 11px;
  margin-bottom: 0px;

  font-size: 20px;
  font-family: Helvetica, serif;
  color: #4c4c4c;
  text-align: left;
`;

export const RestaurantAddress = styled.p`
  height: 21px;
  margin-top: 6px;
  margin-bottom: 5px;
  font-size: 18px;
  color: #4c4c4c;
  text-align: left;
  font-family: Helvetica, serif;
`;

export const StarsReviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 27px;
  font-size: 20px;
  p {
    margin-top: 24px;
    margin-right: 19px;
    font-family: Helvetica, serif;
    font-stretch: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 23px;
    color: #4c4c4c;
  }
  /* i {
    font-size: 27px;
  } */
`;
