import styled from "styled-components";
import AsianFood from "../../../assets/background/restaurant/521724-istock-545286388.png";

export const HomeHeroWrapper = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${AsianFood});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: 30px;
`;

export const InputWrapper = styled.div`
  input {
    width: 530px;
    height: 55px;
    font-size: 20px;
    margin-top: 60px;
    line-height: 20px;
    color: #4c4c4c;
    padding-left: 20px;
    border-radius: 3px;
    border: none;
    margin-right: 26px;
  }
`;
