import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import React, { Component } from "react";
import "./connexion.css";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import CookieConsent, { Cookies } from "react-cookie-consent";

class Connexion extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  addLogin = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
    };

    const headers = new Headers({
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    });

    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: headers,
    };

    fetch("http://localhost:8080/serveur/login", options)
      .then((response) => {
        return response.json();
      })

      .then((responseData) => {
        this.setState({ message: responseData.message });

        if (responseData.token) {
          localStorage.setItem("token", responseData.token);
          localStorage.setItem("userID", responseData.userId);
          this.props.setLogin(true);
          this.props.history.push("/monprofil");

          setTimeout(() => {
            localStorage.clear();
            this.props.setLogin(false);
            this.props.history.push("/");
          }, 3600000);
        }
      });
  };

  render() {
    return (
      <Container className="connexion-container">
        <CookieConsent
          location="bottom"
          buttonText="J'accepte"
          declineButtonText="Je refuse"
          expires={0}
          enableDeclineButton
          onDecline={() => {
            alert("REFUS de cookies, votre choix à bien été pris en compte.");
          }}
          cookieName="Tipourboire"
          style={{ background: "#ffffff", color: "#555" }}
          declineButtonStyle={{
            borderRadius: 12,
            padding: 8,
            color: "#fff",
            fontSize: "18px",
            background: "#f5a624",
            fontWeight: "bold",
          }}
          buttonStyle={{
            borderRadius: 12,
            padding: 8,
            color: "#fff",
            fontSize: "18px",
            background: "#f5a624",
            fontWeight: "bold",
          }}
          style={{
            fontSize: "20px",
            fontfamily: "Montserrat",
            fontWeight: "bold",
          }}>
          Le Site Tipourboire utilise différents cookies afin d’améliorer ses
          services et effectuer des suivis d’audience. Certains cookies sont
          indispensables au fonctionnement du Site. Vous pouvez accepter ces
          cookies, les refuser, ou gérer vos préférences. Vous pouvez consulter
          notre{" "}
          <a
            href="/cookies/POLITIQUE_DE_COOKIES.pdf"
            target="_blank"
            style={{
              fontSize: "20px",
              fontfamily: "Montserrat",
              fontWeight: "bold",
            }}>
            Politique de cookies
          </a>
        </CookieConsent>
        <Row>
          <Col>
            <h1>Déja membre ? </h1>
            <h1>Connectez-vous !</h1>
          </Col>
        </Row>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            name="email"
            type="email"
            ClassName="formMail"
            placeholder="Votre e-mail"
            id="email"
            onChange={this.handleInput}
            value={this.state.email}
          />
          <Form.Control
            name="password"
            type="password"
            ClassName="formMail"
            placeholder="Votre mot de passe"
            id="password"
            onChange={this.handleInput}
            value={this.state.password}
          />
        </Form.Group>
        <Col className="colMdp" xs={12} md={12}>
          <Link className="forgetpwd" to="/passwordReset">
            <p>Mot de passe oublié ?</p>
          </Link>
        </Col>
        <Col md={12} className="blocCompte">
          <Button className="connectButton" onClick={this.addLogin}>
            Se connecter
          </Button>
          <p>{this.state.message}</p>
        </Col>
        <Col className="alignRight">
          <Form.Label className="text2">
            Pas encore membre ?{" "}
            <Link className="creerCompte" to="/Inscription">
              Créer mon compte
            </Link>
          </Form.Label>
        </Col>
      </Container>
    );
  }
}
export default Connexion;
