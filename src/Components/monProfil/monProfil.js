import React, { Component, useEffect, useState } from "react";
import "./monProfil.css";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { Button, Modal } from "react-bootstrap";
import storage from "../firebase";

function Tuto() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  /** push */
  return (
    <>
      <Button className="buttonTuto" onClick={handleShow}>
        Etapes obligatoires{" "}
        <Button onClick={handleShow} className="flecheTuto">
          {">"}
        </Button>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        animation={true}
        backdrop="static"
        keyboard={false}>
        <Modal.Body>
          <p className="paraTuto">
            <Modal.Title>Comment bénéficier de mes pourboires ?</Modal.Title>
            <br />
            <br />
            Afin d'activer votre compte Tipourboire et permettre à vos clients
            de vous remercier pour la qualité de votre service
            <br />
            C'est simple, il vous suffit :
            <br />
            D'insérer votre photo dans votre espace personnel sécurisé
            <br />
            De renseigner vos coordonnées bancaires
            <br />
            et de charger votre pièce d'identité
            <br />
            dans l'espace "Mes documents"
            <br />
            en suivant bien les instructions
            <br />
            <br />
            Bravo, vous pouvez désormais bénéficier
            <br />
            de nos services et booster vos pourboires !
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="modalButton"
            variant="secondary"
            onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profil: { restaurant: {} },
      wallet: 1,
      history: [],
      stripeUrl: "",
      restaurant: [],
      showModal: false,
    };
  }

  abonnement = () => {
    let ID = this.state.profil.stripeId;
    console.log(ID);
    if (ID === null) {
      alert("vous devez vous abonner pour bénéficier de l'app");
    }
    return;
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  /*  renderButtonUnSub = () => {
    let abonne = this.state.profil.abonne;
    if (abonne === true) {
      return (
        <Button
          className="buttonModifier lienCommentaire"
          onClick={() => {
            this.setState({ showModal: true });
          }}
        >
          Résilier mon abonnement
        </Button>
      );
    } else {
      return (
        <Button
          className="buttonModifier lienCommentaire"
          href="/monAbonnement"
        >
          Souscrire à l'abonnement premium
        </Button>
      );
    }
  };*/
  unSubscribe = () => {
    const headers = new Headers({
      "Content-Type": "application/json",
      /**on ajoute  pour l'AUTHENTIFICATION le header autorization qui a comme valeur bearer(puis espace) suivi par le token de l'user */
      Authorization: "bearer " + localStorage.getItem("token"),
    });

    const options = {
      method: "DELETE",
      headers: headers,
    };

    fetch("https://back-end.osc-fr1.scalingo.io/serveur/unsubscribe", options)
      .then((response) => {
        return response.json();
      })
      .then(
        (responseObject) => {
          this.setState({ message: responseObject.message });
          this.setState({ showModal: false });
          this.getMonProfil();
        },

        (error) => {
          console.log(error);
        }
      );
  };

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

    fetch("https://back-end.osc-fr1.scalingo.io/serveur/monProfil", options)
      .then((response) => {
        return response.json();
      })
      .then(
        (responseObject) => {
          const monProfil = responseObject;
          this.setState({ profil: monProfil });
        },

        (error) => {
          console.log(error);
        }
      );
  };

  deleteAffiliation = (e) => {
    const data = {};

    const headers = new Headers({
      "Content-Type": "application/json",
      Authorization: "bearer " + localStorage.getItem("token"),
    });

    const options = {
      method: "DELETE",
      body: JSON.stringify(data),
      headers: headers,
    };

    fetch("https://back-end.osc-fr1.scalingo.io/serveur/deleteWaiter", options)
      .then((response) => {
        return response.json();
      })
      .then(
        (responseObject) => {
          this.getWaiterList();
        },

        (error) => {
          console.log(error);
        }
      );
  };
  infoStripe = () => {
    const headers = new Headers({
      "Content-Type": "application/json",
      Authorization: "bearer " + localStorage.getItem("token"),
    });

    const options = {
      method: "get",

      headers: headers,
    };

    fetch(
      "https://back-end.osc-fr1.scalingo.io/serveur/customerAccount",
      options
    )
      .then((response) => {
        return response.json();
      })

      .then((responseData) => {
        window.open(responseData, "_blank");
      });
  };
  // Récupération des données du serveur / restaurantName
  getRestaurantList = () => {
    const headers = new Headers({
      Authorization: "bearer " + localStorage.getItem("token"),
    });

    const options = {
      method: "GET",
      headers: headers,
    };

    fetch(
      "https://back-end.osc-fr1.scalingo.io/serveur/restaurantList",
      options
    )
      .then((response) => {
        return response.json();
      })
      .then(
        (data) => {
          this.setState({ restaurant: data });
        },
        (err) => {
          console.log(err);
        }
      );
  };
  postParrainage = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
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

    fetch(
      "https://back-end.osc-fr1.scalingo.io/serveur/emailParrainage?_id=" +
        this.state.email +
        "&mailSender=" +
        this.state.profil.email,
      options
    )
      .then((response) => {
        return response.json();
      })

      .then((responseData) => {
        this.setState({ messageParrainage: responseData.message });
      });
  };
  componentDidMount() {
    this.getMonProfil();
    this.getRestaurantList();
  }
  renderCompteReferent = () => {
    if (this.state.profil.mangoWalletReferent) {
      return (
        <Button className=" referentButton" href="/referent">
          Mon compte Référent
        </Button>
      );
    }
  };
  renderMesRestau = () => {
    if (!this.state.restaurant.length) {
      return (
        <h4 className="Nocoms">
          Vous n'êtes pas encore affilié à un restaurant
        </h4>
      );
    } else {
      return this.state.restaurant.map((element) => {
        return (
          <div className="articles">
            <h4 className="titre">{element.restaurantName}</h4>
          </div>
        );
      });
    }
  };
  modalUnsubscribe = () => {
    return (
      <Modal
        show={this.state.showModal}
        onHide={() => {
          this.setState({ showModal: false });
        }}>
        <Modal.Header closeButton>
          <Modal.Title className="modalTitle">
            Résiliation abonnement
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          Etes vous sur de vouloir résilier votre abonnement Tipourboire ?{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="modalButton"
            variant="secondary"
            onClick={() => {
              this.unSubscribe();
            }}>
            Résilier
          </Button>
          <Button
            className="modalButton"
            variant="primary"
            onClick={() => {
              this.setState({ showModal: false });
            }}>
            Annuler
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  render() {
    return (
      <Container className="contain parrainage">
        {/* {this.abonnement()}*/}
        {this.modalUnsubscribe()}
        <Row className="mescartes">
          <Col className="mesdetails" sm={12} md={12}>
            <Row className="centerPic">
              <Col s={6} md={8} className="colPhoto">
                <Image
                  className="photoProfil"
                  src={
                    "https://s3.amazonaws.com/b.c.bucket.tipourboire/" +
                    this.state.profil.picture
                  }
                  roundedCircle
                />
              </Col>
            </Row>
            <Col md={{ span: 9, offset: 7 }} className="colTuto">
              <Tuto />
            </Col>
            <div className="infoProfil">
              <h1 className="titreNice">Bienvenue</h1>
              <h1>
                {this.state.profil.firstname} {this.state.profil.lastname}
              </h1>

              {/* <h3 className="titreNice">{this.state.profil.staff}</h3>
              <p className="profilPara">{this.state.profil.adress}</p>
              <p className="profilPara">{this.state.profil.city}</p>

              <p className="profilPara">{this.state.profil.email} </p>
              <p className="profilParafin">{this.state.profil.phone}</p>*/}
            </div>
          </Col>

          <Col className="monrestaurant" sm={12} md={12}>
            <h1 className="ligne">Mes établissements de rattachement </h1>
            {this.renderMesRestau()}
          </Col>
        </Row>
        {/*<Row>
          <Col className="colParrainage">
            <Col md={12}>
              <label className="demandeParrainage">
                Parrainer un Serveur et/ou Restaurateur
              </label>
            </Col>
            <input
              type="text"
              name="email"
              onChange={this.handleInput}
              placeholder="Email du parrainé"
              className="inputParrainage"
            />

            <input
              type="submit"
              value="Envoyer"
              onClick={this.postParrainage}
              className="buttonParrainage"
            />

            <p className="infoParrainage">
              " Vous êtes satisfaits : parlez-en autour de vous ! A chaque
              parrainage d'un serveur ou d'un restaurateur, vous et votre ami,
              gagnez 2 mois d'abonnements Premium "
            </p>
            {this.state.messageParrainage}
          </Col>
        </Row>*/}

        <Row className="rowButton">
          <Col xs={12} s={12} md={6} lg={6}>
            <Button className="buttonAbo" href="/cagnotte">
              Mes pourboires
            </Button>
          </Col>
          <Col xs={12} s={12} md={6} lg={6}>
            <Button
              className="buttonModifier marginPhone  "
              href="/mesHistoriques">
              Mon historique de pourboire
            </Button>
          </Col>
        </Row>
        <Row className="rowDocument">
          <Col xs={12} md={6} lg={6}>
            <Button className="buttonAbo " href="/mesDocuments">
              Mes documents
            </Button>
          </Col>

          <Col classeName="colModifier" xs={12} md={6} lg={6}>
            <Link to="/modifierMonProfil" className="modif">
              <button className="buttonModifier ">Modifier mon profil</button>
            </Link>
          </Col>
        </Row>
        <Row className="rowHisto">
          <Col md={6} lg={6}>
            <Button className="buttonModifier lienCommentaire" href="/mesTips">
              Mes commentaires reçus
            </Button>
          </Col>
          <Col sm={12} md={6} lg={6}>
            {this.renderCompteReferent()}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Profil;
