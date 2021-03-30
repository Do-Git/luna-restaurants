import styled from "styled-components";
import bannerImg from "../../../../assets/background/restaurant/DSC_0213.png"

//Banner

export const BannerDiv = styled.div`
    position: relative;
    top: 8vh;
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
    // padding: 0.5em 5em 0.5em 5em;
    
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

