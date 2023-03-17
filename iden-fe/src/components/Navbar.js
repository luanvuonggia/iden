import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo-medium.png";
import avatar from "../Assets/default-avatar.png";
import Button from "react-bootstrap/Button";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { Link } from "react-router-dom";
import { connectWallet, hashShortener, disConnect } from "../sdk/iconSDK.js";
import {
  AiOutlineWallet,
  AiOutlineHome,
  AiOutlineTeam,
  AiOutlineCopy,
} from "react-icons/ai";
import {
  FaSignOutAlt,
  FaRegAddressCard
} from "react-icons/fa";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [address, setAddress] = useState(localStorage.getItem("address"));

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
      <div className="id-card">
                      <div className="profile-row">
                        <div className="desc">
                          <h1>Leon Vuong</h1>
                          <p>SBT: HX20FA57…10B2A2C8   <AiOutlineCopy style={{ fontSize: "1.6em" }}/></p> 
                          <p>ICX: 2000</p>
                          <Button
                            type="button"
                            className="disconnect-btn"
                            onClick={() => disConnect(setAddress)}
                            >
                              {"Disconnect "}
                            <FaSignOutAlt style={{ fontSize: "1em" }} />
                          </Button>
                        </div>
                      </div>
                    </div>
      </Popover.Body>
    </Popover>
  );

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

           

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/request"
                onClick={() => updateExpanded(false)}
              >
                <FaRegAddressCard
                  style={{ marginBottom: "2px" }}
                />{" "}
                Request
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineTeam style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>
            {
              address?
              
                <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
<div className="connected-user">
                    <img src={avatar} alt="avatar" className="default-avatar" ></img>
                    <span>{hashShortener(address)}</span>
                    </div>
                    </OverlayTrigger>
                
                
               :
              <Button
                type="button"
                className="connect-btn connect-btn-inner"
                onClick={() => connectWallet(setAddress)}
              >
                {"Connect "}
                <AiOutlineWallet style={{ fontSize: "1.5em" }} />
              </Button>

            }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
