import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css'

const TopNav = () => {
    return (

        <Navbar className="nav-bg"  expand="lg">
            <Container>
                <Navbar.Brand className="text-danger"> <NavLink className="nav-link" to="/">Logo</NavLink> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink to="/imgPreview" className="pr-3 nav-link" id="specialMenu">Image Preview</NavLink>
                        <NavLink to="/dragText" className="pr-3 nav-link" id="specialMenu">Drag Drop</NavLink>
                        <NavLink to="/" className="pr-3 nav-link">Home</NavLink>
                        <NavLink to="/" className="pr-3 nav-link">About Us</NavLink>
                        <NavLink to="/" className="pr-3 nav-link">Our Service</NavLink>
                        <NavLink to="/" className="pr-3 nav-link">Projects</NavLink>
                        <NavLink to="/" className="pr-3 nav-link">Our Team</NavLink>
                        <NavLink to="/" className=" nav-link">Contact Us</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default TopNav;