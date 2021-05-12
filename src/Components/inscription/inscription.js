import React, { Component, useReducer } from "react";
import "./inscription.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

class Inscription extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  addNewRegister = (e) => {
    e.preventDefault();
    const data = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      city: this.state.city,
      adress: this.state.adress,
      staff: this.state.staff,
      date: this.state.date,
      email: this.state.email,
      phone: this.state.phone,
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

    fetch("https://back-end.osc-fr1.scalingo.io/serveur/register", options)
      .then((response) => {
        return response.json();
      })

      .then(
        (responseObject) => {
          this.setState({ message: responseObject.message });
        },

        (error) => {
          console.log(error);
        }
      );
  };
  render() {
    return (
      <Container className="inscr">
        <Row className="RowInscr">
          <Col md={8} className="Titre" sm={12}>
            <h1 className="titreh1">Créer mon compte </h1>
            <p className="Titrep">
              Merci de remplir les informations ci-dessous pour finaliser la
              création de votre compte.
            </p>

            <Form>
              <Form.Group controlId="lastname">
                <Form.Control
                  type="text"
                  placeholder="Nom"
                  name="lastname"
                  onChange={this.handleInput}
                  value={this.state.lastname}
                  className="tailleInscr"
                />
              </Form.Group>
              <Form.Group controlId="firstname">
                <Form.Control
                  type="text"
                  placeholder="Prénom"
                  name="firstname"
                  onChange={this.handleInput}
                  value={this.state.firstname}
                  className="tailleInscr"
                />
              </Form.Group>
              <Form.Group controlId="date">
                <Form.Control
                  type="date"
                  placeholder="JJMMAAAA"
                  name="date"
                  onChange={this.handleInput}
                  value={this.state.date}
                  className="tailleInscr"
                />
              </Form.Group>

              <Form.Group controlId="adress">
                <Form.Control
                  type="text"
                  placeholder="Adresse"
                  name="adress"
                  onChange={this.handleInput}
                  value={this.state.adress}
                  className="tailleInscr"
                />
              </Form.Group>
              <Form.Group controlId="city">
                <Form.Control
                  type="text"
                  placeholder="Ville"
                  name="city"
                  onChange={this.handleInput}
                  value={this.state.city}
                  className="tailleInscr"
                />
              </Form.Group>
              <Form.Group controlId="phone">
                <Form.Control
                  type="text"
                  placeholder="Telephone(Facultatif)"
                  name="phone"
                  onChange={this.handleInput}
                  value={this.state.phone}
                  className="tailleInscr"
                />
              </Form.Group>
              <Form.Group controlId="staff">
                <Form.Control
                  as="select"
                  type="text"
                  name="staff"
                  onChange={this.handleInput}
                  value={this.state.staff}
                  className="tailleInscr"
                >
                  <option>-</option>
                  <option>Commis</option>
                  <option>Chef de rang</option>
                  <option>Maître d'hôtel</option>
                  <option>Barman</option>
                  <option>Cuisinier</option>
                  <option>Accueil</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Control
                  type="mail"
                  placeholder="Email "
                  name="email"
                  onChange={this.handleInput}
                  value={this.state.email}
                  className="tailleInscr"
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={this.handleInput}
                  value={this.state.password}
                  className="tailleInscr"
                />
              </Form.Group>

              <Form.Group controlId="formBasicCheckbox">
                <Row style={{ marginLeft: "2px" }}>
                  <a
                    className="cgvLink"
                    href="/CGV_TIPTOTHANK.pdf"
                    target="_blanck"
                  >
                    J'ai lu et j'accepte les CGU et CGV
                  </a>
                </Row>
              </Form.Group>

              <Button
                className="connectServeur"
                variant="primary"
                block
                type="submit"
                onClick={this.addNewRegister}
              >
                S'inscrire
              </Button>
              <p>{this.state.message}</p>
            </Form>
          </Col>
          <Col className="imageInscrServeur" md={4}></Col>
        </Row>
      </Container>
    );
  }
}
export default Inscription;
