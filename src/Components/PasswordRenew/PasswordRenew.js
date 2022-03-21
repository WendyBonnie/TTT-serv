/**
 * PasswordRenew.js - PasswordRenew component
 */

/* Modules and components imports */
import React, { Component } from "react";
import "./PasswordRenew.css";
import { Row, Col, Container, Button, Form } from "react-bootstrap";
/* PasswordRenew component */
class PasswordRenew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      message: "",
      isRevealPwd: false,
    };
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  passwordRenew = (e) => {
    e.preventDefault();

    if (!this.state.email || !this.state.password) {
      return;
    }

    const data = {
      email: this.state.email,
      password: this.state.password,
      token: this.props.match.params.token,
    };

    const headers = new Headers({
      "Content-Type": "application/json",
    });

    const options = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    };

    fetch("http://localhost:8080/serveur/password-renew", options)
      .then((response) => response.json())
      .then(
        (responseObject) => {
          if (
            responseObject.message == "Votre mot de passe a bien été modifié."
          ) {
            alert(responseObject.message);
            window.location.replace("http://beneficiaire.tipourboire.com");
          }

          this.setState({ message: responseObject.message });
        },
        (error) => {
          console.log(error);
        }
      );
  };

  render() {
    return (
      <Container className="renewPass">
        <Row className="rowPass">
          <Col className="PassRenewCol" md={6}>
            <h1 className="newPass"> Votre nouveau mot de passe</h1>
            <form className="formRenew" onSubmit={this.passwordRenew}>
              <input
                className="inputRenew"
                type="email"
                id="email"
                name="email"
                onChange={this.handleInput}
                placeholder="Email"
              />

              <br />
              <div className="pwd-container">
                <Form.Control
                  type={this.state.isRevealPwd ? "text" : "password"}
                  placeholder="Nouveau mot de passe"
                  className="inputRenew"
                  id="password"
                  name="password"
                  onChange={this.handleInput}
                  value={this.state.password}
                />
                {this.state.isRevealPwd ? (
                  <a
                    onClick={() => {
                      this.setState({ isRevealPwd: false });
                    }}>
                    <img src="/image/oeil.png" />
                  </a>
                ) : (
                  <a
                    onClick={() => {
                      this.setState({ isRevealPwd: true });
                    }}>
                    <img src="/image/invisible.png" />
                  </a>
                )}
              </div>

              <span>{this.state.message}</span>
              <br />
              <Button onClick={this.passwordRenew} className="renewButton">
                Valider
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PasswordRenew;
