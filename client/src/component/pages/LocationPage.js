import React from 'react';
import Recommended from '../widgets/Recommended';
import LocationSuggestions from '../widgets/LocationSuggestions'
import { Container, Row, Col, CardColumns } from 'react-bootstrap';

const LocationPage = () =>{
    return (
        <Container>
            <Container>
                <Row className='mb-5' >
                    <CardColumns style={{height: '500px'}}className='col-4 overflow-scroll'>
                        <h1 className='mt-3'>Activities</h1>
                            <Recommended/>
                            <Recommended/>
                            <Recommended/>
                    </CardColumns>
                    <CardColumns  className=' col-4 overflow-auto'>
                        <h1 className='mt-3'>Food Spots</h1>
                        <Container style={{height: '500px'}}>
                        <Recommended/>
                        <Recommended/>
                        <Recommended/>
                        </Container>
                        
                    </CardColumns>
                    <CardColumns style={{height: '500px'}}className='col-4 overflow-auto'>
                        <h1 className='mt-3'>Landmarks</h1>
                        <Recommended/>
                        <Recommended/>
                        <Recommended/>
                    </CardColumns>
                </Row>
            </Container>

            <Container>
                <LocationSuggestions/>
            </Container>
        </Container>
        

    )

}

export default LocationPage;