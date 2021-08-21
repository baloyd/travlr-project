import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { QUERY_POST } from '../../utils/queries';
// import ModalPost from './ModalPost';
import { Container, Card, Button } from 'react-bootstrap';

// Stylings
const textColor = {
    color: '#305973',
    fontWeight: 'bold'
}
const cardStyle = {
    background: '#DED5C4',
    color: '#305973',
    width: '24rem' 
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

const Recommended = () => {
    // console.log(comments);
    // if(!comments.length){
    //     return <h3 className={textColor}>No Recommendations Yet! </h3>
    // }   

    // //State variables for Modal
    // const [show, setShow] = useState(false);

    // const handleShow = () => setShow(true);

    //Query Variable
    const { loading, data } = useQuery(QUERY_POST);
    const comments = data?.post || [];
    console.log(comments);

    // State Variables
    const [likes, setLikes] = useState(0);
    const [isLikesToggled, setIsLikesToggled] = useState(false);
    const [approvals, setApprovals] = useState(0);
    const [isApprovalsToggled, setIsApprovalsToggled] = useState(false);
    
    // Handles Likes 
    const handleLikesToggle = () => setIsLikesToggled(!isLikesToggled);
    const handleLikesClick = ()=>{
        !isLikesToggled ? setLikes((likes + 1)) : setLikes((likes-1));
    }

    // Handles Approvals
    const handleApprovalsToggle = () => setIsApprovalsToggled(!isApprovalsToggled);
    const handleApprovalsClick = () =>{
        !isApprovalsToggled ? setApprovals((approvals + 1)) : setApprovals((approvals-1));
    }    

    return(
        <Container>
            {!loading ? comments.map((comment)=>(
            <Card className='my-1' style={cardStyle} text='#305973'>
                <Card.Body >
                    <Card.Title>Username</Card.Title>
                    <Card.Subtitle className="mb-2">{comment.name}, {comment.city}</Card.Subtitle>
                    <Card.Text>
                    {comment.post_body}
                    </Card.Text>
                    <Card.Text className='d-line align-items-center float-end'>
                        <small className="text-muted">{likes} Likes</small>
                        <Button style ={isLikesToggled === false ? orangeButtonStyle : blueButtonStyle}  href="#" onClick={()=>
                            {handleLikesClick(); 
                            handleLikesToggle();}}><i class="fas fa-heart"></i></Button>
                        
                        <small className="text-muted">{approvals} Approvals</small>
                        <Button style ={isApprovalsToggled === false ? orangeButtonStyle : blueButtonStyle} href="#" onClick={()=>{
                            handleApprovalsClick(); handleApprovalsToggle();}}><i class="fas fa-check"></i></Button>
                    </Card.Text>
                </Card.Body>
            </Card>
            )) : (<div><h3 className={textColor}>No Recommendations Yet! </h3></div>)}
        </Container>
    )

}

export default Recommended;

