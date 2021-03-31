import {ReviewsContainer,
        InputContainer,
        EditForm,
        SubmitButton,
        DeleteButton,
        SubmitContainer }
        from '../../../styledcomponents/Profile.js';
import { useSelector } from 'react-redux';


const EditProfile = (props) => {

    const location = useSelector(state => state.location);
    const description = useSelector(state => state.description);
    const thingsILove = useSelector(state => state.things_I_love);
    const firstName = useSelector(state => state.first_name);
    const lastName = useSelector(state => state.last_name);
    const username = useSelector(state => state.user_name);
    const email = useSelector(state => state.email);
    const phone = useSelector(state => state.phone);

    return (
        <ReviewsContainer className={props.hide ? "hide" : null} >
            <h2>EDIT USER PROFILE</h2>
            <InputContainer>
                <EditForm>
                    <label htmlFor="username-input" id="username-label" >Username</label>
                    <input type="text" id="username-input" placeholder={username} />
    
                    <label htmlFor="first-name-input" >First name</label>
                    <input type="text" id="first-name-input" placeholder={firstName} />
    
                    <label htmlFor="last-name-input" >Last name</label>
                    <input type="text" id="last-name-input" placeholder={lastName} />
    
                    <label htmlFor="email-input" >E-Mail</label>
                    <input type="email" id="email-input" placeholder={email} />
    
                    <label htmlFor="location-input" >Location</label>
                    <input type="text" id="location-input" placeholder={location} />
    
                    <label htmlFor="phone-input" >Phone</label>
                    <input type="tel" id="phone-input" placeholder={phone} />
    
                    <label htmlFor="love-input" >Things I love</label>
                    <textarea type="text" id="love-input" placeholder={thingsILove} rows="4" />
    
                    <label htmlFor="description-input" >Description</label>
                    <textarea type="text" id="description-input" placeholder={description} rows="6" />
                    
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