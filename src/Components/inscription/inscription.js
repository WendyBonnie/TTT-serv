import React, { Component, useReducer } from "react";
import "./inscription.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { useLocation } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

class Inscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inscrit: "",
      gestioName: "",
      gestioID: "",
    };
  }

  componentDidMount() {
    let inscrit = new URLSearchParams(window.location.search).get("subscribe");
    let gestioName = new URLSearchParams(window.location.search).get(
      "gestioName"
    );
    let gestioID = new URLSearchParams(window.location.search).get(
      "gestionnaireID"
    );

    this.setState({ inscrit: inscrit });
    this.setState({ gestioName: gestioName });
    this.setState({ gestioID: gestioID }, () => {
      console.log(this.state, gestioID);
    });
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
      postalCode: this.state.code,
      date: this.state.date,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
      acceptControl: this.state.acceptControl,
      subscribe: this.state.inscrit,
      gestioName: this.state.gestioName,
      gestioID: this.state.gestioID,
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
          console.log(responseObject.success);
          this.setState({ message: responseObject.message });
        },

        (error) => {
          console.log(error);
        }
      );
  };

  test = () => {
    console.log("fdsfdsf", this.state);
  };
  render() {
    return (
      <Container className="inscr">
        {this.test()}
        <Row className="RowInscr">
          <Col md={12} className="Titre" sm={12}>
            <h1 className="titreh1">Créer mon compte </h1>
            <p className="Titrep">
              Merci de remplir les informations ci-dessous pour finaliser la
              création de votre compte.
            </p>
          </Col>
          <Row className="centerInscr">
            <Col md={9}>
              <Form onSubmit={this.addNewRegister}>
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
                    placeholder="jj/mm/aaaa"
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
                <Form.Group controlId="code">
                  <Form.Control
                    type="text"
                    placeholder="Code Postal"
                    name="code"
                    onChange={this.handleInput}
                    value={this.state.code}
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

                {/*     <Form.Group controlId="staff">
                  <Form.Control
                    as="select"
                    type="text"
                    name="staff"
                    onChange={this.handleInput}
                    value={this.state.staff}
                    className="tailleInscr"
                  >
                    <option>-</option>
                    <option>Manager (Pas de bourboire)</option>
                    <option>Commis</option>
                    <option>Chef de rang</option>
                    <option>Maître d'hôtel</option>
                    <option>Barman</option>
                    <option>Cuisinier</option>
                    <option>Accueil</option>
                  </Form.Control>
                </Form.Group>
    */}
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
                  <Form.Check
                    className="checkboxCGU"
                    type="checkbox"
                    name="acceptControl"
                    label="J'ai lu et j'accepte les CGU et CGV"
                    onChange={this.handleInput}
                    value={this.state.acceptControl}
                    required
                  />

                  <a className="cgvLink" href="/CGU/CGA.pdf" target="_blanck">
                    CGU & CGA
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
              </Form>

              <p className="annonce">
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
        </Row>
      </Container>
    );
  }
}
export default Inscription;
