import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

export default function BottomBar(){
	return(
		<>
			<Jumbotron  style={{backgroundColor:"#c2dcff"}}>
			  <Container>
			    <h1>Free API</h1>
			    <p>
			      Coded and maintained with ❤️ by Vivek Pisal © 2021
			    </p>
			  </Container>
			</Jumbotron>
		</>
	);
}