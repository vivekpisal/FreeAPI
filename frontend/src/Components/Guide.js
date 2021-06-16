import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import BottomBar from './BottomBar'

const codeblock={
	backgroundColor:"#404040",
	color:"white",
}

const spaceup={
	marginTop:"70px",
}

export default function Guide()
{
	return(
		<>
		<Container>
		  <Row >
		    <Col></Col>
		    <Col xs={8}>
		    	
		    	<h1>Guide Page</h1>
		    	<p style={{color:"black"}}>Below you'll find examples using Fetch API but you can FreeAPI with any other language.</p>
		    	<p style={{color:"black"}}>You can copy paste the code in your browser console to quickly test FreeAPI.</p>
		    	
		    	<h2 style={spaceup}>Getting a resource</h2>
		    	<Alert variant="dark" style={codeblock}>
					<span style={{color:"orange"}}>fetch</span>('http://localhost:8000/todos/1')<br/>
						<span style={{paddingLeft:"30px"}}></span>.<span style={{color:"orange"}}>then</span>(response => response.<span style={{color:"orange"}}>json</span>())<br/>
						<span style={{paddingLeft:"30px"}}></span>.<span style={{color:"orange"}}>then</span>(json => console.<span style={{color:"orange"}}>log</span>(json))
				</Alert>
				<p>👇 Output:-</p>
				<Alert variant="dark" style={codeblock}>
					{'{'}<br/>
					  <span style={{paddingLeft:"15px"}}></span>id: 1,<br/>
					  <span style={{paddingLeft:"15px"}}></span>title: '...',<br/>
					  <span style={{paddingLeft:"15px"}}></span>body: '...',<br/>
					  <span style={{paddingLeft:"15px"}}></span>userId: 1<br/>
					{'}'}
				</Alert>
				

				<h2 style={spaceup}>Listing all resources</h2>
				<Alert variant="dark" style={codeblock}>
					<span style={{color:"orange"}}>fetch</span>('http://localhost:8000/todos/1')<br/>
						<span style={{paddingLeft:"30px"}}></span>.<span style={{color:"orange"}}>then</span>(response => response.<span style={{color:"orange"}}>json</span>())<br/>
						<span style={{paddingLeft:"30px"}}></span>.<span style={{color:"orange"}}>then</span>(json => console.<span style={{color:"orange"}}>log</span>(json))
				</Alert>
				<p>👇 Output:-</p>
				<Alert variant="dark" style={codeblock}>
					[<br/>
						  <span style={{paddingLeft:"15px"}}></span>{'{'} id: 1, title: '...' /* ... */ {'}'},<br/>
						  <span style={{paddingLeft:"15px"}}></span>{'{'} id: 2, title: '...' /* ... */ {'}'},<br/>
						  <span style={{paddingLeft:"15px"}}></span>{'{'} id: 3, title: '...' /* ... */ {'}'},<br/>
						  <span style={{paddingLeft:"15px"}}></span>/* ... */<br/>
						  <span style={{paddingLeft:"15px"}}></span>{'{'} id: 100, title: '...' /* ... */ {'}'},<br/>
						];<br/>

				</Alert>
				<b>Important</b>: resource will not be really updated on the server but it will be faked as if.
				

				<h2 style={spaceup}>Creating a resource</h2>
				<Alert variant="dark" style={codeblock}>
					<span style={{color:"orange"}}>fetch</span>('https://jsonplaceholder.typicode.com/posts', {'{'}<br/>
						  <span style={{paddingLeft:"15px"}}></span>method: 'POST',<br/>
						  <span style={{paddingLeft:"15px"}}></span>body: JSON.<span style={{color:"orange"}}>stringify</span>({'{'}<br/>
						    <span style={{paddingLeft:"25px"}}></span>title: 'foo',<br/>
						    <span style={{paddingLeft:"25px"}}></span>body: 'bar',<br/>
						    <span style={{paddingLeft:"25px"}}></span>userId: 1,<br/>
						  {'}'}),<br/>
						  <span style={{paddingLeft:"15px"}}></span>headers: {'{'}<br/>
						    <span style={{paddingLeft:"25px"}}></span>'Content-type': 'application/json; charset=UTF-8',<br/>
						  {'}'},<br/>
						{'}'})<br/>
						  .<span style={{color:"orange"}}>then</span>((response) => response.<span style={{color:"orange"}}>json</span>())<br/>
						  .<span style={{color:"orange"}}>then</span>((json) => console.log(json));<br/>
				</Alert>
				<p>👇 Output:-</p>
				<Alert variant="dark" style={codeblock}>
					{'{'}<br/>
					  <span style={{paddingLeft:"15px"}}></span>id: 101,<br/>
					  <span style={{paddingLeft:"15px"}}></span>title: 'foo',<br/>
					  <span style={{paddingLeft:"15px"}}></span>body: 'bar',<br/>
					  <span style={{paddingLeft:"15px"}}></span>userId: 1<br/>
					{'}'}
				</Alert>
				<b>Important</b>:resource will not be really updated on the server but it will be faked as if.


				<h2 style={spaceup}>Deleting a resource</h2>
				<Alert variant="dark" style={codeblock}>
					<span style={{color:"orange"}}>fetch</span>('https://jsonplaceholder.typicode.com/posts/1', {'{'}<br/>
  						 <span style={{paddingLeft:"15px"}}></span>method: 'DELETE',<br/>
						{'}'});
				</Alert>
				<b>Important</b>: resource will not be really updated on the server but it will be faked as if.
		    </Col>
		    <Col></Col>
		  </Row>
		</Container>
		<BottomBar/>
		</>
	);
}