import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, Jumbotron, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div>
            <Navbar dark expand="md">
                <div className='container'>
                    <NavbarToggler onClick={() => setIsNavOpen(!isNavOpen)} />
                    <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height='30' /></NavbarBrand>
                    <Collapse isOpen={isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className='nav-link' to='/home'><span className='fa fa-home fa-lg'></span>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/about'><span className='fa fa-info fa-lg'></span>About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/menu'><span className='fa fa-list fa-lg'></span>Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/contactus'><span className='fa fa-address-card fa-lg'></span>Contact Us</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <Jumbotron>
                <div className='container'>
                    <div className='row row-header'>
                        <div className='col-12 col-sm-6'>
                            <h1>Ristorante con Fusion</h1>
                            <p>We take inspiration from the World's be fusion experience. Our lipsmacking creation will tickle your culinary senses!</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        </div>
    );
}

export default Header;