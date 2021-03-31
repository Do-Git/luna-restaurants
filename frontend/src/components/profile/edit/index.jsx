import { ReviewsContainer, InputContainer, EditForm, SubmitButton, DeleteButton, SubmitContainer } from '../../../styledcomponents/Profile.js';


const EditProfile = (props) => {
    return (
        <ReviewsContainer className={props.hide ? "hide" : null} >
            <h2>EDIT USER PROFILE</h2>
            <InputContainer>
                <EditForm>
                    <label htmlFor="username-input" id="username-label" >Username</label>
                    <input type="text" id="username-input" />
    
                    <label htmlFor="first-name-input" >First name</label>
                    <input type="text" id="first-name-input" />
    
                    <label htmlFor="last-name-input" >Last name</label>
                    <input type="text" id="last-name-input" />
    
                    <label htmlFor="email-input" >E-Mail</label>
                    <input type="email" id="email-input" />
    
                    <label htmlFor="location-input" >Location</label>
                    <input type="text" id="location-input" />
    
                    <label htmlFor="phone-input" >Phone</label>
                    <input type="tel" id="phone-input" />
    
                    <label htmlFor="love-input" >Things I love</label>
                    <input type="text" id="love-input" />
    
                    <label htmlFor="description-input" >Description</label>
                    <input type="text" id="description-input" />
                    
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