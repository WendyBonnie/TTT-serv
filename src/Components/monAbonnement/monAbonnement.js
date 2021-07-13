import React, { Component } from "react";
import "./monAbonnement.css";
import { Link, Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import CheckoutForm from "../monAbonnement/checkoutForm";

//import "./monAbonnement.css";

const stripePromise = loadStripe(
  "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"
);

class Abonnement extends Component {
  render() {
    return (
      <Container className="monAbonnement">
        <Row className="infoAbonnement">
          <Col>
            <h3>Votre abonnement premium serveur TIPOURBOIRE</h3>
            <Elements className="cbInput" stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Abonnement;
