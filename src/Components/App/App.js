import React, { Component } from "react";
import "../App/App.css";
import Profil from "../monProfil/monProfil";
import Connexion from "../connexion/connexion";
import Inscription from "../inscription/inscription";
import InscriptionParrainage from "../inscriptionParrainage/inscriptionParrainage";
import MesTips from "../mesTips/mesTips";
import ModifierMonProfil from "../modifierMonProfil/modifierMonProfil";
import monAbonnement from "../monAbonnement/monAbonnement";
import Barremenu from "../../Assets/barreMenu";
import PasswordRenew from "../PasswordRenew/PasswordRenew";
import PasswordReset from "../PasswordReset/PasswordReset";
import Footer from "../../Assets/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CardSection from "../cardSection/CardSection";
import mesComs from "../mesTips/mesTips";
import mesHisto from "../MesHistoriques/mesHistoriques";
import CagnotteCollective from "../CagnotteCollective/CagnotteCollective";
import Referent from "../Referent/referent";

/* Main app component*/
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
    };
  }

  setLogin = (value) => {
    this.setState({ login: value });
  };

  componentDidMount() {
    if (localStorage.getItem("token") != null) {
      this.setState({ login: true });
    }
  }

  render() {
    return (
      <Router>
        <div className="main-container">
          <Barremenu setLogin={this.setLogin} login={this.state.login} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Connexion setLogin={this.setLogin} {...props} />
              )}
            />
            <Route path="/inscription" component={Inscription} />
            <Route
              path="/inscriptionParrainage"
              component={InscriptionParrainage}
            />
            <Route path="/monProfil" component={Profil} />
            <Route path="/modifierMonProfil" component={ModifierMonProfil} />
            <Route path="/mesTips" component={mesComs} />
            <Route path="/mesHistoriques" component={mesHisto} />
            <Route path="/monAbonnement" component={monAbonnement} />
            <Route path="/passwordReset" component={PasswordReset} />
            <Route path="/passwordRenew" component={PasswordRenew} />
            <Route path="/cagnotte" component={CagnotteCollective} />
            <Route path="/referent" component={Referent} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
