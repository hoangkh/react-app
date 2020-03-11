import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

import Home from "./components/pages/HomePage";
import About from "./components/pages/AboutPage";
import Topics from "./components/topics/Topics";

export default function App() {
  return (
    <Router>
        <Navbar bg="light" expand="lg">
          <Link to="/"><Navbar.Brand href="/home">React Playground</Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/"><Nav.Link href="/home">Home</Nav.Link></Link>
              <Link to="/about"><Nav.Link href="/about">About</Nav.Link></Link>
              <Link to="/topics"><Nav.Link href="/topics">Topics</Nav.Link></Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

