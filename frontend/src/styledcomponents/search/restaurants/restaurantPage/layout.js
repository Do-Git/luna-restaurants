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
    min-height: 400px;
    width: 100%;
    height: 35vh;
    background-image: url(${bannerImg});
    background-repeat: no-repeat;
    background-size: cover;
`

export const BannerDivSmall = styled.div`
    position: relative;
    top: 8vh;
    min-width: 880px;
    width: 100%;
    height: 20vh;
    background-image: url(${bannerImg});
    background-repeat: no-repeat;
    background-size: cover;
`

export const BannerGrayLayerSmall = styled.div`
    position: absolute;
    width: 100%;
    height: 94%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 2;
    min-width: 880px;
    padding-top: 1rem;
    #stars-container, .title {
        margin-left: 10%;
        margin-top: 1.5rem;
    }
`

export const BannerGrayLayer = styled.div`
    position: absolute;
    width: 100%;
    height: 50%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 2;
    min-width: 880px;
    padding-top: 1rem;
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
    top: 5vh;
    right: 7%;
    width: 20%;
    min-width: 260px;
    min-height: 270px;
    height: 50%;
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
export const ReviewCardContainer2 = styled.div`
    background: #F2F2F2;
    height: 73vh;
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

export const ReviewCardCenter = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: solid 1px #EBEBEB;
    padding-right: 1rem;
    width: 832px;
    height: 421px;
`

export const ReviewCardFirst = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 60%;
    height: 100px;
    white-space: nowrap;
    span{
        font-family: Helvetica;
        font-size: 20px;
        font-style: normal;
        font-weight: 300; 
        letter-spacing: 0px;
        text-align: center;
    }
`
export const ReviewCardSecond = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100px;
    span{
        font-family: Helvetica;
        font-size: 20px;
        font-style: normal;
        font-weight: 300; 
        letter-spacing: 0px;
        text-align: center;
    }
    p{
        font-family: Helvetica;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 28px;
        color: #B00000;
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
export const TextWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`
