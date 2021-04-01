import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';

import {
  LunaLogoH1,
  NavRightWrapper,
  HeaderSpan,
  NavWrapper,
  NavTextDiv,
  ButtonWrapper,
} from "../../styledcomponents/headers/layout";
import {NavBarSignInButton, NavBarSignUpButton} from "../../styledcomponents/forAll/buttons";
import { useSelector, useDispatch } from 'react-redux';


const Navbar = (props) => {

    const dispatch = useDispatch();
    const userId = useSelector(state => state.id);
    const clickedIndex = useSelector(state => state.clicked_index);

    const logOut = () => {
        localStorage.removeItem('token')
    }

    useEffect(() => {
        if (!userId){
            const token = localStorage.getItem('token');
            const url = "https://luna-sagittarius.propulsion-learn.ch/backend/api/me/";
            const method = 'GET';
            const headers = new Headers({
                'Content-Type': 'application/json'
            });
            const config = {
                method: 'GET',
                headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
                })
            }
            fetch(url, config).then(res => res.json())
                .then(data => {
                    console.log(data);
                    dispatch({type: "ADD_ID", payload: data.id});
                    dispatch({type: "ADD_DATE", payload: data.date_joined});
                    dispatch({type: "ADD_FIRST_NAME", payload: data.first_name ? data.first_name : 'User'});
                    dispatch({type: "ADD_LOCATION", payload: data.location ? data.location : 'Alberobello, Italy'});
                    dispatch({type: "ADD_DESCRIPTION", payload: data.description ? data.description : 'Im professional photographerwith an eye for details in every thing I do in my live. Every time a pass by a nice restaurant i have to stop and take notes'});
                    dispatch({type: "ADD_LOVE", payload: data.things_I_love ? data.things_I_love : 'Hunting, Mountain climbing, Partying'});
                    dispatch({type: "ADD_EMAIL", payload: data.email});
                    dispatch({type: "ADD_LAST_NAME", payload: data.last_name});
                    dispatch({type: "ADD_PHONE", payload: data.phone});
                    dispatch({type: "ADD_USERNAME", payload: data.username});
                    dispatch({type: "ADD_RESTAURATS", payload: data.restaurants});
                })
        }
    }, []);


    return (
        <NavWrapper>
            <LunaLogoH1>LUNA</LunaLogoH1>
            <NavRightWrapper>
                <NavTextDiv primary={ clickedIndex === 0 ? true : false } >
                    <Link to={'/'} onClick={ () => dispatch({type: "CLICKED", payload: 0}) } >
                        <HeaderSpan>Home</HeaderSpan>
                    </Link>
                </NavTextDiv>
                <NavTextDiv primary={ clickedIndex === 1 ? true : false } >
                    <Link to={'/restaurants/'} onClick={ () => dispatch({type: "CLICKED", payload: 1}) } >
                        <HeaderSpan>Search</HeaderSpan>
                    </Link>
                </NavTextDiv>
                <NavTextDiv primary={ clickedIndex === 2 ? true : false } >
                    <Link to={'/profile/'} onClick={ () => dispatch({type: "CLICKED", payload: 2}) } >
                        <HeaderSpan>Profile</HeaderSpan>
                    </Link>
                </NavTextDiv>
                <ButtonWrapper>
                    <Link to={'/sign-up'}>
                        <NavBarSignUpButton>SIGNUP</NavBarSignUpButton>
                    </Link>
                    {/* <Link to={'/sign-in'}> */}
                    <Link to={(localStorage.getItem('token')) ? '/' : "/sign-in"}>
                    <NavBarSignInButton onClick={logOut}>{(localStorage.getItem('token')) ? 'LOGOUT' : "LOGIN"}</NavBarSignInButton>
                    </Link>
                </ButtonWrapper>
            </NavRightWrapper>
        </NavWrapper>
  );
};

export default Navbar;
