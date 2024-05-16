import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome, FaNewspaper, FaFootballBall, FaShoppingCart, FaTshirt, FaMoneyBill } from 'react-icons/fa';
import logoIcon from '../img/box-arrow-right.svg';
import Carrito from '../img/Carrito.svg';
import Lupa from '../img/search.svg';
import Logo from '../img/Logo2.png';
import '../styles/navbar.css';

const NavigationBar = () => {
    return (
        <>
            <Navbar bg="bar1" variant="light" id="small-navbar" className="navbar-small">
                <div className="icon-container">
                    <Link to="/" className="btn btn-link">
                        <img src={logoIcon} alt="Salida" className="icon-small" />
                    </Link>
                    <Link to="/search" className="btn btn-link">
                        <img src={Lupa} alt="Lupa" className="icon-small" />
                    </Link>
                    <Link to="/cart" className="btn btn-link">
                        <img src={Carrito} alt="Carrito" className="icon-small" />
                    </Link>
                </div>
            </Navbar>

            <Navbar bg="light" variant="light" id="large-navbar" className="navbar-large">
                <Navbar.Brand>
                    <Link to="/" className="d-flex align-items-center">
                        <img
                            src={Logo}
                            width="180"
                            height="90"
                            className="logo-large"
                            alt="Logo"
                        />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNavDropdown" />
                <Navbar.Collapse id="navbarNavDropdown">
                    <Nav className="nav-center mx-auto">
                        <Nav.Link as={Link} to="/" className="text-white"><FaHome className="mr-2" />Home</Nav.Link>
                        <NavDropdown title={<span><FaNewspaper className="mr-2" />Pages</span>} id="pagesDropdown" className="text-white">
                            <NavDropdown.Item as={Link} to="/news"><FaNewspaper className="mr-2" />News</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/site"><FaNewspaper className="mr-2" />Sites</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={<span><FaFootballBall className="mr-2" />Sportspress</span>} id="sportspressDropdown" className="text-white">
                        <NavDropdown.Item as={Link} to="/roster"><FaFootballBall className="mr-2" />Roster</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/players"><FaFootballBall className="mr-2" />Players</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/next-games"><FaFootballBall className="mr-2" />Next Games</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={<span><FaShoppingCart className="mr-2" />Shop</span>} id="shopDropdown" className="text-white">
                            <NavDropdown.Item as={Link} to="/t-shirts"><FaTshirt className="mr-2" />T-Shirts</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/accessories"><FaShoppingCart className="mr-2" />Accessories</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/purches" className="text-white"><FaMoneyBill className="mr-2" />Purches</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default NavigationBar;
