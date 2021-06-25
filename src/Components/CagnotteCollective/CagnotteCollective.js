import { Alert } from "bootstrap";
import React, { Component } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./CagnotteCollective.css";

class CagnotteCollective extends Component {
  constructor(props) {
    super(props);
    this.state = {
      document: {},
      amount: 0,
      profil: {},
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
        if (responseData.Type === "param_error") {
          window.alert("Une erreur s'est produite, veuillez réessayer.");
        } else {
          window.alert(
            "Votre compte bancaire à bien été enregistré vous pouvez maintenant retirer votre argent."
          );
        }
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

    fetch("http://localhost:8080/serveur/mangoKYC", options)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        if (responseData.Type === "param_error") {
          window.alert("Une erreur s'est produite, veuillez réessayer.");
        } else {
          console.log(responseData);
          window.alert(
            "Vos documents ont bien été envoyés une réponse vous sera fourni dans les 24 heures."
          );
        }
      });
  };

  checkKyc = () => {
    const headers = new Headers({
      "Content-Type": "application/json",
      Authorization: "bearer " + localStorage.getItem("token"),
    });

    const options = {
      method: "get",

      headers: headers,
    };

    fetch("http://localhost:8080/serveur/kyc-statut", options)
      .then((response) => {
        return response.json();
      })

      .then((responseData) => {
        console.log(responseData[0].Status);
      });
  };
  getMonProfil = () => {
    const headers = new Headers({
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    });

    const options = {
      method: "GET",
      headers: headers,
    };

    fetch("http://localhost:8080/serveur/monProfil", options)
      .then((response) => {
        return response.json();
      })
      .then(
        (responseObject) => {
          const monProfil = responseObject;
          this.setState({ profil: monProfil });
          console.log("dsqdsqdsqwsxdqsddqsdsq", this.state.profil.kycStatut);
        },

        (error) => {
          console.log(error);
        }
      );
  };

  componentDidMount() {
    this.getWalletAmount();
    this.checkKyc();
    this.getMonProfil();
  }
  render() {
    return (
      <Container className="cagnotteCont">
        <Row className="rowCagn">
          <Col>
            <h1>Montant des pourboires collectifs :</h1>
            <h2>
              <strong>{this.state.amount / 100} euros</strong>
            </h2>
            <Button onClick={this.payoutMangoPay}>Retirer votre argent</Button>
          </Col>
        </Row>
        <Row className="rowPasDeCagn">
          <Col>
            <h5 className="rappelKYC">
              {" "}
              Pas encore de cagnotte pour percevoir vos pourboires collectifs ?
              Suivez les étapes ci-dessous !
            </h5>
          </Col>
        </Row>
        <Row className="rowId">
          <Col>
            <div className="kyc">
              <form onSubmit={this.onSubmit}>
                <p className="titleKyc">Confirmation d'identité </p>
                <p>
                  ( Recto Verso sur la même page, taille minimum: 32 Kb taille
                  maximum: 10Mb )
                </p>
                <input
                  className="chargePic"
                  type="file"
                  name="file"
                  multiple
                  accept="image/png, image/jpeg, image/jpg, image/pdf"
                />

                <Button type="submit">Télécharger</Button>
              </form>
              {this.state.message}
            </div>
          </Col>

          <div className="kycStatut">
            <p className="kycTitleStatut">Statut de vos documents:</p>
            <div className="statut">
              <p className="statutValid">
                {this.state.profil.kycStatut === "VALIDATED" ? "Validé" : ""}
              </p>
              <p className="statutRefused">
                {this.state.profil.kycStatut === "REFUSED"
                  ? "Refusé veuillez contactez le support: contact@tipourboire.com"
                  : ""}
              </p>
              <p className="statutIn">
                {this.state.profil.kycStatut !== "REFUSED" &&
                this.state.profil.kycStatut !== "VALIDATED"
                  ? "En Cours"
                  : ""}
              </p>
            </div>
          </div>
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
                placeholder="Votre région, PACA, AQUITAINE, BRETAGNE... "
                name="region"
                onChange={this.handleInput}
                value={this.state.region}
              />

              <Form.Control
                type="text"
                placeholder="Votre IBAN, FRXXXXXXXXXXXXXXXXXX"
                name="iban"
                onChange={this.handleInput}
                value={this.state.iban}
              />
            </Form>
            <Button
              className="butBankAcc"
              type="submit"
              onClick={this.addBankAccount}
            >
              Envoyez vos informations bancaires
            </Button>
            <br />
            <br />
            {this.state.messageBA}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CagnotteCollective;
