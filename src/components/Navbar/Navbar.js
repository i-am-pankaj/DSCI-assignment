import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useNavigation from "../../hooks/useNavigation";

const NavigationBar = () => {
  const { activeView, activeViewHandler } = useNavigation();

  console.log(activeView);

  return (
    <Navbar bg="info" expand="lg">
      <div className="container justify-content-between">
        <Navbar.Brand
          as={Link}
          to="/"
          onClick={() => activeViewHandler("home")}
        >
          Student App
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mr-auto">
            <Nav.Link
              as={Link}
              to="/"
              onClick={() => activeViewHandler("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              onClick={() => activeViewHandler("about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              onClick={() => activeViewHandler("contact")}
            >
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <Button
              variant="light"
              as={Link}
              to="/form"
              onClick={() => activeViewHandler("form")}
            >
              Form
            </Button>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavigationBar;
