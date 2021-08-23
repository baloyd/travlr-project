import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { QUERY_POST} from '../../utils/queries';
import { useQuery } from '@apollo/client';

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

const LocationSuggestions =()=>{

    const { loading, data } = useQuery(QUERY_POST);
    console.log(data);
    const comments = data?.post || [];

    console.log(comments);
    

    //Handles toggle effect on buttons
    const [isToggled, setIsToggled] = useState(false);
    const handleToggle = () => {
        setIsToggled(!isToggled);
        window.location.assign('/LocationPage');
    }
    

    return (
        <Container fluid>
            <Container className='col-md-6' style={locationStyle}>
                {/* State Div Buttons */}
                {/* <div className='py-3' style={textColor}>
                    
                    <h5>States:</h5>
                    {!loading ? comments.map((comment)=>(
                        <Button size='sm'
                        onClick={handleToggle}
                        style={isToggled === false ? orangeButtonStyle : blueButtonStyle}  
                        size='lg'>{comment.state}</Button>
                    )) : (<div><h5>No States to choose from!</h5></div>)}
                    
                </div> */}

                {/* City Div Buttons */}
                <div className='pb-3' style={textColor}>

                    <h5>Cities:</h5>
                    {!loading ? (
                    <Button 
                    onClick={handleToggle}
                    style={isToggled === false ? orangeButtonStyle : blueButtonStyle}
                    size='lg'>Miami</Button>
                    ) : (<div><h5>No States to choose from!</h5></div>)}

                    {/* Dynamically Built, have to fix repeat states bug */}
                    {/* {!loading ? comments.map((comment)=>(
                    <Button 
                    onClick={handleToggle}
                    style={isToggled === false ? orangeButtonStyle : blueButtonStyle}
                    size='lg'>{comment.city}</Button>
                    )) : (<div><h5>No States to choose from!</h5></div>)}        */}
                    
                </div>

            </Container>
        </Container>
    )

}

export default LocationSuggestions;


//Have to still test if button functionality works after queries run