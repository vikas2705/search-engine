import React from "react";
import "./header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
    return (
        <div className=''>
            <div className='header-main container d-flex justify-content-between align-items-center'>
                <div className='left-header'>
                    <Navbar expand='lg'>
                        <Navbar.Brand href='/'>Google</Navbar.Brand>
                        <Navbar.Toggle aria-controls='basic-navbar-nav' />
                        <Navbar.Collapse id='basic-navbar-nav'>
                            <Nav className='me-auto'>
                                <Nav.Link href='/about'>About</Nav.Link>
                                <Nav.Link href='/store'>Store</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div className='right-header'>
                    <Nav className='me-auto d-flex align-items-center'>
                        <Nav.Link href='/images'>Images</Nav.Link>
                        <Nav.Link href='/account'>
                            <i className='bi bi-person-circle fs-24'></i>
                        </Nav.Link>
                    </Nav>
                </div>
            </div>
        </div>
    );
};
export default Header;
