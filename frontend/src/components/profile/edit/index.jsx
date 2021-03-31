import {ReviewsContainer,
        InputContainer,
        EditForm,
        SubmitButton,
        DeleteButton,
        SubmitContainer }
        from '../../../styledcomponents/Profile.js';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';


const EditProfile = (props) => {

    const dispatch = useDispatch();

    const location = useSelector(state => state.location);
    const description = useSelector(state => state.description);
    const thingsILove = useSelector(state => state.things_I_love);
    const firstName = useSelector(state => state.first_name);
    const lastName = useSelector(state => state.last_name);
    const username = useSelector(state => state.user_name);
    const email = useSelector(state => state.email);
    const phone = useSelector(state => state.phone);

    const [emailInput, setEmail] = useState(email);
    const [firstNameInput, setFirstName] = useState();
    const [lastNameInput, setLastName] = useState();
    const [usernameInput, setUserName] = useState(username);
    const [locationInput, setLocation] = useState();
    const [phoneInput, setPhone] = useState();
    const [loveInput, setLove] = useState();
    const [descriptionInput, setDescription] = useState();

    const editAccount = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const url = "https://luna-sagittarius.propulsion-learn.ch/backend/api/me/";
        const method = 'PATCH';

        const headers = new Headers({
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        });
        const body = {
            email: emailInput,
            first_name: firstNameInput ? firstNameInput : firstName,
            last_name: lastNameInput ? lastNameInput : lastName,
            username: usernameInput,
            location: locationInput ? locationInput : location,
            phone: phoneInput ? phoneInput : phone,
            things_I_love: loveInput ? loveInput : thingsILove,
            description: descriptionInput ? descriptionInput : description
        };
        const config = {
            method: method,
            headers: headers,
            body: JSON.stringify(body)
        };
        fetch(url, config)
        .then(res => res.json())
        .then(data => {
        console.log(data);
        dispatch({type: "ADD_ID", payload: data.id});
        dispatch({type: "ADD_FIRST_NAME", payload: data.first_name ? data.first_name : 'User'});
        dispatch({type: "ADD_LOCATION", payload: data.location ? data.location : 'Alberobello, Italy'});
        dispatch({type: "ADD_DESCRIPTION", payload: data.description ? data.description : 'Im professional photographerwith an eye for details in every thing I do in my live. Every time a pass by a nice restaurant i have to stop and take notes'});
        dispatch({type: "ADD_LOVE", payload: data.things_I_love ? data.things_I_love : 'Hunting, Mountain climbing, Partying'});
        dispatch({type: "ADD_EMAIL", payload: data.email});
        dispatch({type: "ADD_LAST_NAME", payload: data.last_name});
        dispatch({type: "ADD_PHONE", payload: data.phone});
        dispatch({type: "ADD_USERNAME", payload: data.username});
        dispatch({type: "ADD_RESTAURATS", payload: data.restaurants});
        setFirstName('');
        setLastName('');
        setLocation('');
        setPhone('');
        setLove('');
        setDescription('');
        });
    }


    return (
        <ReviewsContainer className={props.hide ? "hide" : null} >
            <h2>EDIT USER PROFILE</h2>
            <InputContainer>
                <EditForm onSubmit={ editAccount }>
                    <label htmlFor="username-input" id="username-label" >Username</label>
                    <input value={ usernameInput } onChange={ event => setUserName(event.target.value)} type="text" id="username-input" placeholder={username} />
    
                    <label htmlFor="first-name-input" >First name</label>
                    <input value={ firstNameInput } onChange={ event => setFirstName(event.target.value)} type="text" id="first-name-input" placeholder={firstName} />
    
                    <label htmlFor="last-name-input" >Last name</label>
                    <input value={ lastNameInput } onChange={ event => setLastName(event.target.value)} type="text" id="last-name-input" placeholder={lastName} />
    
                    <label htmlFor="email-input" >E-Mail</label>
                    <input value={ emailInput } onChange={ event => setEmail(event.target.value)} type="email" id="email-input" placeholder={email} />
    
                    <label htmlFor="location-input" >Location</label>
                    <input value={ locationInput } onChange={ event => setLocation(event.target.value)} type="text" id="location-input" placeholder={location} />
    
                    <label htmlFor="phone-input" >Phone</label>
                    <input value={ phoneInput } onChange={ event => setPhone(event.target.value)} type="tel" id="phone-input" placeholder={phone} />
    
                    <label htmlFor="love-input" >Things I love</label>
                    <textarea value={ loveInput } onChange={ event => setLove(event.target.value)} type="text" id="love-input" placeholder={thingsILove} rows="4" />
    
                    <label htmlFor="description-input" >Description</label>
                    <textarea value={ descriptionInput } onChange={ event => setDescription(event.target.value)} type="text" id="description-input" placeholder={description} rows="6" />
                    
                    <SubmitContainer>
                        <SubmitButton id="submit-input" type="submit" />
                        <DeleteButton id="delete-input" type="button">Delete account</DeleteButton>
                    </SubmitContainer>
                </EditForm>
            </InputContainer>
        </ReviewsContainer>
    )
}

export default EditProfile