import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css'; // Ensure this file includes styling for the navbar

const NavMenu: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <header>
            <Navbar className="navbar-expand-sm navbar-light bg-light border-bottom box-shadow mb-3" container>
                <NavbarBrand tag={Link} to="/">Patient Admission Service</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="navbar-nav flex-grow" navbar>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/search">Search Patients</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
    );
}

export default NavMenu;