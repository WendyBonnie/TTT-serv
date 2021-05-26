import React, { Component } from "react";
import "./monProfil.css";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import storage from "../firebase"





class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profil: { restaurant: {} },
      wallet: 1,
      history: [],
      stripeUrl: "",
      restaurant: [],
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
          console.log(this.state.profil);
        },

        (error) => {
          console.log(error);
        }
      );
  };

  deleteProfil = (e) => {
    window.confirm(
      "Etes-vous sur de vouloir supprimer votre compte? Cette action est irréversible."
    );
    e.preventDefault();
    const data = {
      userId:
        localStorage.getItem(
          "userID"
        ) /*on get l'Id qu'on a stocké durant la connexion*/,
      /*userID avec le ID en majuscule car c'est comme ca qu'on l'a mis dans le local storage (/connexion) */
      profil: this.state.profil,
    };

    const headers = new Headers({
      "Content-Type": "application/json",
      Authorization: "bearer " + localStorage.getItem("token"),
    });

    const options = {
      method: "DELETE",
      body: JSON.stringify(data),
      headers: headers,
    };

    fetch("https://back-end.osc-fr1.scalingo.io/serveur/delete", options)
      .then((response) => {
        return response.json();
      })
      .then(
        (responseObject) => {
          this.setState({ message: responseObject.message });
          alert(
            "La suppression de votre compte a bien été prise en compte. Merci."
          );
          this.props.history.push("/connexion");
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
          console.log(this.state.restaurant);
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
        this.state.profil.email,
      options
    )
      .then((response) => {
        return response.json();
      })

      .then((responseData) => {
        this.setState({ message: responseData.message });
      });
  };
  componentDidMount() {
    this.getMonProfil();
    this.getRestaurantList();
  }
  renderCompteReferent = () => {
    if (this.state.profil.mangoWalletReferent) {
      return (
        <Button className="lienCommentaire" href="/referent">
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

  render() {
    return (
      <Container className="contain parrainage">
        {/* {this.abonnement()}*/}
        <Row className="mescartes">
          <Col className="mesdetails" sm={12} md={12}>
            <Col s={6} md={12} className="colPhoto">
              <Image
                className="photoProfil"
                src={
                  "https://back-end.osc-fr1.scalingo.io" +
                  this.state.profil.picture
                }
                roundedCircle
              />
            </Col>
            <div className="infoProfil">
              <h1>
                {this.state.profil.firstname} {this.state.profil.lastname}
              </h1>

              <h3 className="titreNice">{this.state.profil.staff}</h3>
              <p className="profilPara">{this.state.profil.adress}</p>
              <p className="profilPara">{this.state.profil.city}</p>

              <p className="profilPara">{this.state.profil.email} </p>
              <p className="profilParafin">{this.state.profil.phone}</p>
            </div>
          </Col>
          <Col className="monrestaurant" sm={12} md={12}>
            <h1 className="ligne">Mes restaurants </h1>
            {this.renderMesRestau()}
          </Col>
        </Row>
        <Row>
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
          </Col>
        </Row>

        <Row className="rowButton">
          <Col xs={12} md={6} lg={6}>
            <button className="buttonAbo" onClick={this.infoStripe}>
              Mes pourboires individuels
            </button>
          </Col>
          <Col xs={12} s={12} md={6} lg={6}>
            <Button className="buttonAbo" href="/cagnotte">
              Mes pourboires collectifs
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={6} lg={6}>
            <Button className="lienCommentaire" href="/monAbonnement">
              Souscrire l'abonnement premium
            </Button>
          </Col>
          <Col classeName="colModifier" md={6} lg={6}>
            <Link to="/modifierMonProfil" className="modif">
              <button className="buttonModifier lienCommentaire">
                Modifier mon profil
              </button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col xs={12} s={12} md={6} lg={6}>
            <Button className="lienCommentaire" href="/mesTips">
              Mes commentaires
            </Button>
          </Col>
          <Col xs={12} s={12} md={6} lg={6}>
            <Button className="lienCommentaire" href="/mesHistoriques">
              Mes pourboires encaissés
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>{this.renderCompteReferent()}</Col>
        </Row>
      </Container>
    );
  }
}

export default Profil;
