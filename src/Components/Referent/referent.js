import React, { Component } from "react";
import "./referent.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import "@brainhubeu/react-carousel/lib/style.css";
import Carousel, { Dots } from "@brainhubeu/react-carousel";

class referent extends Component {
  constructor(props) {
    super(props);
    this.state = { waiter: { tabServeur: [] }, referent: [] };
  }
  change = (event) => {
    let referent = this.state.referent;
    referent[event.target.name] = event.target.value;
    this.setState({
      referent: referent,
      // identifier name de l'input = choisir la valeur qui se trouve dans l'input donc necessité d'avoir le bon name!!
    });
  };
  getReferentWallet = () => {
    const headers = new Headers({
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    });

    const options = {
      method: "GET",
      headers: headers,
    };

    fetch(
      "https://back-end.osc-fr1.scalingo.io/serveur/referentWallet",
      options
    )
      .then((response) => {
        return response.json();
      })
      .then(
        (responseObject) => {
          const amount = responseObject;
          this.setState({ amount: amount });
        },

        (error) => {
          console.log(error);
        }
      );
  };
  getWaiterList = () => {
    const headers = new Headers({
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    });

    const options = {
      method: "GET",
      headers: headers,
    };

    fetch("https://back-end.osc-fr1.scalingo.io/serveur/waiterList", options)
      .then((response) => {
        return response.json();
      })
      .then(
        (responseObject) => {
          this.setState({ waiter: responseObject });
          console.log("object", responseObject);
        },

        (error) => {
          console.log(error);
        }
      );
  };

  componentShouldUpdate() {
    this.getWaiterList();
    console.log("serveur", this.state.waiter.tabServeur, this.state.referent);
  }

  renderMesServeurs = () => {
    return this.state.waiter.tabServeur.map((element) => {
      return (
        <Col className="nameServ" xs={12} s={12} md={6}>
          <h3>
            <strong>
              {element.serveurName}
              {""}
              {element.serveurLastName}
            </strong>
          </h3>
          <br />
          <Form>
            <Form.Control
              type="number"
              placeholder="Montant du transfert"
              name="amount"
              onChange={this.change}
            />
          </Form>
          <Button
            className="CollectButton"
            type="submit"
            onClick={() => {
              const headers = new Headers({
                "Content-Type": "application/json",
                Authorization: "bearer " + localStorage.getItem("token"),
              });
              const data = {
                email: element.serveurMail,
                amount: this.state.referent.amount,
              };
              const options = {
                method: "POST",
                headers: headers,
                body: JSON.stringify(data),
              };

              fetch(
                "https://back-end.osc-fr1.scalingo.io/serveur/referentTransfert",
                options
              )
                .then((response) => {
                  return response.json();
                })
                .then(
                  (data) => {
                    this.setState({ message: data.message });
                    this.getReferentWallet();
                  },

                  (error) => {
                    console.log(error);
                  }
                );
            }}
          >
            Envoyer
          </Button>
        </Col>
      );
    });
  };

  componentDidMount() {
    this.getReferentWallet();
    this.getWaiterList();
  }

  render() {
    return (
      <Container className="mesHisto">
        <Row className="commentaireHisto">
          <Col xs={12} s={12} md={12}>
            <h1>Montant du pot commun :</h1>
            <h2 className="montantCo">
              <strong>
                {this.state.amount ? this.state.amount / 100 : 0} euros
              </strong>
            </h2>
            <p>
              Les frais de gestion seront automatiquement prélevés de la part
              distribuée à chaque bénéficiaire.
            </p>
            <h1>Liste des bénéficiaires:</h1>
          </Col>
        </Row>

        <Row className="rowServeurCo">{this.renderMesServeurs()}</Row>
        <p style={{ textAlign: "center" }}>{this.state.message}</p>
      </Container>
    );
  }
}

export default referent;
