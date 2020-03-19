import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Home from "./components/pages/HomePage";
import About from "./components/pages/AboutPage";
import MediaEntertain from "./components/media-entertain/Main";
import Shop from "./components/shop/Shop";

export default function App() {
  return (
    <Router>
        <Navbar bg="light" expand="lg">
          <Link to="/" className="brand-name">React Playground</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className="menu-items" to="/about">About</Link>
              <Link className="menu-items" to="/media-entertain">Media Entertain</Link>
              <Link className="menu-items" to="/shop">Shop</Link>
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
          <Route path="/media-entertain">
            <MediaEntertain />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

