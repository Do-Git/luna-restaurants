import { SideBarContainer,
         UserImage,
         UserName,
         SideBarButton,
         EditPen,
         ChosenImage } from '../../../../styledcomponents/Profile.js';
import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const SideBar = (props) => {

    const dispatch = useDispatch();
    const firstName = useSelector(state => state.mixReducers.first_name);
    const profileImage = useSelector(state => state.mixReducers.profile_image);
    let selectInputImg = useRef('');

    const fileImgClick = (e) => {
        selectInputImg.click();
    }
    const imageInput = (e) => {
        props.setImage(e.target.files[0]);
        // dispatch({type: "PROFILE_IMAGE", payload: image});
    }


    return (
        <SideBarContainer>
            {props.image ? <ChosenImage src={ (window.URL || window.webkitURL).createObjectURL(props.image) } />
            :
            <UserImage/>
            }
            <EditPen id={ props.clickedIndex !== 3 ? "hide-pen" : null } >
                <button onClick={ fileImgClick }><i class="far fa-edit"></i></button>
                <input onChange={ imageInput } type="file" name="image" ref={input => selectInputImg = input} accept="image/png, image/jpeg" hidden="hidden" />
            </EditPen>
            <UserName>
                <p>{`${firstName}'s profile`}</p>
            </UserName>
            <SideBarButton primary={ props.clickedIndex === 0 ? true : false } >
                <button onClick={ () => props.setClickedIndex(0) } >
                    <p><i class="fas fa-star fa-2x"></i><span>Reviews</span></p>
                </button>
            </SideBarButton>
            <SideBarButton primary={ props.clickedIndex === 1 ? true : false } >
                <button onClick={ () => props.setClickedIndex(1) } >
                    <p><i class="fas fa-comment fa-2x"></i><span>Comments</span></p>
                </button>
            </SideBarButton>
            <SideBarButton primary={ props.clickedIndex === 2 ? true : false } >
                <button onClick={ () => props.setClickedIndex(2) } >
                    <p><i class="fas fa-store fa-2x"></i><span>Restaurants</span></p>
                </button>
            </SideBarButton>
            <SideBarButton primary={ props.clickedIndex === 3 ? true : false } >
                <button onClick={ () => props.setClickedIndex(3) } >
                    <p><i class="fas fa-pen fa-2x"></i><span>Edit profile</span></p>
                </button>
            </SideBarButton>
        </SideBarContainer>
    )
}

export default SideBar;