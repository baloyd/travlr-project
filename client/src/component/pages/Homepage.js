import { Jumbotron, Container, Button } from 'react-bootstrap';
import Auth from '../utils/auth';
import Login from '../Login'
import Signup from '../Signup'

const Homepage = ()=>{
return (
<div>
<Jumbotron>
    <Container>
<h1>Travlr</h1>

</Container>
</Jumbotron>
<Button><Login /></Button>
<Button><Signup /></Button>
</div>
)
}

export default Homepage;