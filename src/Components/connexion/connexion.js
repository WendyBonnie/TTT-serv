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

    fetch("https://back-end.osc-fr1.scalingo.io/serveur/login", options)
      .then((response) => {
        return response.json();
      })

      .then((responseData) => {
        console.log(responseData);
        localStorage.setItem("token", responseData.token);
        localStorage.setItem("userID", responseData.userId);
        this.props.history.push("/monprofil");
      });
  };

  render() {
    return (
      <Container className='connexCont'>
        <Row className="background">
          <Col  className="blockConnexion" sm={12} md={7} lg={12}>
            <h1 className="titreConnexion">Déjà membre?</h1>
            <h1 className="titreConnexion">Connectez-vous!</h1>

            <Form className="identifiants">
              <Form.Row className="align-items-center">
                <Col xs={12} s={12}>
                  <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                    Username
                  </Form.Label>
                  <InputGroup className="mb-2">
                    <FormControl
                      name="email"
                      id="inlineFormInputGroup"
                      placeholder="Email"
                      onChange={this.handleInput}
                      value={this.state.email}
                    />
                  </InputGroup>
                </Col>
                <Col s={12} className="colPassword">
                  <Form.Label htmlFor="inlineFormInput" srOnly>
                    Mot de passe
                  </Form.Label>
                  <Form.Control
                    name="password"
                    className=" connexPass"
                    id="inlineFormInput"
                    placeholder="Password"
                    type="password"
                    onChange={this.handleInput}
                    value={this.state.password}
                  />
                </Col>
                <Col sm={12}>
                  <Link to="/passwordReset">
                    <p className="mdpOublie">Mot de passe oublié ?</p>
                  </Link>
                </Col>

                <Col md={4}>
                  <Link to="/monProfil">
                    <Button
                      type="submit"
                      className="connectServeur"
                      onClick={this.addLogin}
                    >
                      Se connecter
                    </Button>
                  </Link>
                </Col>
                <Col className="colMembre" xs={12}>
                  <p className="membre">
                    Pas encore membre ?
                    <Link className="compte" to="/inscription">
                      {""} Créer mon compte
                    </Link>
                  </p>
                </Col>
              </Form.Row>
            </Form>
          </Col>
          <Col className="imageDeskServeur" md={5}>
       
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Connexion;
