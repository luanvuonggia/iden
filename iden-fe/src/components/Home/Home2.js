import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import cardImg from "../../Assets/iden-card.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="home-about-description">
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "4.6em", fontWeight: "bold" }}>
              Welcome to IDEN!
            </h1>
            <h1 className="value-hompage">
              31 dAPPs
            </h1>
            <h1 className="value-hompage">
              570k IDEN
            </h1>
            <p className="home-about-body">
             <b>IDEN aka ICON SBT </b>is built on  <i>
                <b className="icon-color">Icon blockchain</b>
              </i>
              <br />
              <br />IDEN represent<i>
              <b className="purple"> ID card/ Certificate </b>
              </i>which ensures they are tamper-proof, and cannot be forged or duplicated.
              <br />Cannot be
              <i>
                <b className="purple"> claimed or transferred </b>
              </i>
              <br />
              Provide a <i>
                <b className="purple">permanent record </b>
              </i>of the ID card / certificate.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={cardImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND US ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/luanvuonggia"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/luanvuong"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/luanvuong"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
