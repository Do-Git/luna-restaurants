import React, { useState, useRef } from 'react';
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
    const [image, setImage] = useState(null);

    const createRestaurant = e => {
        e.preventDefault();
        let formData = new FormData()
        formData.append('name', name)
        formData.append('category', category)
        formData.append('country', country)
        formData.append('street', street)
        formData.append('city', city)
        formData.append('zip_code', zip)
        formData.append('website', website)
        formData.append('phone', phone)
        formData.append('email', email)
        formData.append('opening_hours', openingHours)
        formData.append('price_level', priceLevel)
        if(image){
            formData.append('image', image)
        }
        const url = "https://luna-sagittarius.propulsion-learn.ch/backend/api/restaurants/new/";
        const method = 'POST';
        // const body = {
        //     name: name,
        //     categories: category,
        //     country: country,
        //     street: street,
        //     city: city,
        //     zip_code: zip,
        //     website: website,
        //     phone: phone,
        //     email: email,
        //     opening_hours: openingHours,
        //     price_level: priceLevel,
        //     image: image
        // };
        const headers = new Headers({
            'Content-Type': 'multipart/form-data; boundary=--',
            'Authorization': `Bearer ${token}`
        });
        const config = {
            method: method,
            headers: headers,
            body: formData
        };
        fetch(url, config)
        .then(res => res.status === 201 ? res.json() : null )
        .then(data => {
            console.log("ok")
            console.log(data);
            // dispatch({type: 'ADD_NEW_RESTAURANT', payload: data.id});
            history.push(`/restaurant-page/${data.id}`);
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
                        <option value='No category'>No Category</option>
                        <option value='Pub'>Pub</option>
                        <option value='Italian'>Italian</option>
                        <option value='Fast Food'>Fast Food</option>
                        <option value='Chinese'>Chinese</option>
                        <option value='Thai'>Thai</option>
                        <option value='Oriental'>Oriental</option>
                        <option value='Vegetarian'>Vegetarian</option>
                        <option value='Bar'>Bar</option>
                        <option value='Sea Food'>Sea Food</option>
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
                        <option value='No Information'>No Information</option>
                        <option value='Budget'>Budget</option>
                        <option value='Fair'>Fair</option>
                        <option value='Expensive'>Expensive</option>
                    </SelectBox>
                </PriceForm>
                <ImageForm>
                    <InputLabel for='image'>Image</InputLabel>
                    <InputBox id='image' type='file' 
                    onChange={event => setImage(event.target.files[0])}
                    accept="image/png, image/jpeg"/>
                </ImageForm>
                <CreateButtonDiv>
                    <ButtonSearchbar type='submit'>Create</ButtonSearchbar>
                </CreateButtonDiv>
        </FormGridContainer>
    )
}

export default CreateRestaurantForm