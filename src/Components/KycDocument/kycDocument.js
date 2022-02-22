import React, { Component } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./kycDocument.css";

class kycDocument extends Component {
  constructor(props) {
    super(props);
    this.state = {
      document: {},
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
      country: this.state.country,
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
        this.setState({ messageTransfert: responseData.messageTransfert });
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
        console.log("ezeza", responseData);
        if (responseData.success == false) {
          window.alert(
            "Une erreur s'est produite, veuillez réessayer. Pensez à vérifier la/les taille(s) de votre/vos image(s)"
          );
        } else {
          console.log(responseData);
          window.alert(
            "Vos documents ont bien été envoyés une réponse vous sera fourni dans les 24 heures."
          );
        }
      });
  };

  checkKyc = () => {
    console.log("coucouuuu");
    const headers = new Headers({
      "Content-Type": "application/json",
      Authorization: "bearer " + localStorage.getItem("token"),
    });

    const options = {
      method: "get",

      headers: headers,
    };

    fetch("https://back-end.osc-fr1.scalingo.io/serveur/kyc-statut", options)
      .then((response) => {
        return response.json();
      })

      .then((responseData) => {
        console.log("kyc", responseData);
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

    fetch("https://back-end.osc-fr1.scalingo.io/serveur/monProfil", options)
      .then((response) => {
        return response.json();
      })
      .then(
        (responseObject) => {
          const monProfil = responseObject;
          this.setState({ profil: monProfil });
          console.log("KYC statut", this.state.profil.kycStatut);
        },

        (error) => {
          console.log(error);
        }
      );
  };

  componentDidMount() {
    this.checkKyc();
    this.getMonProfil();
  }
  render() {
    return (
      <Container className="cagnotteCont">
        <Row className="rowId">
          <Col>
            <div className="kyc">
              <form onSubmit={this.onSubmit}>
                <p className="titleKyc">Confirmation d'identité </p>
                <p>
                  ( Vous pouvez mettre deux images/document PDf maximum 32 Kb
                  taille maximum: 10Mb )
                </p>
                <input
                  enctype="multipart/form-data"
                  className="chargePic"
                  type="file"
                  name="file"
                  multiple
                  accept="image/png, image/jpeg, image/jpg, image/pdf , application/pdf"
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
                  ? " Document refusé veuillez vous assurer que la carte d'identité n'ai pas été retouché et que le recto et le verso soit bien visible sur la même page."
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

              <Form.Control
                as="select"
                type="text"
                name="country"
                onChange={this.handleInput}
                value={this.state.country}>
                <option>FR</option>
                <option>DE</option>
                <option>LT</option>
                <option>GB</option>
                <option>AT</option>
                <option>BE</option>
                <option>BG</option>
                <option>CY</option>
                <option>DK</option>
                <option>ES</option>
                <option>EE</option>
                <option>FI</option>
                <option>GR</option>
                <option>HU</option>
                <option>IE</option>
                <option>IT</option>
                <option>LV</option>
                <option>LU</option>
                <option>MT</option>
                <option>NL</option>
                <option>PL</option>
                <option>PT</option>
                <option>CZ</option>
                <option>RO</option>
                <option>SK</option>
                <option>SI</option>
                <option>SE</option>
              </Form.Control>
            </Form>
            <Button
              className="butBankAcc"
              type="submit"
              onClick={this.addBankAccount}>
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

export default kycDocument;
