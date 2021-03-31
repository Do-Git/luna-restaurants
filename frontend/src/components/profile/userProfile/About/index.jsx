import { AboutContainer } from '../../../../styledcomponents/Profile.js';
import { useSelector } from 'react-redux';

const About = () => {

    const dateJoined = useSelector(state => state.date_joined);
    const location = useSelector(state => state.location);
    const Description = useSelector(state => state.description);
    const thingsILove = useSelector(state => state.things_I_love);
    const firstName = useSelector(state => state.first_name);
    const lastName = useSelector(state => state.last_name);
    const phone = useSelector(state => state.phone);
    
    const monthNum = dateJoined ? parseInt(dateJoined.slice(4, 6)) : 0;
    const day = dateJoined ? parseInt(dateJoined.slice(6, 8)) : 0;
    const year = dateJoined ? parseInt(dateJoined.slice(0, 4)) : 0;

    const date = monthNum ? new Date(year, day, monthNum) : 0;
    const month = date.toLocaleString('default', {month: 'long'});


    return (
        <AboutContainer>
            <h2>{`ABOUT ${firstName.toUpperCase()}`}</h2>
            <h3>Name</h3>
            <p>{`${firstName} ${lastName}`}</p>
            <h3>Phone number</h3>
            <p>{phone}</p>
            <h3>Location</h3>
            <p>{ location }</p>
            <h3>Luna member since</h3>
            <p>{ `${month} ${day}, ${year}` }</p>
            <h3>Things I love</h3>
            <p>{ thingsILove }</p>
            <h3>Description</h3>
            <p>{ Description }</p>
        </AboutContainer>
    )
}

export default About;