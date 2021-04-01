import styled from "styled-components";

export const BodyWrapper = styled.div`
  min-height: calc(100vh - 146px); 
  /* 55px for nav bar and 91px for footer */
`

export const MiddleSection = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
`

export const H1 = styled.h1`
  font-size: 2rem;
  margin-top: 200px;
`

export const OrangeDiv = styled.div`
  width: 100px;
  border: 3px solid #e47d31;
`

export const TopDiv = styled.div`
  margin-top: 50px;
`

export const BottomDiv = styled.div`
    margin-top: 50px;
    flex-direction: column;
    align-items: flex-start;
`

export const FlexDiv = styled.div`
    display: flex;
`

export const FlexCenterDiv = styled(FlexDiv)`
    justify-content: center;
`

export const FlexSpaceBetweenDiv = styled(FlexDiv)`
    justify-content: space-between;
    padding: 1rem;
`

export const FlexSpaceAroundDiv = styled(FlexDiv)`
    justify-content: space-around;
    align-items: center;
`
