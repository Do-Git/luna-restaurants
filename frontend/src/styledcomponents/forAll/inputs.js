import styled from "styled-components";

export const InputDiv = styled.div`
    display: flex;
    width: 350px;
    height: 30px;
    margin-top: 40px;
`
export const Input = styled.input`
    height: 52px;
    width: 340px;
    border: none;
    border-radius: 3px;
    border-bottom: 1px solid gray;
    background-color: white;
    ::placeholder {
        color: black;
        font-size: 1.2rem;
    }
`

export const FilterInput = styled.input`
    height: 40px;
    width: 70%;
    left: 0px;
    top: 0px;
    border-radius: 3px;
    border: solid 1px #EBEBEB;
`

export const TextInput = styled.input`
    height: 300px;
    width: 100%;
    left: 0px;
    top: 0px;
    border: solid 1px #EBEBEB;
`