import React, { useState } from 'react';
import ModalPost from './ModalPost';
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

const Recommended=({ comments=[] })=>{
    // console.log(comments);
    // if(!comments.length){
    //     return <h3 className={textColor}>No Recommendations Yet! </h3>
    // }   

    // //State variables for Modal
    // const [show, setShow] = useState(false);

    // const handleShow = () => setShow(true);

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
            {/* {comments && comments.map((comment)=> */}
            <Card className='my-1' style={cardStyle} text='#305973'>
                <Card.Body onClick={ModalPost.handleShow}>
                    <Card.Title>Username</Card.Title>
                    <Card.Subtitle className="mb-2">Location Name, City</Card.Subtitle>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam turpis diam, sagittis sed tempor quis, rhoncus quis leo. Praesent ac magna massa. Quisque fringilla ullamcorper neque at sagittis. Etiam vitae fermentum erat. Vivamus tortor dui, tempus eu aliquet ut, gravida nec elit. Pellentesque eu neque neque. Donec non justo placerat, iaculis neque vitae, cursus diam. Curabitur fringilla quam eu ipsum congue eleifend. Praesent hendrerit metus eget mauris lacinia, sit amet rutrum turpis ultrices.
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
           {/* ))} */}
        </Container>
    )

}

export default Recommended;

//Key  = Post._id?
//Username = User.username
//Location Name = Location.location_name
//City = City.cityName
//Body = Post.post_body