import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  let activeStyle = {
    color: "#fff",
  };
  return (
    <div className="header">
      <Navbar expand="lg" className="navbar navbar-light" >
        <Container>
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ml-auto">
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="nav-link"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="nav-link"
              >
                About
              </NavLink>
              <NavLink
                to="/skills"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="nav-link"
              >
                Skills
              </NavLink>
              <NavLink
                to="/education"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="nav-link"
              >
                Education
              </NavLink>
              <NavLink
                to="/certificates"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="nav-link"
              >
               Certificates
              </NavLink>
              <NavLink
                to="/projects"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="nav-link"
              >
                Projects
              </NavLink>
              <NavLink
                to="/contact"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="nav-link"
              >
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;