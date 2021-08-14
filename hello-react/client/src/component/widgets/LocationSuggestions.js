import React from 'react';
import { Container, Button } from 'react-bootstrap';

const LocationSuggestions = ({city})=>{
    return (
        <Container fluid>
            {city.map((city, index)=>(
            <Button className="" key={`city ${index}`}>{city}</Button>))}
        </Container>
    )
    
}

export default LocationSuggestions;