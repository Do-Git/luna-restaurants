import styled from 'styled-components';

//Nav

export const NavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 550px;
    // position: fixed;
`

export const NavRightWrapper = styled.div`
    display: flex;
    min-width: 40%;
    justify-content: space-around;
    align-items: center;
`

export const NavTextDiv = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    :hover{
        border-bottom: solid #E47D31;
        cursor: pointer;
        font-weight: bold;
    }
`

export const ButtonWrapper = styled.div`
    white-space: nowrap;
`

// Footer
export const FooterWrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
`

export const FooterFlexWrapper = styled(NavWrapper)`
    justify-content: space-between;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    border-bottom: solid 2px #f2f2f2;
`

export const FooterLeftWrapper = styled(NavRightWrapper)`
`

export const SocialMediaWrapper = styled.div`
    min-width: 180px;
    display: flex;
    justify-content: space-around;
    width: 15%;
`

//TEXT and FONT
export const LunaLogoH1 = styled.h1`
    font-family: papyrus, fantasy;
    font-size: 2rem;
    padding-left: 30px;
`

export const HeaderSpan = styled.span`
    vertical-align: middle;
    :hover{
        cursor: pointer;
        // color: #E47D31;
        // border-bottom: solid black;
    }
`

export const CopyRightSpan = styled.span`
    font-size: 0.8rem;
    margin-left: 1rem;
`
