import React, { useState } from 'react';
import { Container, Row, Col, Image, CloseButton, Button, Modal } from 'react-bootstrap';

const headerFooterStyles = {
    background: '#305973',
    color: '#F9F9F9'
    
}
const bodyStyles = {
    background: '#DED5C4',
    color: '#305973'
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
    border: 'solid 3px #EF7E56',
    borderRadius: '15px',
    margin: '10px',
}

const Modal = ({ recPlace, username, category, street, city, state, zip, comment }) =>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [likes, setLikes] = useState(0);
    const [isLikesToggled, setIsLikesToggled] = useState(false);
    const handleLikesToggle = () => setIsLikesToggled(!isLikesToggled);
   
    const handleLikesClick = ()=>{
        !isLikesToggled ? setLikes((likes + 1)) : setLikes((likes-1));
       
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch static backdrop modal
            </Button>
        <Modal 
            size='xl'
            show={show}
            onHide={handleClose}
            backdrop='static'
            keyboard={false}
        >
            <Modal.Header closeButton style={headerFooterStyles}>
                <Modal.Title>{recPlace}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={bodyStyles}>
                <Row className='m-0'>
                    <Col>
                    <p className='row mb-1 m-0'>Recommended by: {username}</p>
                    <p className='row mb-1 m-0'>Category: {category}</p>
                    </Col>
                    <Col>
                    <p className='mb-1'>Address:</p>
                    <p className=''>{`${street} ${city}, ${state}, ${zip}`}</p>
                    </Col>
                    
                </Row>
                
                
                {/* Where map can go? */}
                <Image rounded src="./images/test-img.png" fluid/>

                <p className='mt-3'>Recommendation:</p>

                <p>{comment}</p>
            
            </Modal.Body>
            <Modal.Footer style={headerFooterStyles}>
                <small className="text-white">{likes} Likes</small>
                        <Button style ={isLikesToggled === false ? orangeButtonStyle : blueButtonStyle}  href="#" onClick={()=>
                            {handleLikesClick(); 
                            handleLikesToggle();}}><i class="fas fa-heart"></i></Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default Modal;

