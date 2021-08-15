import React, { useState } from  'react'
import { Form, Row, Col, FloatingLabel, Button, Container } from 'react-bootstrap';
// import { useMutation } from '@apollo/client';

const formStyle = {
    background: '#DED5C4',
    borderRadius: '15px'
}

const textColor = {
    color: '#305973'
}

const CreateRec = ()=>{
    return(
        <Container>
            <Form className='p-3' style={formStyle}>
                <FloatingLabel
                    label="Name of Recommended Place"
                    className="mb-3"
                    style={textColor}
                >
                    <Form.Control type="text" placeholder="Name of Recommended Place" />
                </FloatingLabel>
                <Row className="g-2 mb-3">
                    <Col md>
                        <FloatingLabel label="City Name" style={textColor}>
                        <Form.Control type="text" placeholder="City Name" />
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel label="Select Type" style={textColor}>
                            <Form.Select>
                                <option value="Activity">Activity</option>
                                <option value="Restaurant">Restaurant</option>
                                <option value="Landmark">Landmark</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Form.Group>
                    <FloatingLabel label="Comments about Recommended" style={textColor}>
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                    />
                    </FloatingLabel>
                </Form.Group>
            </Form>
        </Container>
    )
}

export default CreateRec;