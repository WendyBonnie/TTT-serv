import React, { Component } from "react";
import { Button, Container,Row,Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./CagnotteCollective.css";

class CagnotteCollective extends Component {
  constructor(props) {
    super(props);
    this.state = {
      document: {},
    };
  }
  addBankAccount = (e) => {
    e.preventDefault();
    const data = {
      adress: this.state.adress,
      password: this.state.password,
      city: this.state.city,
      region: this.state.region,
      zip: this.state.zip,
      iban: this.state.iban,
    };

    const headers = new Headers({
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      Authorization: "Bearer " + localStorage.getItem("token"),
    });

    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: headers,
    };

    fetch("https://back-end.osc-fr1.scalingo.io/serveur/mangoBank", options)
      .then((response) => {
        return response.json();
      })

      .then((responseData) => {
        console.log(responseData);
      });
  };

  payoutMangoPay = (e) => {
    e.preventDefault();
    const data = {
      adress: this.state.adress,
      password: this.state.password,
      city: this.state.city,
      region: this.state.region,
      zip: this.state.zip,
      iban: this.state.iban,
    };

    const headers = new Headers({
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      Authorization: "Bearer " + localStorage.getItem("token"),
    });

    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: headers,
    };

    fetch("https://back-end.osc-fr1.scalingo.io/serveur/payoutMango", options)
      .then((response) => {
        return response.json();
      })

      .then((responseData) => {
        console.log(responseData);
      });
  };

  change = (event) => {
    let document = this.state.document;
    document[event.target.name] = event.target.value;
    this.setState({
      document: document,
      // identifier name de l'input = choisir la valeur qui se trouve dans l'input donc necessité d'avoir le bon name!!
    });
  };
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  getWalletAmount = () => {
    const headers = new Headers({
      "Content-Type": "application/json",
      Authorization: "bearer " + localStorage.getItem("token"),
    });

    const options = {
      method: "get",

      headers: headers,
    };

    fetch("https://back-end.osc-fr1.scalingo.io/serveur/getWalet", options)
      .then((response) => {
        return response.json();
      })

      .then((responseData) => {
        this.setState({ amount: responseData });
      });
  };

  onSubmit = (e) => {
    e.preventDefault();

    let base64 = new FormData(e.target);

    const data = base64;

    const headers = new Headers({
      Authorization: "bearer " + localStorage.getItem("token"),
    });

    const options = {
      method: "POST",
      body: data,
      headers: headers,
    };

    fetch("https://back-end.osc-fr1.scalingo.io/serveur/mangoKYC", options)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        this.setState({ message: responseData.message });
      });
  };

  componentDidMount() {
    this.getWalletAmount();
  }
  render() {
    return (
      <Container className='cagnotteCont'>
        <Row className='rowCagn'>
          <Col>
          <h1>
          Montant de votre cagnotte : 
          </h1>
          <h2><strong>{this.state.amount/100} euros</strong></h2>
          <Button onClick={this.payoutMangoPay}>Retirer votre argent</Button>
          </Col>
        </Row>
        <Row className='rowPasDeCagn'>
          <Col>
          <h5> Pas encore de cagnotte ? Suivez les étapes ci-dessous !</h5>
          </Col>
        </Row>
        <Row className='rowId'>
          <Col>
          <form onSubmit={this.onSubmit}>
            <h3>Confirmation d'identité </h3>
            <h5>(Recto Verso sur la même page)</h5>
            <input className="chargePic" type="file" name="file" />

            <Button type="submit">Télécharger</Button>
          </form>
          </Col>
        </Row>
        <Row>
          <Col>
          <Form>
          <Form.Control
            type="text"
            placeholder="Votre Adresse"
            name="adress"
            onChange={this.handleInput}
            value={this.state.adress}
          />
          <Form.Control
            type="text"
            placeholder="Code Postal"
            name="zip"
            onChange={this.handleInput}
            value={this.state.zip}
          />
          <Form.Control
            type="text"
            placeholder="Ville"
            name="city"
            onChange={this.handleInput}
            value={this.state.city}
          />
          <Form.Control
            type="text"
            placeholder="Votre Région"
            name="region"
            onChange={this.handleInput}
            value={this.state.region}
          />

          <Form.Control
            type="text"
            placeholder="Votre IBAN"
            name="iban"
            onChange={this.handleInput}
            value={this.state.iban}
          />
        </Form>
        <Button variant="primary" type="submit" onClick={this.addBankAccount}>
          Envoyez les informations banquaires
        </Button>
          </Col>
        </Row>
  
      </Container>
    );
  }
}

export default CagnotteCollective;
