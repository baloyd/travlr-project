import React from 'react';
import Recommended from '../widgets/Recommended';
import { Container, Row, CardColumns } from 'react-bootstrap';

const headerStyle = {
    color:'#EF7E56',
    textAlign:'center',
    width:'24rem',
    marginLeft:'25px'
}

const LocationPage = () =>{
    return (
        <Container>
            <Container>
                <Row className='mb-5'>
                <CardColumns className='col-xl-4 col-lg-10 col-sm-12'>
                        <h1 className='mt-3 bg-light' style={headerStyle}>Activities</h1>
                        <div style={{height: '500px'}} className='overflow-auto'>
                            
                            <Recommended/>
                            
                        </div>
                        
                    </CardColumns>
                    <CardColumns className='col-xl-4 col-lg-10 col-sm-12'>
                        <h1 className='mt-3 bg-light' style={headerStyle}>Food Spots</h1>
                        <div style={{height: '500px'}} className='overflow-auto'>
                            <Recommended/>
                            
                        </div>
                        
                    </CardColumns>
                    <CardColumns className='col-xl-4 col-lg-10 col-sm-12'>
                        <h1 className='mt-3 bg-light' style={headerStyle}>Landmarks</h1>
                        <div style={{height: '500px'}} className='overflow-auto'>
                            <Recommended/>
                            
                        </div>
                        
                    </CardColumns>
                </Row>
            </Container>


        </Container>
        

    )

}

export default LocationPage;