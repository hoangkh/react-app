import React from 'react';
import {  Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';


function Header() {
    return <div id="media-page-header">
      <Navbar expand="lg">
        <Link to="/shop" className="brand-name">My Channel</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="menu-items" to="/shop">Genre</Link>
            <Link className="menu-items" to="/shop">TV Series</Link>
            <Link className="menu-items" to="/shop">Kids</Link>
            <Link className="menu-items" to="/shop">Favorite</Link>
            <Link className="menu-items" to="/shop">Brands</Link>
            <Link className="menu-items" to="/shop">Sales</Link>
            <Link className="menu-items" to="/shop">My basket</Link>
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