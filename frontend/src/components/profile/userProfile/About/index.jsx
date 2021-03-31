import { AboutContainer } from '../../../../styledcomponents/Profile.js';
import { useSelector } from 'react-redux';

const About = () => {

    const dateJoined = useSelector(state => state.date_joined);
    const location = useSelector(state => state.location);
    const Description = useSelector(state => state.description);
    const thingsILove = useSelector(state => state.things_I_love);
    const firstName = useSelector(state => state.first_name);
    
    const monthNum = parseInt(dateJoined.slice(4, 6));
    const day = parseInt(dateJoined.slice(6, 8));
    const year = parseInt(dateJoined.slice(0, 4));

    const date = new Date(year, day, monthNum);
    const month = date.toLocaleString('default', {month: 'long'});


    return (
        <AboutContainer>
            <h2>{`ABOUT ${firstName.toUpperCase()}`}</h2>
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