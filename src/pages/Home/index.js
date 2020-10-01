import React from 'react';
import './styles.css';

import Menu from "../Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';


export default function Home() {
    return (
        <>
            <Menu />
            <hr />
        


    <>

<Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>

    <Jumbotron>
    <h1>Hello, world!</h1>
    <p>
      This is a simple hero unit, a simple jumbotron-style component for calling
      extra attention to featured content or information.
    </p>
    <p>
      <Button variant="primary">Learn more</Button>
    </p>
  </Jumbotron>
  </>
  );
}
        </>
    );
}
