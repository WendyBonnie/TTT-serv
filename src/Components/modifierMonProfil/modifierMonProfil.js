import React, { Component, useState, useEffect } from "react";
import "./modifierMonProfil.css";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import storage from "../firebase";

function UploadPicture() {
  const [imageStorage, setImageStorage] = useState("");
  const [message, setMessage] = useState("");

  const uploadpicture = (e) => {
    if (imageStorage == null) return;
    storage
      .ref(`/PictureServeur/${imageStorage.name}`)
      .put(imageStorage)

      .on("state_changed", alert("Votre logo a bien été enregistré"), alert);
  };

  const getMonProfil = () => {
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
        (responseObject) => {},

        (error) => {
          console.log(error);
        }
      );
  };

  const modifProfilLogo = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    const headers = new Headers({
      "X-Requested-With": "XMLHttpRequest",
      Authorization: "Bearer " + localStorage.getItem("token"),
    });

    const options = {
      method: "PUT",
      body: data,
      headers: headers,
    };

    fetch("https://back-end.osc-fr1.scalingo.io/serveur/editlogo", options)
      .then((response) => {
        return response.json();
      })

      .then(
        (responseObject) => {
          setMessage(responseObject.message);
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
            "https://back-end.osc-fr1.scalingo.io/serveur/monProfil",
            options
          )
            .then((response) => {
              return response.json();
            })
            .then(
              (responseObject) => {
                setImageStorage(responseObject.picture);
              },

              (error) => {
                console.log(error);
              }
            );
        },

        (error) => {
          console.log(error);
        }
      );
  };
  useEffect(() => {
    getMonProfil();
  }, []);

  return (
    <div>
      <form onSubmit={modifProfilLogo} className="formLogo">
        <img
          className="serveurPicture"
          src={"https://back-end.osc-fr1.scalingo.io/" + imageStorage}></img>
        <br />
        <br />
        <input
          className="chargePic"
          type="file"
          name="file"
          onChange={(e) => {
            setImageStorage(e.target.files[0]);
          }}
        />
        <button className="button" type="submit" onClick={uploadpicture}>
          Télécharger
        </button>
      </form>
    </div>
  );
}

class modifierMonProfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serveur: {},
    };
  }

  change = (event) => {
    let serveur = this.state.serveur;
    serveur[event.target.name] = event.target.value;
    this.setState({
      serveur: serveur,
      // identifier name de l'input = choisir la valeur qui se trouve dans l'input donc necessité d'avoir le bon name!!
    });
  };

  postDataServeur = () => {
    const headers = new Headers({
      "Content-Type": "application/json",
      /**on ajoute  pour l'AUTHENTIFICATION le header autorization qui a comme valeur bearer(puis espace) suivi par le token de l'user */
      Authorization: "bearer " + localStorage.getItem("token"),
    });
    const data = {
      /*on appel l'userId dans le body en le recuperant du localstorage */
      userId: localStorage.getItem("userId"),
    };
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: headers,
    };

    fetch("https://back-end.osc-fr1.scalingo.io/serveur/dataProfil", options)
      .then((response) => {
        return response.json();
      })
      .then(
        (responseObject) => {
          const serveurInfo = responseObject;
          this.setState({ serveur: serveurInfo, object: serveurInfo });
          console.log(this.state);
        },

        (error) => {
          console.log(error);
        }
      );
  };

  editserveur = (e) => {
    e.preventDefault();
    const data = {
      userId:
        localStorage.getItem(
          "userID"
        ) /*on get l'Id qu'on a stocké durant la connexion*/,
      /*userID avec le ID en majuscule car c'est comme ca qu'on l'a mis dans le local storage (/connexion) */
      serveur: this.state.serveur,
    };

    const headers = new Headers({
      "Content-Type": "application/json",
      /**on ajoute pour l'AUTHENTIFICATION le header autorization qui a comme valeur bearer(puis espace) suivi par le token de l'user */
      Authorization: "bearer " + localStorage.getItem("token"),
    });

    const options = {
      method: "PUT",
      body: JSON.stringify(data),
      headers: headers,
    };

    fetch("https://back-end.osc-fr1.scalingo.io/serveur/edit", options)
      .then((response) => {
        return response.json();
      })
      .then(
        (responseObject) => {
          this.setState({ message: responseObject.message });
        },

        (error) => {
          console.log(error);
        }
      );
  };
  modifProfilLogo = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    const headers = new Headers({
      "X-Requested-With": "XMLHttpRequest",
      Authorization: "Bearer " + localStorage.getItem("token"),
    });

    const options = {
      method: "PUT",
      body: data,
      headers: headers,
    };

    fetch("https://back-end.osc-fr1.scalingo.io/serveur/editlogo", options)
      .then((response) => {
        return response.json();
      })

      .then(
        (responseObject) => {
          this.setState({ message: responseObject.message });
          this.postDataServeur();
        },

        (error) => {
          console.log(error);
        }
      );
  };

  componentDidMount() {
    this.postDataServeur();
  }

  render() {
    return (
      <div className="bloc-modifierProfil">
        <Row>
          <Col md={{ span: 12, offset: 3 }} className="titreModif">
            <p>Modification du profil</p>

            <Form>
              <Form.Group controlId="formGroupName">
                <Form.Control
                  name="lastname"
                  type="text"
                  placeholder="Nom"
                  onChange={this.change}
                  value={this.state.serveur.lastname}
                />
              </Form.Group>
              <Form.Group controlId="formGroupPrenom">
                <Form.Control
                  name="firstname"
                  type="text"
                  placeholder="Prénom"
                  onChange={this.change}
                  value={this.state.serveur.firstname}
                />
              </Form.Group>
              <Form.Group controlId="formAdresse">
                <Form.Control
                  type="text"
                  placeholder="Adresse"
                  name="adress"
                  onChange={this.change}
                  value={this.state.serveur.adress}
                />
              </Form.Group>
              <Form.Group controlId="formVille">
                <Form.Control
                  type="text"
                  placeholder="Ville"
                  name="city"
                  onChange={this.change}
                  value={this.state.serveur.city}
                />
              </Form.Group>
              <Form.Group controlId="formTel">
                <Form.Control
                  type="text"
                  placeholder="Telephone(Facultatif)"
                  name="phone"
                  onChange={this.change}
                  value={this.state.serveur.phone}
                />
              </Form.Group>
              <Form.Group controlId="formPoste">
                <Form.Control
                  as="select"
                  type="text"
                  name="staff"
                  onChange={this.change}
                  value={this.state.serveur.staff}>
                  <option>-</option>
                  <option>Commis</option>
                  <option>Chef de rang</option>
                  <option>Maître d'hôtel</option>
                  <option>Barman</option>
                  <option>Cuisinier</option>
                  <option>Accueil</option>
                </Form.Control>
              </Form.Group>
            </Form>
            <UploadPicture />

            <Button
              className="submitButton"
              variant="primary"
              type="submit"
              onClick={this.editserveur}>
              Mettre à jour mon profil
            </Button>
            <p>{this.state.message}</p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default modifierMonProfil;
