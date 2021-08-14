import React from 'react';
import { Container, Button } from 'react-bootstrap';

const LocationSuggestions = ({city})=>{
    return (
        <Container fluid>
            <div>
                {city.map((city, index)=>(
                <Button className="" key={`city ${index}`}>{city}</Button>))}
            </div>
        </Container>
    )
    
}

export default LocationSuggestions;