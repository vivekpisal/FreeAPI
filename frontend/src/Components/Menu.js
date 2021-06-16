import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {NavLink} from 'react-router-dom'
import logo from './logo.svg'

export default function Menu()
{
	return(
		<>
		  <Navbar style={{fontSize:"40"}} bg="dark" variant="dark" expand="lg">
		    <Navbar.Brand to="/home">
		    <img
		        src={logo}
		        width="50"
		        height="45"
		        className="d-inline-block align-top"
		      />
		    </Navbar.Brand>
		    <Navbar.Toggle aria-controls="basic-navbar-nav" />
  			<Navbar.Collapse id="basic-navbar-nav">
		    <Nav className="mr-auto">
		      <Nav.Link as={NavLink} to="/">Home</Nav.Link>
		      <Nav.Link as={NavLink} to="/guide">Guide</Nav.Link>
		    </Nav>
		   	</Navbar.Collapse>
		  </Navbar>
		  
		</>
	)
}
