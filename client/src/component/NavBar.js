import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container,Modal,  Tab} from 'react-bootstrap';
import Auth from '../utils/auth'
import NewUser from './NewUser';
import Login from './Login';
import logo from '../images/logo.png'

//Stylings

const navbarStyle = {
    background: '#EF7E56',
    color: '#F9F9F9',
    fontWeight: 'bold'
}

const textColor = {
    color: '#F9F9F9',
    fontWeight: 'bold'
}

const orangeButtonStyle = {
  background: '#EF7E56',
  textColor: '#F9F9F9',
  border: 'none',
  borderRadius: '15px',
  margin: '10px',
}


function AppNavbar() {
   // set modal display state
   const [showModal, setShowModal] = useState(false);
    return (
       
        <div>
             
             <Navbar style={navbarStyle}>
             <Container fluid>
          <Navbar.Brand as={Link} to='/'>
          <img src={logo} alt=""></img>
          </Navbar.Brand>
          <Navbar.Toggle  />
          <Navbar.Collapse className="d-flex justify-content-end">
            <Nav >
             
              <Nav.Link className="d-flex justify-content-space-between"  style={textColor} as={Link} to='/Homepage'>
                Home
              </Nav.Link>

              <Nav.Link  style={textColor} as={Link} to='/LocationPage'>
                Locations
              </Nav.Link>
              {Auth.loggedIn() ? (
                <>
    
                  <Nav.Link style={textColor} onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link style={textColor} onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
              )}

              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title style={orangeButtonStyle}>
              <Nav >
                <Nav.Item >
                  <Nav.Link style={textColor} eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link style={textColor} eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <Login handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <NewUser handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    
   
  

        
           

           
       
     
      
      </div>
    );
}


export default AppNavbar;