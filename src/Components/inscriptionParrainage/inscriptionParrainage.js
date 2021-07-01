import React, { Component, useReducer } from "react";
import "./inscriptionParrainage.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

class InscriptionParrainage extends Component {
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
      acceptControl: this.state.acceptControl,
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

    fetch(
      "https://back-end.osc-fr1.scalingo.io/serveur/inscriptionParrainage",
      options
    )
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
        <Col md={12} className="Titre" sm={12}>
          <h1 className="titreh1">
            Vous avez été parrainé, crée votre compte afin de profiter de votre
            offre.{" "}
          </h1>
          <p className="Titrep">
            Merci de remplir les informations ci-dessous pour finaliser la
            création de votre compte.
          </p>
        </Col>
        <Row className="centerInscr">
          <Col md={8}>
            <Form.Group controlId="lastname">
              <Form.Control
                type="text"
                placeholder="Nom"
                name="lastname"
                onChange={this.handleInput}
                value={this.state.lastname}
              />
            </Form.Group>
            <Form.Group controlId="firstname">
              <Form.Control
                type="text"
                placeholder="Prénom"
                name="firstname"
                onChange={this.handleInput}
                value={this.state.firstname}
              />
            </Form.Group>
            <Form.Group controlId="date">
              <Form.Control
                type="date"
                placeholder="Date de naissance"
                name="date"
                onChange={this.handleInput}
                value={this.state.date}
              />
            </Form.Group>

            <Form.Group controlId="adress">
              <Form.Control
                type="text"
                placeholder="Adresse"
                name="adress"
                onChange={this.handleInput}
                value={this.state.adress}
              />
            </Form.Group>
            <Form.Group controlId="city">
              <Form.Control
                type="text"
                placeholder="Ville"
                name="city"
                onChange={this.handleInput}
                value={this.state.city}
              />
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Control
                type="text"
                placeholder="Telephone(Facultatif)"
                name="phone"
                onChange={this.handleInput}
                value={this.state.phone}
              />
            </Form.Group>
            <Form.Group controlId="staff">
              <Form.Control
                as="select"
                type="text"
                name="staff"
                onChange={this.handleInput}
                value={this.state.staff}
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
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={this.handleInput}
                value={this.state.password}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                className="checkboxCGUParrainage"
                type="checkbox"
                name="acceptControl"
                label="J'ai lu et j'accepte les CGU et CGV"
                onChange={this.handleInput}
                value={this.state.acceptControl}
                required
              />

              <a
                className="cgvLink"
                href="/CGV_TIPTOTHANK.pdf"
                target="_blanck"
              >
                CGU & CGV
              </a>
            </Form.Group>
            <Row className="centerInscr">
              <Col md={5} className="centerInscr">
                <Button
                  className="connectServeur"
                  variant="primary"
                  block
                  type="submit"
                  onClick={() => {
                    if (!this.state.acceptControl) {
                      this.setState({
                        message:
                          "Veuillez accepter les conditions générales d'utilisations.",
                      });
                    } else {
                      this.addNewRegister();
                    }
                  }}
                >
                  S'inscrire
                </Button>
              </Col>
            </Row>
            <p className="annonceParrainage">
              *TIPOURBOIRE est responsable du traitement des données
              personnelles collectées sur ce site. Elles sont collectées aux
              fins de : l'exécution du contrat/vous informer de nos nouveautés
              et actualités/à des fins statistiques, les bases légales
              respectives des traitements pouvant être l'exécution du contrat,
              l'intérêt légitime, ou le consentement. Pour plus d'informations
              voir notre politique de confidentialité.
            </p>
            <p>{this.state.message}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default InscriptionParrainage;
