import styled from "styled-components";
import coverphoto from '../assets/background/user/zuerich-skyline-dfed49e9-08c0-4115-bc68-b089bdbaf426.png';
import userimage from '../assets/background/user/IMG_6531.JPG.png';

export const RegistrationPageContainer = styled.section`
    width: 100%;
    background-color: #f2f2f2;
    height: 100vh;
    overflow: scroll;
    display: flex;
    flex-wrap: wrap;
`
export const ProfileBackgroundImage = styled.div`
    width: 100%;
    height: 20vh;
    background-image: url(${coverphoto});
    margin-top: 8vh;
    background-size: 100% 100%;
`
export const SideBarContainer = styled.article`
    width: 15vw;
    height: 60vh;
    position: absolute;
    top: 13vh;
    left: 10vw;
`
export const UserImage = styled.div`
    background-image: url(${userimage});
    width: 100%;
    height: 15vw;
`
export const ChosenImage = styled.img`
    width: 100%;
    height: 15vw;
`
export const EditPen = styled.div`
    background-color: rgba(79, 79, 79, 0.8);
    width: 100%;
    height: 15vw;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    button{
        color: white;
        font-size: 5rem;
        background-color: transparent;
        border: none;
        :hover{
            cursor: pointer;
        }
    }
`
export const UserName = styled.div`
    height: 8vh;
    width: 99.5%;
    background-color: #f2f2f2;
    border-right: 1px solid #bababa;
    border-bottom: 2px solid #bababa;
    display: flex;
    align-items: center;
    p {
        margin: 0;
        color: #595959;
    }
`
export const SideBarButton = styled.div`
    width: 99.5%;
    height: 6vh;
    border-right: 1px solid #bababa;
    border-bottom: 2px solid #bababa;
    background-color: #e47d31;
    button {
        height: 100%;
        width: ${props => props.primary ? "97%" : "100%" };
        margin-left: ${props => props.primary ? "3%" : "0" };
        border: none;
        background-color: ${props => props.primary ? "#d1d1d1" : "white" };
        display: flex;
        align-items: center;
        p {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            width: 100%;
            span {
                margin-left: 10%;
            }
        }
        :hover {
            width: 97%;
            margin-left: 3%;
            cursor: pointer;
        }
    }
    
`
export const ReviewsContainer = styled.article`
    margin-left: 24.9vw;
    width: 45vw;
    margin-bottom: 20vh;
    h2 {
        margin: 0;
        background-color: white;
        height: 8vh;
        padding-left: 2%;
        display: flex;
        align-items: center;
    }
`
export const ReviewCard = styled.div`
    width: 100%;
    background-color: white;
    article {
        width: 100%;
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        h3 {
            padding-left: 2%;
            margin-top: 3vh;
            margin-bottom: 1vh;
        }
        span {
            padding-right: 2%;
            color: black;
            font-size: 0.9rem;
        }
    }
    div {
        width: 50%;
        background-color: white;
        padding-left: 1.5%;
        margin-bottom: 1vh;
    }
    p {
        margin: 0;
        margin-left: 2%;
        margin-right: 2%;
        border-bottom: 1px solid #bababa;
        padding-bottom: 3vh;
    }
`
export const AboutContainer = styled.article`
    width: 27.5vw;
    h2 {
        margin: 0;
        margin-top: 2.5vh;
        padding-left: 5%;
        margin-bottom: 5vh;
    }
    h3 {
        padding: 0;
        padding-left: 5%;
        margin: 0;
    }
    p {
        padding: 0;
        margin: 1vh 0vh 2vh 0vh;
        padding-left: 5%;
    }
`
export const InputContainer = styled.div`
    width: 100%;
    background-color: white;
`
export const EditForm = styled.form`
    display: flex;
    flex-direction: column;
    label {
        font-size: 1.3rem;
        margin-left: 2%;
        margin-bottom: 1vh;
    }
    input {
        margin-left: 2%;
        height: 4vh;
        margin-bottom: 3vh;
        width: 50%;
        border: 2px solid gray;
        border-radius: 0.3rem;
        font-size: 1.5rem;
        color: #3b3b3b;
        ::placeholder{
            font-size: 1.3rem;
            color: #999999;
        }
        :focus {
            border-color: blue;
        }
    }
    textarea {
        margin-left: 2%;
        margin-bottom: 3vh;
        border: 2px solid gray;
        border-radius: 0.3rem;
        outline: none;
        width: 70%;
        font-size: 1.5rem;
        color: #3b3b3b;
        ::placeholder{
            font-size: 1.3rem;
            color: #999999;
        }
        :focus {
            border-color: blue;
        }
    }
`
export const SubmitButton = styled.input`
    background-color: #e47d31;
    :hover{
        cursor: pointer;
    }
`
export const DeleteButton = styled.button`
    background-color: white;
    :hover{
        cursor: pointer;
    }
`
export const SubmitContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
export const CreateButton = styled.button`
    background-color: #e47d31;
    color: white;
    width: 10rem;
    height: 3rem;
    border: none;
    border-radius: 3rem;
    font-size: 1.2rem;
    margin: 5vh auto 10vh 38%;
    :hover{
        cursor: pointer;
    }
`
export const RestaurantContainer = styled.section`
    width: 100%;
    h3{
        margin: 0;
        margin-bottom: 2vh;
        margin-left: 2%;
    }
`