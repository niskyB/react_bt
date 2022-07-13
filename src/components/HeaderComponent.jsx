import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

function Header() {
  return (
    <div>
      <Navbar dark expand="md">
        <div className="container">
          <NavbarBrand className="mr-auto" href="/">
            <img src="images/logo.png" alt="logo" height="30" />
          </NavbarBrand>
          <NavbarBrand className="ml-auto" href="/">
            <img
              onClick={() => alert("this function is building")}
              src="images/shoppingcart.jfif"
              alt="logo"
              height="30"
            />
          </NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
