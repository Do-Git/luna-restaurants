import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

import {
    AddressSpan,
    BasicSpan,
    CategoryForm,
    CityForm,
    ContactSpan,
    CountryForm, CreateButtonDiv,
    DetailsSpan,
    EmailForm,
    FormGridContainer, ImageForm,
    InputBox,
    InputLabel,
    NameForm,
    OpeningHoursForm,
    PhoneForm,
    PriceForm,
    StreetForm,
    WebsiteForm,
    ZipForm,
    SelectBox
} from "../../../../../../styledcomponents/profile/restaurants/CreateRestaurant/layout";
import {ButtonSearchbar} from "../../../../../../styledcomponents/forAll/buttons";

const CreateRestaurantForm = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    // const token = useSelector( state => state.token )
    const token = localStorage.getItem('token');

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [website, setWebsite] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [openingHours, setOpeningHours] = useState('');
    const [priceLevel, setPriceLevel] = useState('');
    const [image, setImage] = useState('');

    const createRestaurant = e => {
        e.preventDefault();
        // const url = "https://luna-sagittarius.propulsion-learn.ch/backend/api/restaurants/new/";
        
        const url = "http://localhost:8000/backend/api/restaurants/new/"
        const method = 'POST';
        const body = {
            name: name,
            categories: category,
            country: country,
            street: street,
            city: city,
            zip_code: zip,
            website: website,
            phone: phone,
            email: email,
            opening_hours: openingHours,
            price_level: priceLevel,
            image: image
        };
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
        .then(res => res.status)
        .then(status => {
            if (status === 201){
                console.log("ok")
                // dispatch({type: 'ADD_RESTAURANT', payload: body});
                history.push("/");
            } else {
                console.log("response not ok");

                console.log("name", name);
                console.log("category", category)
                console.log("country", country)
                console.log("street", street)
                console.log("city", city)
                console.log("zip", zip)
                console.log("website", website)
                console.log("phone", phone)
                console.log("email", email)
                console.log("opening hours", openingHours)
                console.log("price", priceLevel)
                console.log("image", image)
            }
        });
    }

    return (
        <FormGridContainer onSubmit={createRestaurant}>
            <BasicSpan>Basic</BasicSpan>
                <NameForm>
                    <InputLabel for='name'>Name *</InputLabel>
                    <InputBox id='name' value={name} onChange={event => setName(event.target.value)} required/>
                </NameForm>
                <CategoryForm>
                    <InputLabel for='category'>Category *</InputLabel>
                    <SelectBox id='category' value={category} onChange={event => setCategory(event.target.value)} required>
                        <option value="" disabled selected>Select your option</option>
                        <option value='0'>No Category</option>
                        <option value='1'>Pub</option>
                        <option value='2'>Italian</option>
                        <option value='3'>Fast Food</option>
                        <option value='4'>Chinese</option>
                        <option value='5'>Thai</option>
                        <option value='6'>Oriental</option>
                        <option value='7'>Vegetarian</option>
                        <option value='8'>Bar</option>
                        <option value='9'>Sea Food</option>
                    </SelectBox>
                </CategoryForm>
                <CountryForm>
                    <InputLabel for='country'>Country *</InputLabel>
                    <InputBox id='country' value={country} onChange={event => setCountry(event.target.value)} required/>
                </CountryForm>
            <AddressSpan>Address</AddressSpan>
                <StreetForm>
                    <InputLabel for='street'>Street *</InputLabel>
                    <InputBox id='street' value={street} onChange={event => setStreet(event.target.value)} required/>
                </StreetForm>
                <CityForm>
                    <InputLabel for='city'>City *</InputLabel>
                    <InputBox id='city' value={city} onChange={event => setCity(event.target.value)} required/>
                </CityForm>
                <ZipForm>
                    <InputLabel for='zip'>Zip</InputLabel>
                    <InputBox id='zip' value={zip} onChange={event => setZip(event.target.value)} />
                </ZipForm>
            <ContactSpan>Contact</ContactSpan>
                <WebsiteForm>
                    <InputLabel for='website'>Website</InputLabel>
                    <InputBox id='website' value={website} onChange={event => setWebsite(event.target.value)} />
                </WebsiteForm>
                <PhoneForm>
                    <InputLabel for='phone'>Phone *</InputLabel>
                    <InputBox id='phone' value={phone} onChange={event => setPhone(event.target.value)} required/>
                </PhoneForm>
                <EmailForm>
                    <InputLabel for='email'>Email</InputLabel>
                    <InputBox id='email' value={email} onChange={event => setEmail(event.target.value)} />
                </EmailForm>
            <DetailsSpan>Details</DetailsSpan>
                <OpeningHoursForm>
                    <InputLabel for='opening_hours'>Opening hours *</InputLabel>
                    <InputBox id='opening_hours' value={openingHours} onChange={event => setOpeningHours(event.target.value)} required/>
                </OpeningHoursForm>
                <PriceForm>
                    <InputLabel for='price_level'>Price level *</InputLabel>
                    <SelectBox id='price_level' value={priceLevel} onChange={event => setPriceLevel(event.target.value)} required>
                        <option value="" disabled selected>Select your option</option>
                        <option value='0'>No Information</option>
                        <option value='1'>Budget</option>
                        <option value='2'>Fair</option>
                        <option value='3'>Expensive</option>
                    </SelectBox>
                </PriceForm>
                <ImageForm>
                    <InputLabel for='image'>Image</InputLabel>
                    <InputBox id='image' value={image} onChange={event => setImage(event.target.value)}/>
                </ImageForm>
                <CreateButtonDiv>
                    <ButtonSearchbar type='submit'>Create</ButtonSearchbar>
                </CreateButtonDiv>
        </FormGridContainer>
    )
}

export default CreateRestaurantForm