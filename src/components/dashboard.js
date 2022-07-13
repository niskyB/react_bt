import React from 'react';
import {
    Nav,
    NavItem,
    Collapse,
    Navbar
} from "reactstrap";
import { NavLink } from "react-router-dom";

function DashBoard() {
    return (<div className='container'>
        <Navbar expand="md">
            <Collapse isOpen={true} navbar>
                <Nav navbar>
                    <NavItem>
                        <p className='cate-title'>
                            CATEGORIES
                        </p>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/">
                            Lighting
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/">
                            Bedding
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/">
                            Bath & Shower
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    </div>);
}

export default DashBoard;