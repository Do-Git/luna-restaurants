import {RightSideDetailsContainer} from "../../../../../../styledcomponents/search/restaurants/restaurantPage/layout";
import React, {useState, useEffect} from 'react'; 
import {Link, useParams} from 'react-router-dom'
import {BlackSpan} from "../../../../../../styledcomponents/forAll/text";
import {OrangeSmallButton} from "../../../../../../styledcomponents/forAll/buttons";
import {FlexSpaceBetweenDiv} from "../../../../../../styledcomponents/forAll/layout";
import { CommentInput, HoursPriceInput } from "../../../../../../styledcomponents/forAll/inputs";
import { StarsReviewRestaurantPageContainer } from "../../../../../home/RestaurantList/RestaurantCard/style";

export const RightSideInfo = (props) => {
    
    const { id } = useParams();
    const [editing, setEditing] = useState(false);
    const [openingHours, setOpeningHours] = useState(props.opening_hours);
    const [priceLevel, setPriceLevel] = useState(props.price_level);
    const token = localStorage.getItem('token');

    const toggleEditing = () => {
        setEditing(!editing);
    }

    useEffect( () => {
        setOpeningHours(props.opening_hours);
        setPriceLevel(props.price_level);
    }, [props.opening_hours, props.price_level])

    const submitHandler = (e) => {
        
        e.preventDefault()
        
        const url = `https://luna-sagittarius.propulsion-learn.ch/backend/api/restaurants/${id}/`;     
        const method = 'PATCH';
        const body = {
            opening_hours: openingHours,
            price_level: priceLevel
        }
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });
        const config = {
            method: method,
            headers: headers,
            body: JSON.stringify(body)
        };
        fetch(url, config)
        .then( res => res.status === 200 ? res.json() : null )
        .then(data => {
            console.log("PATCH ok, in useEffect, data ->",data);
        });
    } 

    return (
        <RightSideDetailsContainer>
            {editing ? 
                <form onSubmit={submitHandler}>
                    <div>
                        <i className="far fa-clock"></i>
                        <HoursPriceInput type="text" placeholder="Opening Hours" value={openingHours} onChange={event => setOpeningHours(event.target.value)}/>
                    </div>
                    <div>
                        <i className="fas fa-money-check-alt"></i>
                        <HoursPriceInput type="text" placeholder="Price Level" value={priceLevel} onChange={event => setPriceLevel(event.target.value)}/>
                    </div>
                    <FlexSpaceBetweenDiv>
                        <Link to={`/restaurants/review/${id}`}><OrangeSmallButton>WRITE A REVIEW</OrangeSmallButton></Link>
                        <OrangeSmallButton type='submit' onClick={toggleEditing}>SAVE</OrangeSmallButton>
                    </FlexSpaceBetweenDiv>
                </form>    
                :
                <>
                    <div>
                        <i className="far fa-clock"></i>
                        <BlackSpan>{openingHours}</BlackSpan>
                    </div>
                    <div>
                        <i className="fas fa-money-check-alt"></i>
                        <BlackSpan>Price level: {priceLevel}</BlackSpan>
                    </div>
                    <FlexSpaceBetweenDiv>
                        <Link to={`/restaurants/review/${id}`}><OrangeSmallButton>WRITE A REVIEW</OrangeSmallButton></Link>
                        <OrangeSmallButton onClick={toggleEditing}>EDIT DATA</OrangeSmallButton>
                    </FlexSpaceBetweenDiv>
                </>
            }
        </RightSideDetailsContainer>
    )

}

export default RightSideInfo