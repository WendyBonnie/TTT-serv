import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./barreMenu.css";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavLink,
  Row,
  Container,
  Col,
  Dropdown,
} from "react-bootstrap";

class Barremenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container fluid>
        <Row className="partie1">
          <Dropdown className="nav justify-content-right">
            <Dropdown.Toggle alignRight variant="success" id="dropdown-basic">
              <img src="/images/user.png" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/MonProfil">Mon profil</Dropdown.Item>
     
              <Dropdown.Item href="/">Connexion</Dropdown.Item>
              <Link to="/" onClick={() => localStorage.clear()}>
                <Dropdown.Item href="/">Deconnexion</Dropdown.Item>
              </Link>
            </Dropdown.Menu>
          </Dropdown>

          <Col className="logoPartie1" md={12}>
            <img src="/images/logoJaune.png" />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Barremenu;
