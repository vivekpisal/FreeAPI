import {useState} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'
import BottomBar from './BottomBar'

const codeblock={
	backgroundColor:"#404040",
	color:"white",
}



export default function Home(){
	const[fetchdata,setFetchData]=useState("{}");

	const GetInfo=async ()=>{
		const info = await axios.get('http://localhost:8000/todos/1');
		setFetchData(info.data);
	}
	return(
		<>
		<Jumbotron style={{backgroundColor:"#c2dcff"}}>
		  <h1>{'{'}JSON{'}'} API</h1>
		  <p>
		    Free fake API for testing and prototyping.
		  </p>
		  <p>
		    <Button variant="primary">Learn more</Button>
		  </p>
		</Jumbotron>
		<Container>
		  <Row>
		    <Col></Col>
		    <Col xs={8}>
		    	<Alert variant="dark" style={codeblock}>
					<span style={{color:"orange"}}>fetch</span>('http://localhost:8000/todos/1')<br/>
						<span style={{paddingLeft:"30px"}}></span>.<span style={{color:"orange"}}>then</span>(response => response.<span style={{color:"orange"}}>json</span>())<br/>
						<span style={{paddingLeft:"30px"}}></span>.<span style={{color:"orange"}}>then</span>(json => console.<span style={{color:"orange"}}>log</span>(json))
				</Alert>
				<br/>
				<Button variant="outline-primary" onClick={GetInfo}>Fetch</Button>
				<br/><br/>
				<Alert variant="dark" style={codeblock}>
					<pre style={codeblock}>{JSON.stringify(fetchdata,null, 2)}</pre>
				</Alert>
				<br/><br/>
				<br/><br/>
				<h1 style={{fontFamily:"Baloo Tammudu 2"}}>When to use</h1>
					<p>JSONPlaceholder is a free online REST API that 
					you can use <b>whenever you need some fake data.</b></p>
				<br/><br/>
				<h1 style={{fontFamily:"Baloo Tammudu 2"}}>Resources</h1>
					<a href="/posts">/posts</a><span style={{paddingLeft:"40px"}}></span> 10 Posts<br/>
					<a href="/todos">/todos</a><span style={{paddingLeft:"40px"}}></span> 10 Todos<br/>
					<a href="/comments">/comments</a><span style={{paddingLeft:"10px"}}></span> 10 comments<br/>
		    	<br/><br/>
		    	<h1>Routes</h1>
		    	<p>All HTTP methods are supported. You can use http or https for your requests.</p>
		    		GET<span style={{paddingLeft:"50px"}}></span><a href="/posts">/posts</a><br/>
		    		GET<span style={{paddingLeft:"50px"}}></span><a href="/posts/1">/posts/1</a><br/>
		    		GET<span style={{paddingLeft:"50px"}}></span><a href="/posts/1/comments">/posts/1/comments</a><br/>
		    		GET<span style={{paddingLeft:"50px"}}></span><a href="/todos">/todos</a><br/>
		    		GET<span style={{paddingLeft:"50px"}}></span><a href="/todos/1">/todos/1</a><br/>
		    		POST<span style={{paddingLeft:"40px"}}></span>/posts<br/>
		    		PUT<span style={{paddingLeft:"50px"}}></span>/posts/1<br/>
		    		DELETE<span style={{paddingLeft:"20px"}}></span>/posts/1<br/>
		    		POST<span style={{paddingLeft:"40px"}}></span>/todos<br/>
		    		PUT<span style={{paddingLeft:"50px"}}></span>/todos/1<br/>
		    		DELETE<span style={{paddingLeft:"20px"}}></span>/todos/1<br/>
		    </Col>
		    <Col></Col>
		  </Row>
		 </Container>
		 <br/><br/>
		 <BottomBar/>
		</>
	)
}