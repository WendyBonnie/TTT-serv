import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./barreMenu.css";
import { Row, Container, Col, Dropdown } from "react-bootstrap";

class Barremenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  connect = () => {
    if (this.props.login) {
      return (
        <Container fluid>
          <Row className="partie1">
            <Dropdown className="nav justify-content-right">
              <Dropdown.Toggle alignRight variant="success" id="dropdown-basic">
                <img src="/images/user.png" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/MonProfil">Profil</Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    window.confirm("Voulez vous vous déconnecter ?");
                    localStorage.clear();
                    this.props.setLogin(false);
                    this.props.history.push("/");
                  }}
                  href="/"
                >
                  Déconnexion
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Col className="logoPartie1" md={12}>
              <img src="/images/logoJaune.png" />
            </Col>
          </Row>
        </Container>
      );
    } else {
      return (
        <Container fluid>
          <Row className="partie1">
            <Dropdown className="nav justify-content-right">
              <Dropdown.Toggle alignRight variant="success" id="dropdown-basic">
                <img src="/images/user.png" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/inscription">Inscription</Dropdown.Item>
                <Dropdown.Item href="/">Connexion</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Col className="logoPartie1" md={12}>
              <img src="/images/logoJaune.png" />
            </Col>
          </Row>
        </Container>
      );
    }
  };

  componentDidUpdate() {
    this.connect();
    console.log("coucou", this.props.login);
  }

  render() {
    return <div className="barre-de-menu">{this.connect()}</div>;
  }
}
export default Barremenu;
