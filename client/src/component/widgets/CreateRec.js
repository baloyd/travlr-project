import React, { useState } from  'react'
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import Modal from './Modal';

// Stylings
const formStyle = {
    background: '#DED5C4',
    borderRadius: '15px',
    marginLeft:'auto',
    marginRight: 'auto'
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

const CreateRec = ()=>{
    const [validated, setValidated] = useState(false);
    const [formState, setFormState] = useState({
        recPlace: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        category: '',
        comment: ''
    });

    //Need to add graphql mutation name ---->ADD_FORM?
    //Also inMemoryCache? ex.20.components.thoughForm
    // const [addPost, { error }] = useMutation();


    //Handles form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        //Handles form validation
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);

        // try {
        //     const { data } = await addPost({
        //         variables: {
        //             ...
        //             formState },
        //     });

        //     console.log(data);

        // } catch(err) {
        //     console.log(err)
        // }

        setFormState({
            recPlace: '',
            street: '',
            city: '',
            state: '',
            zip: '',
            category: '',
            comment: ''
        })

    };

    // Handles changes to form
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({...formState, [name]: value});
    }
    

    return(
        <Container className='col-md-6'>
            <Form noValidate validated={validated} onSubmit={handleSubmit} className='p-3 mb-3' style={formStyle}>
            
                <Form.Group as={Col} className="mb-3">
                    <Form.Label style={textColor}>Name of Recommended Place</Form.Label>
                    <Form.Control
                        required
                        name='recPlace'
                        // value={formState.recPlace}
                        // onChange={handleChange}
                        type="text"
                        placeholder="Miami Beach"
                    />
                    <Form.Control.Feedback type="invalid">
                            Please provide a valid place to recommend.
                        </Form.Control.Feedback>
                </Form.Group>

                <Row className="g-2 mb-3">
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label style={textColor}>Street</Form.Label>
                        <Form.Control
                        required
                        name='street'
                        // value={formState.street}
                        // onChange={handleChange}
                        type="text"
                        placeholder="1001 Ocean Dr"
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid street address.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label style={textColor}>City</Form.Label>
                        <Form.Control 
                        name='city'
                        // value={formState.city}
                        // onChange={handleChange}
                        type="text" placeholder="Miami" 
                        required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="g-2 mb-3">
                    <Form.Group as={Col}>
                        <Form.Label style={textColor}>State</Form.Label>
                        <Form.Control 
                            name='state'
                            // value={formState.state}
                            // onChange={handleChange}
                            type="text" 
                            placeholder="FL" 
                            required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid state.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label style={textColor}>Zip Code</Form.Label>
                        <Form.Control 
                            name='zip'
                            // value={formState.zip}
                            // onChange={handleChange}
                            type="text" 
                            placeholder="33139" 
                            required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid zip code.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} required>
                        <Form.Label style={textColor}>Select Category</Form.Label>
                        <Form.Control 
                            required 
                            name='type'
                            // value={formState.category}
                            // onChange={handleChange}
                            as="select" 
                            type="select">
                                <option value="">Select Category</option>
                                <option value="Activity">Activity</option>
                                <option value="Restaurant">Restaurant</option>
                                <option value="Landmark">Landmark</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            Please choose a type.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Form.Group>
                    <Form.Label style={textColor}>Comments about Recommended</Form.Label>
                    <Form.Control
                        required
                        name='comment'
                        // value={formState.comment}
                        // onChange={handleChange}
                        as="textarea"
                        placeholder="Amazing beach, great restaurants, cool shops and overall great place to vacation! Will definitely be coming back!"
                        style={{ height: '100px' }}
                    />
                    <Form.Control.Feedback type="invalid">
                            Please write a comment about your recommendation.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='d-flex justify-content-end'>
                    <Button type="submit" style={validated === false ? orangeButtonStyle : blueButtonStyle}>Submit</Button>
                </Form.Group>
            </Form>
        </Container>
    )
}

export default CreateRec;

//Still have to set the correct mutation