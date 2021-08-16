import {  Container,Row, Col, Button } from 'react-bootstrap';
import Auth from '../utils/auth';
import Login from '../Login'
import Signup from '../Signup'

const Homepage = ()=>{
return (
<div>

<Container>
  <Row>
    <Col>Travlr</Col>
  </Row>
</Container>

<Button><Login /></Button>
<Button><Signup /></Button>
</div>
)
}

export default Homepage;