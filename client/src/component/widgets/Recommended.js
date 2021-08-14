import React from 'react';
import { CardColumns, Card, Button } from 'react-bootstrap';

const cardStyle = {
    background: '#DED5C4',
    color: '#305973',
    width: '24rem' 
}

const buttonStyle = {
    background: '#EF7E56',
    textColor: '#F9F9F9',
    border: 'none',
    borderRadius: '15px',
    margin: '10px',
}

const sampleText= {
    color: '#EF7E56',
}

const Resume=()=>{
    return(
        <CardColumns>
            <Card style={cardStyle} text='#305973'>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2"  style={sampleText}>Card Subtitle</Card.Subtitle>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                    <Button style={buttonStyle} href="#">Card Link</Button>
                    <Button style ={buttonStyle} href="#">Another Link</Button>
                </Card.Body>
            </Card>
        </CardColumns>
    )

}

export default Resume;