import styled from 'styled-components';

// Create Restaurant Body
export const CreateRestaurantContainer = styled.div`
    background-color: #F2F2F2;
    height: 200vh;
    position: absolute;
    top: 8vh;
    width: 100%;
    // text-align: center;
`

// Grid Layout
export const FormGridContainer = styled.form`
    display: grid;
    grid-template: repeat(4, 1fr 3fr) / repeat(3, 1fr);
    grid-column-gap: 3rem;
    width: 70%;
    margin: auto;
`

// Content

//Title
export const AllTitlesSpan = styled.span`
    font-weight: bold;
    color: #4C4C4C;
`

export const BasicSpan = styled(AllTitlesSpan)`
    grid-area: 1 / 1 / 2 / 2;
`

export const AddressSpan = styled(AllTitlesSpan)`
    grid-area: 3 / 1 / 4 / 2;
`

export const ContactSpan = styled(AllTitlesSpan)`
    grid-area: 5 / 1 / 6 / 2;
`

export const DetailsSpan = styled(AllTitlesSpan)`
    grid-area: 7 / 1 / 8 / 2;
`

//Input
export const InputLabel = styled.label`
    color: #979797;
    font-weight: bold;
`

export const InputBox = styled.input`
    border: solid 1px #EBEBEB;
`

const BaseFormDiv = styled.div`
display: flex;
flex-direction: column;
`

// Basic
export const NameForm = styled(BaseFormDiv)`
    grid-area: 2 / 1 / 3 / 2;
`

export const CategoryForm = styled(BaseFormDiv)`
    grid-area: 2 / 2 / 3 / 3;
`

export const CountryForm = styled(BaseFormDiv)`
    grid-area: 2 / 3 / 3 / 4;
`

// Address
export const StreetForm = styled(BaseFormDiv)`
    grid-area: 4 / 1 / 5 / 2;
`

export const CityForm = styled(BaseFormDiv)`
    grid-area: 4 / 2 / 5 / 3;
`

export const ZipForm = styled(BaseFormDiv)`
    grid-area: 4 / 3 / 5 / 4;
`

// Contact
export const WebsiteForm = styled(BaseFormDiv)`
    grid-area: 6 / 1 / 7 / 2;
`

export const PhoneForm = styled(BaseFormDiv)`
    grid-area: 6 / 2 / 7 / 3;
`

export const EmailForm = styled(BaseFormDiv)`
    grid-area: 6 / 3 / 7 /4;
`

//Details
export const OpeningHoursForm = styled(BaseFormDiv)`
    grid-area: 8 / 1 / 9 / 2;
`

export const PriceForm = styled(BaseFormDiv)`
    grid-area: 8 / 2 / 9 / 3;
`

export const ImageForm = styled(BaseFormDiv)`
    grid-area: 8 / 3 / 9 / 4;
`
