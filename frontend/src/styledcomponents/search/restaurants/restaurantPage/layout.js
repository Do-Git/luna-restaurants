import styled from "styled-components";
import bannerImg from "../../../../assets/background/restaurant/DSC_0213.png"

export const RestaurantPageContainer = styled.div`
    min-width: 870px;
`

//Banner

export const BannerDiv = styled.div`
    position: relative;
    top: 8vh;
    min-width: 880px;
    width: 100%;
    height: 42vh;
    background-image: url(${bannerImg});
    background-repeat: no-repeat;
    background-size: cover;
`

export const BannerGrayLayer = styled.div`
    position: absolute;
    top: 8vh;
    width: 100%;
    height: 20vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 2;
    min-width: 880px;
    #stars-container, .title {
        margin-left: 10%;
        margin-top: 1.5rem;
    }
`

export const BannerBackground = () => {
    return (
        <>
            <BannerGrayLayer></BannerGrayLayer>
            <BannerDiv></BannerDiv>
        </>
    )
}

//Map

export const MapDiv = styled.div`
    position: absolute;
    top: 11vh;
    right: 7%;
    width: 20%;
    min-width: 260px;
    min-height: 325px;
    height: 30vh;
    background: white;
    z-index: 3;
    i {
        padding-left: 2rem;
    }
`

export const MapImage = styled.img`
    height: 15vh;
    width: 100%;
    margin-bottom: 1rem;
`


// Reviews

// Right side details
export const RightSideDetailsContainer = styled.div`
    position: relative;
    top: 10vh;
    right: 20%;
    width:30%;
    right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #F5F5F5;
    
    div {
        margin-bottom: 1rem;
    }
    
    span {
        margin-left: 1rem;
    }
`

//Review card

export const AllReviewCardsDiv = styled.div`
    margin-top: 10vh;
    margin-right: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 45%;
`

export const ReviewCardContainer = styled.div`
    background: #FFFFFF;
    margin-top: 1rem;
    margin-bottom: 1rem;
`

export const ReviewCardTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px #EBEBEB;
    padding-right: 1rem;
    img {
        width: 120px;
        height: 80px;
        overflow: hidden;
    }
`

export const ReviewCardTopLeft = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 75%;
    white-space: nowrap;
    h3 {
        margin-left: 1rem;
        color: #E47D31;
        font-family: Helvetica;
        font-size: 20px;
        font-weight: 700;
        line-height: 23px;
        letter-spacing: 0px;
        text-align: left;
    }
    
    span{
        margin-left: 1rem;
        color: #4C4C4C;
        font-family: Helvetica;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: 0px;
        text-align: left;
    }
`

export const DateTimeContainer = styled.div`

    span {
        font-family: Helvetica;
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: 16px;
        text-align: right;
    }
`

export const ReviewContent = styled.div`
    padding: 1rem; 

    span {
        font-family: Helvetica;
        font-size: 16px;
        font-style: normal;
        font-weight: 300;
        line-height: 18px;
        text-align: left;
    }
`

export const FilterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`