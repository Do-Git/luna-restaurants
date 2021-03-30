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
    ZipForm
} from "../../../../../../styledcomponents/profile/restaurants/CreateRestaurant/layout";
import {ButtonSearchbar} from "../../../../../../styledcomponents/forAll/buttons";

const CreateRestaurantForm = () => {
    return (
        <FormGridContainer>
            <BasicSpan>Basic</BasicSpan>
                <NameForm>
                    <InputLabel>Name *</InputLabel>
                    <InputBox/>
                </NameForm>
                <CategoryForm>
                    <InputLabel>Category *</InputLabel>
                    <InputBox />
                </CategoryForm>
                <CountryForm>
                    <InputLabel>Country *</InputLabel>
                    <InputBox />
                </CountryForm>
            <AddressSpan>Address</AddressSpan>
                <StreetForm>
                    <InputLabel>Street *</InputLabel>
                    <InputBox/>
                </StreetForm>
                <CityForm>
                    <InputLabel>City *</InputLabel>
                    <InputBox/>
                </CityForm>
                <ZipForm>
                    <InputLabel>Zip</InputLabel>
                    <InputBox/>
                </ZipForm>
            <ContactSpan>Contact</ContactSpan>
                <WebsiteForm>
                    <InputLabel>Website</InputLabel>
                    <InputBox/>
                </WebsiteForm>
                <PhoneForm>
                    <InputLabel>Phone *</InputLabel>
                    <InputBox/>
                </PhoneForm>
                <EmailForm>
                    <InputLabel>Email</InputLabel>
                    <InputBox/>
                </EmailForm>
            <DetailsSpan>Details</DetailsSpan>
                <OpeningHoursForm>
                    <InputLabel>Opening hours *</InputLabel>
                    <InputBox/>
                </OpeningHoursForm>
                <PriceForm>
                    <InputLabel>Price</InputLabel>
                    <InputBox/>
                </PriceForm>
                <ImageForm>
                    <InputLabel>Image</InputLabel>
                    <InputBox/>
                </ImageForm>
                <CreateButtonDiv>
                    <ButtonSearchbar>Create</ButtonSearchbar>
                </CreateButtonDiv>
        </FormGridContainer>
    )
}

export default CreateRestaurantForm