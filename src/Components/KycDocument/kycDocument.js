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
      country: "FR",
      ribOrNot: false,
      kycOrNot: false,
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
        console.log("RSData", responseData);
        if (responseData.Type === "param_error") {
          window.alert("Une erreur s'est produite, veuillez réessayer.");
        } else if (responseData.Type == "iban") {
          window.alert("Veuillez vérifier votre IBAN.");
        } else if (responseData.Type == "postal") {
          window.alert("Veuillez vérifier votre code postal.");
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
          this.checkKyc();
          this.getMonProfil();
          window.alert(
            "Vos documents ont bien été envoyés. Une réponse vous sera fournie dans les 24 heures."
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

    fetch("http://localhost:8080/serveur/kyc-statut", options)
      .then((response) => {
        return response.json();
      })

      .then((responseData) => {
        console.log("kyc", responseData);
      });
  };

  /**
   * Render Formulaire RIB
   */
  renderFormulaireRib = () => {};

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
          console.log("Response", responseObject);
          const monProfil = responseObject;
          this.setState({ adress: responseObject.adress });
          this.setState({ zip: responseObject.postalCode });
          this.setState({ city: responseObject.city });
          this.setState({ profil: monProfil });
          console.log("KYC statut", this.state.profil.kycStatut);
          if (monProfil.mangoBankAcc) {
            this.setState({ ribOrNot: true });
          } else {
            this.setState({ ribOrNot: false });
          }

          if (monProfil.kycStatut == "VALIDATED") {
            this.setState({ kycOrNot: true });
          } else {
            this.setState({ ribOrNot: false });
          }
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
          {!this.state.kycOrNot ? (
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
          ) : null}

          <div className="kycStatut">
            <p className="kycTitleStatut">Statut de vos documents:</p>
            <div className="statut">
              <p className="statutIn">
                {!this.state.profil.kycStatut ? "Pas de document" : ""}
              </p>
              <p className="statutValid">
                {this.state.profil.kycStatut === "VALIDATED" ? "Validé" : ""}
              </p>
              <p className="statutRefused">
                {this.state.profil.kycStatut === "REFUSED"
                  ? " Document refusé veuillez vous assurer que la carte d'identité ou le passeport n'ai pas été retouchées et que le recto et le verso soient bien visibles sur la/les page(s)."
                  : ""}
              </p>
              <p className="statutIn">
                {this.state.profil.kycStatut === "VALIDATION_ASKED" ||
                this.state.profil.kycStatut === "EN COURS"
                  ? "En Cours"
                  : ""}
              </p>
            </div>
          </div>
        </Row>

        <Row style={{ textAlign: "center", justifyContent: "center" }}>
          {
            // SI le state ribOrNot is true on affiche le formulaire sinon on affiche un bouton
            !this.state.ribOrNot ? (
              <Col>
                <Form>
                  <Form.Control
                    defaultValue={this.state.profil.adress}
                    type="text"
                    placeholder="Votre Adresse"
                    name="adress"
                    onChange={this.handleInput}
                    value={this.state.adress}
                  />
                  <Form.Control
                    defaultValue={this.state.profil.postalCode}
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
                    value={this.state.country}
                  >
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
                  onClick={this.addBankAccount}
                >
                  Envoyez vos informations bancaires
                </Button>
                <br />
                <br />
                {this.state.messageBA}
              </Col>
            ) : (
              <Button
                onClick={() => {
                  this.setState({ ribOrNot: false });
                }}
              >
                Changer votre RIB
              </Button>
            )
          }
        </Row>
      </Container>
    );
  }
}

export default kycDocument;
