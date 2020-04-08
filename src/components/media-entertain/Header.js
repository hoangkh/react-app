import React from 'react';
import {  Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';


function Header() {
  const menuItem = ['Genre', 'TV', 'Kids', 'Favrourite', 'My account']
    return <div id="media-page-header">
      <Navbar expand="lg">
        <Link to="/shop" className="brand-name">My Channel</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {menuItem.map((item, index) => (
                <Link className="menu-items" to="/under-construction">{item}</Link>    
              ))}
          </Nav>
          <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
      </Navbar>
      </div>;
  }

export default Header;