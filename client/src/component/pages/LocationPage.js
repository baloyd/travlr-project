import React, {useState} from 'react';
import Recommended from '../widgets/Recommended';
import { Container, Row, CardColumns,Col, Image, Button, Modal } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../../utils/queries';


const text = {
    color: '#F9F9F9',
    fontWeight: 'bold'
}
const headerStyle = {
    color:'#EF7E56',
    textAlign:'center',
    width:'24rem',
    marginLeft:'25px'
}
//Modal
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

const LocationPage = () =>{
    //Modal
    const [show, setShow] = useState(false);

    const handleClose = () => setComment(null);
    // const handleShow = () => setShow(true);
    

    const [likes, setLikes] = useState(0);
    const [isLikesToggled, setIsLikesToggled] = useState(false);
    const handleLikesToggle = () => setIsLikesToggled(!isLikesToggled);
    const [comment, setComment] =useState(null);

    const handleLikesClick = ()=>{
        !isLikesToggled ? setLikes((likes + 1)) : setLikes((likes-1));
       
    }

    //Query Variable
    const { loading, data } = useQuery(QUERY_POST);
    const comments = data?.post || [];
    // console.log(comments);
    
    const loop = (cat)=>{
        const arr = [];
        for(let i =0;i<comments.length;i++){
            if(comments[i].category===cat){
                console.log(comments[i].name);
                    
                arr.push(<Recommended onClick={()=>setComment(comments[i])} category={comments[i].category} key={comments[i]._id} name={comments[i].name} city={comments[i].city} post_body={comments[i].post_body}/>)
                    
                }
            } return arr;
            
        }
       

    return (
        <Container>
            <Container>
                <Row className='mb-5'>
                    <CardColumns className='col-xl-4 col-lg-10 col-sm-12'>
                        <h1 className='mt-3 bg-light' style={headerStyle}>Activities</h1>
                        <div style={{height: '500px'}} className='overflow-auto'>
                            <>
                            {loop("Activity")} 
                            </>
                        </div>
                        
                    </CardColumns>
                    <CardColumns className='col-xl-4 col-lg-10 col-sm-12'>
                        <h1 className='mt-3 bg-light' style={headerStyle}>Food Spots</h1>
                        <div style={{height: '500px'}} className='overflow-auto'>
                            
                            {!loading ? (loop("Restaurant")) : (<div><h3 align='center' style={text}>No Recommendations Yet! </h3></div>)}
                            
                        </div>
                        
                    </CardColumns>
                    <CardColumns className='col-xl-4 col-lg-10 col-sm-12'>
                        <h1 className='mt-3 bg-light' style={headerStyle}>Landmarks</h1>
                        <div style={{height: '500px'}} className='overflow-auto'>
                            
                            {!loading ? (loop("Landmark")) : (<div><h3 align='center' style={text}>No Recommendations Yet! </h3></div>)}

                            {/* {!loading ? comments.map((comment)=>(
                                <Recommended onClick={handleShow} id={comment._id} name={comment.name} city={comment.city} post_body={comment.post_body}/>
                            )) : (<div><h3 align='center' style={text}>No Recommendations Yet! </h3></div>)} */}
                            
                        </div>
                        
                    </CardColumns>
                </Row>
            </Container>

            
            <Modal 
                size='xl'
                show={comment!=null}
                onHide={handleClose}
                backdrop='static'
                keyboard={false}
            >
                {comment && 
                    <>
                    <Modal.Header closeButton style={headerFooterStyles}>
                        <Modal.Title>{comment.name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={bodyStyles}>
                            <Row className='m-0'>
                                <Col>
                                    <p className='row mb-1 m-0'>Recommended by: Username</p>
                                    <p className='row mb-1 m-0'>Category: {comment.category}</p>
                            
                                </Col>
                                <Col>
                                    <p className='mb-1'>Address:</p>
                                    <p className=''>{`${comment.street} ${comment.city}, ${comment.state}, ${comment.zip}`}</p>
                                </Col>
                            </Row>
                            {/* Where map can go? */}
                            {/* <Image rounded src="../images/test-img.png" fluid/> */}
                            <Row>
                                <p className='mt-3'>Recommendation:</p>
                                <p>{comment.post_body}</p>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer style={headerFooterStyles}>
                            <small className="text-white">{likes} Likes</small>
                            <Button style ={isLikesToggled === false ? orangeButtonStyle : blueButtonStyle}  href="#" onClick={()=>
                            {handleLikesClick(); 
                            handleLikesToggle();}}><i class="fas fa-heart"></i></Button>
                        </Modal.Footer>
                    </>
                }
            </Modal>
            


        </Container>
        

    )

}

export default LocationPage;