import React, { Component } from "react";
import "./meshistoriques.css";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";

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
            <tr>
            <td type="text" id="montant" name="montant">
              {" "}
              {element.amount / 100}€
            </td>
            <td type="date" id="date" name="date">
              {" "}
              {new Date(element.date).toLocaleDateString()}
            </td>
          </tr>
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

    fetch("https://back-end.osc-fr1.scalingo.io/serveur/monProfil", options)
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
        <Row class="table-responsive-sm">
        <Table class="table-responsive-sm" striped hover>
        <thead>
      <tr>
        <th>Montant</th>
        <th>Date</th>
  
      </tr>
      </thead>
        <tbody>
        {this.renderMesHistory()}
        </tbody>
      </Table>
      </Row>
      </Container>
    );
  }
}

export default mesHistoriques;
