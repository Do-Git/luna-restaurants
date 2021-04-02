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
    padding-left: 1rem;
`

export const TextInput = styled.textarea`
    margin-top:120px;
    height: 220px;
    width: 100%;
    left: 0px;
    top: 0px;
    border: solid 3px #E3E3E3;
    padding: 15px;
    ::placeholder{
        font-family: Helvetica;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        color: #BBB7B7;
    }
`    

export const CommentInput = styled(FilterInput)`
    // margin-left: 1rem;
    width: 60%;
    height: 30px;
`

export const HoursPriceInput = styled(CommentInput)`
    height: 2rem;
    margin-left: 1rem;
    padding-left: 0.5rem;
`