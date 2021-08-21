import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

// Stylings
const locationStyle = {
    background: '#DED5C4',
    borderRadius: '15px',
}
const textColor = {
    color: '#305973',
    fontWeight: 'bold'
}
const orangeButtonStyle = {
    background: '#EF7E56',
    textColor: '#F9F9F9',
    border: 'none',
    borderRadius: '15px',
    margin: '10px',
}
const blueButtonStyle = {
    background: '#305973',
    textColor: '#F9F9F9',
    border: 'none',
    borderRadius: '15px',
    margin: '10px',
}

const LocationSuggestions = ({ states = ["Florida", "New York", "California"], cities = ["Miami", "miami"] }) => {


    //Handles toggle effect on buttons
    const [isToggled, setIsToggled] = useState(false);
    const handleToggle = () => setIsToggled(!isToggled);

    return (
        <Container fluid>
            <Container className='col-md-6' style={locationStyle}>
                {/* State Div Buttons */}
                <div className='py-3' style={textColor}>


                    <h3>States:</h3>
                    {states && states.map((state, index) => (
                        <Button
                            onClick={handleToggle}
                            style={isToggled === false ? orangeButtonStyle : blueButtonStyle}
                            key={`state-${index}`} size='lg'>{state}</Button>
                    ))}

                </div>
                {/* City Div Buttons */}
                <div className='pb-3' style={textColor}>

                    <h3>Cities:</h3>
                    {cities && cities.map((city, index) => (
                        <Button
                            onClick={handleToggle}
                            style={isToggled === false ? orangeButtonStyle : blueButtonStyle}
                            key={`cities-${index}`}
                            size='lg'>{city}</Button>
                    ))}

                </div>


            </Container>
        </Container>
    )

}

export default LocationSuggestions;


//Have to still test if button functionality works after queries run