import React, { useState } from  'react'
import { Form, Button } from 'react-bootstrap';
import { useMutation } from '@apollo/client';


const CreateRec = ()=>{
    const [userCreateRec, setUserCreatRec] = useState({nameOfRec:'',nameOfActivity:'', location:'', comment:''})
    const [validated, setValidated] = useState(false);

    const[addRec, { error }]=useMutation(ADD_REC);

    const handleInputChange = (e)=>{
        const {name, value}= e.target;
        setUserCreatRec({...userCreateRec,[name]:value});
    }

    const handleFormSubmit = async (e)=>{
        e.preventDefault();

        const form = e.currentTarget;
            if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        setValidated(true);

        try{
            const { data } = await addRec({
                variables: {...userCreateRec}
            });

            setUserCreatRec({
                nameOfActivity:'', 
                location:'', 
                comment:''   
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
            <Row className="g-2">
                <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="City">
                        <Form.Control type="text" placeholder="City"
                        onChange={handleInputChange}
                        value={userCreateRec.location} />
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId="floatingSelectGrid" label="Works with selects">
                        <Form.Select aria-label="Floating label select example">
                            <option>Select Activity, Food, or Landmark</option>
                            <option value="1">Activity</option>
                            <option value="2">Food</option>
                             <option value="3">Landmark</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
            </Row>
            <Form.Group className="mb-3">
                <Form.Label>Enter Name of Recommended Activity, Restaurant or Landmark</Form.Label>
                <Form.Control 
                    type="text" placeholder="Enter the name of activity, restaurant or landmark" 
                    onChange={handleInputChange}
                    value={userCreateRec.nameOfRec}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    onChange={handleInputChange}
                    value={userCreateRec.comment}
                    style={{ height: '100px' }}
                />
                </FloatingLabel>
            </Form.Group>
            <Button
                disabled={!(userCreatRec.nameOfRec && userCreateRec.nameOfActivity && userCreateRec.location && userCreateRec.comment)}
                type='submit'
                variant='success'>
                    Submit
            </Button>
        </Form>
    )

}

export default CreateRec;