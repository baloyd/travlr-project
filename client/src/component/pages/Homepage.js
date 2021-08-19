import React from 'react';
import {  Container } from 'react-bootstrap';
import CreateRec from '../widgets/CreateRec';
import LocationSuggestions from '../widgets/LocationSuggestions';


const Homepage = ()=>{
    return (
        <Container>
            <CreateRec />
            <LocationSuggestions />
        </Container>
    )
}

export default Homepage;