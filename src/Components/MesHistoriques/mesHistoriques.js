import React, { Component } from "react";
import "./meshistoriques.css";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class mesHistoriques extends Component {
  constructor(props) {
    super(props);
    this.state = { profil: { restaurantName: {} }, wallet: 1, history: [] };
  }
   
  

  
  renderMesHistory = () => {
    if (Array.isArray(this.state.profil.history)) {
      if (this.state.profil.history.length > 0) {
        return this.state.profil.history.map((element, index) => {
          return (
            <div className={"historique"} key={index}>
              <p className={"pourboire"}>
                vous avez reçu {element.amount}€ le {element.date}.
              </p>
            </div>
          );
        });
      } else {
        return (
          <p className="pourboire">
            Vous n'avez reçu aucun pourboire pour l'instant.
          </p>
        );
      }
    }
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
          console.log(this.state.profil);
        },

        (error) => {
          console.log(error);
        }
      );
  };

  

  componentDidMount() {
      this.getMonProfil();
  
  }

  render() {
    return (
      <Container className="mesHisto">
        <Row>
          <Col>
            <h1 className='titreHisto'>Mes Historiques de pourboires</h1>
          </Col>
        </Row>
        <Row className="commentaireHisto">
          <Col>{this.renderMesHistory()}</Col>
        </Row>
      </Container>
    );
  }
}

export default mesHistoriques;
