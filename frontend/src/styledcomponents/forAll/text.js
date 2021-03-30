import styled from "styled-components";


export const WhiteH1 = styled.h1`
    color: white;
    font-family: Helvetica;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: 0px;
    text-align: left;
`

export const WhiteSpan = styled.span`
    font-size: 24px;
    font-weight: 300;
    line-height: 28px;
    color: white;
    font-family: Helvetica;
    font-style: normal;
    letter-spacing: 0px;
    text-align: left;
`
export const WhiteReviewCountSpan = styled(WhiteSpan)`
    font-size: 20px;
    text-align: center;
    margin-top: 1rem;
    margin-left: 2rem;
`

export const MapText = styled(WhiteReviewCountSpan)`
    font-weight: 400;
    line-height: 2rem;
    color: #4C4C4C;
`

