import React, { Component } from "react";
import "./mesTips.css";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Moment from "react-moment";

class mesComs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mesComs: { commentaires: [] },
    };
  }

  getMesCommentaires = () => {
    console.log("coucou");

    const headers = new Headers({
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      Authorization: "bearer " + localStorage.getItem("token"),
    });

    const options = {
      method: "GET",

      headers: headers,
    };

    fetch(
      "https://back-end.osc-fr1.scalingo.io/serveur/mesCommentaires",
      options
    )
      .then((response) => {
        return response.json();
      })
      .then(
        (responseObject) => {
          const mesCommentaires = responseObject;

          this.setState({ mesComs: mesCommentaires });

          console.log(this.state.mesComs);
        },

        (error) => {
          console.log(error);
        }
      );
  };
  renderMesCommentaires = () => {
    if (!this.state.mesComs.commentaires.length) {
      return <h4 className="Nocoms">Vous n'avez pas encore de commentaires</h4>;
    } else {
      return this.state.mesComs.commentaires.map((element, index) => (
        <div className="divCom" key={index}>
          <div className="nomPrenom">
            <h2 className="prenomCom">{element.prenom}</h2>{" "}
            <h2 className="nomCom">{element.nom} </h2>
          </div>
          <div>
            <Moment format="DD/MM/YYYY, h:mm ">{element.date}</Moment>
          </div>
          <div>
            <p className="statut2">{element.texte}</p>
          </div>
        </div>
      ));
    }
  };

  componentDidMount() {
    this.getMesCommentaires();
  }

  render() {
    return (
      <Container className="mesComs">
        <Row>
          <Col>
            <h1 className="titreComs">Mes commentaires</h1>
          </Col>
        </Row>
        <Row className="commentaireBackground">
          <Col>{this.renderMesCommentaires()}</Col>
        </Row>
      </Container>
    );
  }
}

export default mesComs;
