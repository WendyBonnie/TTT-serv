(this["webpackJsonptipourboire-serveur"] =
  this["webpackJsonptipourboire-serveur"] || []).push([
  [0],
  {
    104: function (e, t, a) {},
    106: function (e, t, a) {},
    107: function (e, t, a) {},
    108: function (e, t, a) {},
    109: function (e, t, a) {},
    110: function (e, t, a) {},
    112: function (e, t, a) {},
    113: function (e, t, a) {},
    114: function (e, t, a) {},
    116: function (e, t, a) {},
    117: function (e, t, a) {},
    118: function (e, t, a) {},
    120: function (e, t, a) {},
    124: function (e, t, a) {},
    125: function (e, t, a) {},
    128: function (e, t, a) {},
    129: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        o = a.n(n),
        r = a(36),
        s = a.n(r),
        l = (a(92), a(12)),
        c = a(13),
        i = a(15),
        m = a(14),
        u = (a(93), a(24)),
        p = a(59),
        d = (a(94), a(27)),
        h = a(77),
        f = a(11),
        g = a(28),
        E = a(18),
        v = a(32),
        b = a(136),
        y = a(67);
      y.a.initializeApp({
        apiKey: "AIzaSyAut6vqnimGfA8-stmTnB-q4tyrXv2aJow",
        authDomain: "tipourboire-57c09.firebaseapp.com",
        projectId: "tipourboire-57c09",
        storageBucket: "tipourboire-57c09.appspot.com",
        messagingSenderId: "592397685193",
        appId: "1:592397685193:web:e6c6a5fca6aeccef5f1818",
        measurementId: "G-5LS7DQYY60",
      }),
        y.a.analytics();
      var C = y.a.storage();
      function N() {
        var e = Object(n.useState)(!1),
          t = Object(p.a)(e, 2),
          a = t[0],
          r = t[1],
          s = function () {
            return r(!1);
          },
          l = function () {
            return r(!0);
          };
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(
            v.a,
            { className: "buttonTuto", onClick: l },
            "Etapes obligatoires",
            " ",
            o.a.createElement(v.a, { onClick: l, className: "flecheTuto" }, ">")
          ),
          o.a.createElement(
            b.a,
            {
              show: a,
              onHide: s,
              animation: !0,
              backdrop: "static",
              keyboard: !1,
            },
            o.a.createElement(
              b.a.Body,
              null,
              o.a.createElement(
                "p",
                { className: "paraTuto" },
                o.a.createElement(
                  b.a.Title,
                  null,
                  "Comment b\xe9n\xe9ficier de mes pourboires ?"
                ),
                o.a.createElement("br", null),
                o.a.createElement("br", null),
                "Afin d'activer votre compte Tipourboire et permettre \xe0 vos clients de vous remercier pour la qualit\xe9 de votrz service",
                o.a.createElement("br", null),
                "C'est simple, il vous suffit :",
                o.a.createElement("br", null),
                "D'ins\xe9rer votre photo dans votre espace personnel s\xe9curis\xe9 De renseigner vos coordonn\xe9es bancaires",
                o.a.createElement("br", null),
                "et de charger votre pi\xe8ce d'identit\xe9",
                o.a.createElement("br", null),
                'dans l\'espace "Mes documents"',
                o.a.createElement("br", null),
                "en suivant bien les instructions",
                o.a.createElement("br", null),
                o.a.createElement("br", null),
                "Bravo, vous pouvez d\xe9sormais b\xe9n\xe9ficier",
                o.a.createElement("br", null),
                "de nos services et booster vos pourboires !"
              )
            ),
            o.a.createElement(
              b.a.Footer,
              null,
              o.a.createElement(
                v.a,
                { className: "modalButton", variant: "secondary", onClick: s },
                "Fermer"
              )
            )
          )
        );
      }
      var S = (function (e) {
          Object(i.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).abonnement = function () {
                var e = n.state.profil.stripeId;
                console.log(e),
                  null === e &&
                    alert(
                      "vous devez vous abonner pour b\xe9n\xe9ficier de l'app"
                    );
              }),
              (n.handleInput = function (e) {
                n.setState(Object(u.a)({}, e.target.name, e.target.value));
              }),
              (n.unSubscribe = function () {
                var e = new Headers({
                  "Content-Type": "application/json",
                  Authorization: "bearer " + localStorage.getItem("token"),
                });
                fetch(
                  "https://back-end.osc-fr1.scalingo.io/serveur/unsubscribe",
                  { method: "DELETE", headers: e }
                )
                  .then(function (e) {
                    return e.json();
                  })
                  .then(
                    function (e) {
                      n.setState({ message: e.message }),
                        n.setState({ showModal: !1 }),
                        n.getMonProfil();
                    },
                    function (e) {
                      console.log(e);
                    }
                  );
              }),
              (n.renderMesHistory = function () {
                if (Array.isArray(n.state.profil.history))
                  return n.state.profil.history.length > 0
                    ? n.state.profil.history.map(function (e, t) {
                        return o.a.createElement(
                          "div",
                          { className: "historique", key: t },
                          o.a.createElement(
                            "p",
                            { className: "pourboire" },
                            "vous avez re\xe7u ",
                            e.amount,
                            "\u20ac le ",
                            e.date,
                            "."
                          )
                        );
                      })
                    : o.a.createElement(
                        "p",
                        { className: "pourboire" },
                        "Vous n'avez re\xe7u aucun pourboire pour l'instant."
                      );
              }),
              (n.getMonProfil = function () {
                var e = new Headers({
                  Authorization: "Bearer " + localStorage.getItem("token"),
                  "Content-Type": "application/json",
                  "X-Requested-With": "XMLHttpRequest",
                });
                fetch(
                  "https://back-end.osc-fr1.scalingo.io/serveur/monProfil",
                  { method: "GET", headers: e }
                )
                  .then(function (e) {
                    return e.json();
                  })
                  .then(
                    function (e) {
                      var t = e;
                      n.setState({ profil: t });
                    },
                    function (e) {
                      console.log(e);
                    }
                  );
              }),
              (n.deleteAffiliation = function (e) {
                var t = new Headers({
                    "Content-Type": "application/json",
                    Authorization: "bearer " + localStorage.getItem("token"),
                  }),
                  a = {
                    method: "DELETE",
                    body: JSON.stringify({}),
                    headers: t,
                  };
                fetch(
                  "https://back-end.osc-fr1.scalingo.io/serveur/deleteWaiter",
                  a
                )
                  .then(function (e) {
                    return e.json();
                  })
                  .then(
                    function (e) {
                      n.getWaiterList();
                    },
                    function (e) {
                      console.log(e);
                    }
                  );
              }),
              (n.infoStripe = function () {
                var e = new Headers({
                  "Content-Type": "application/json",
                  Authorization: "bearer " + localStorage.getItem("token"),
                });
                fetch(
                  "https://back-end.osc-fr1.scalingo.io/serveur/customerAccount",
                  { method: "get", headers: e }
                )
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    window.open(e, "_blank");
                  });
              }),
              (n.getRestaurantList = function () {
                var e = new Headers({
                  Authorization: "bearer " + localStorage.getItem("token"),
                });
                fetch(
                  "https://back-end.osc-fr1.scalingo.io/serveur/restaurantList",
                  { method: "GET", headers: e }
                )
                  .then(function (e) {
                    return e.json();
                  })
                  .then(
                    function (e) {
                      n.setState({ restaurant: e });
                    },
                    function (e) {
                      console.log(e);
                    }
                  );
              }),
              (n.postParrainage = function (e) {
                e.preventDefault();
                var t = { email: n.state.email },
                  a = new Headers({
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                    Authorization: "Bearer " + localStorage.getItem("token"),
                  }),
                  o = { method: "POST", body: JSON.stringify(t), headers: a };
                fetch(
                  "https://back-end.osc-fr1.scalingo.io/serveur/emailParrainage?_id=" +
                    n.state.email +
                    "&mailSender=" +
                    n.state.profil.email,
                  o
                )
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    n.setState({ messageParrainage: e.message });
                  });
              }),
              (n.renderCompteReferent = function () {
                if (n.state.profil.mangoWalletReferent)
                  return o.a.createElement(
                    v.a,
                    { className: " referentButton", href: "/referent" },
                    "Mon compte R\xe9f\xe9rent"
                  );
              }),
              (n.renderMesRestau = function () {
                return n.state.restaurant.length
                  ? n.state.restaurant.map(function (e) {
                      return o.a.createElement(
                        "div",
                        { className: "articles" },
                        o.a.createElement(
                          "h4",
                          { className: "titre" },
                          e.restaurantName
                        )
                      );
                    })
                  : o.a.createElement(
                      "h4",
                      { className: "Nocoms" },
                      "Vous n'\xeates pas encore affili\xe9 \xe0 un restaurant"
                    );
              }),
              (n.modalUnsubscribe = function () {
                return o.a.createElement(
                  b.a,
                  {
                    show: n.state.showModal,
                    onHide: function () {
                      n.setState({ showModal: !1 });
                    },
                  },
                  o.a.createElement(
                    b.a.Header,
                    { closeButton: !0 },
                    o.a.createElement(
                      b.a.Title,
                      { className: "modalTitle" },
                      "R\xe9siliation abonnement"
                    )
                  ),
                  o.a.createElement(
                    b.a.Body,
                    { className: "modalBody" },
                    "Etes vous sur de vouloir r\xe9silier votre abonnement Tipourboire ?",
                    " "
                  ),
                  o.a.createElement(
                    b.a.Footer,
                    null,
                    o.a.createElement(
                      v.a,
                      {
                        className: "modalButton",
                        variant: "secondary",
                        onClick: function () {
                          n.unSubscribe();
                        },
                      },
                      "R\xe9silier"
                    ),
                    o.a.createElement(
                      v.a,
                      {
                        className: "modalButton",
                        variant: "primary",
                        onClick: function () {
                          n.setState({ showModal: !1 });
                        },
                      },
                      "Annuler"
                    )
                  )
                );
              }),
              (n.state = {
                profil: { restaurant: {} },
                wallet: 1,
                history: [],
                stripeUrl: "",
                restaurant: [],
                showModal: !1,
              }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  this.getMonProfil(), this.getRestaurantList();
                },
              },
              {
                key: "render",
                value: function () {
                  return o.a.createElement(
                    g.a,
                    { className: "contain parrainage" },
                    this.modalUnsubscribe(),
                    o.a.createElement(
                      E.a,
                      { className: "mescartes" },
                      o.a.createElement(
                        f.a,
                        { className: "mesdetails", sm: 12, md: 12 },
                        o.a.createElement(
                          E.a,
                          { className: "centerPic" },
                          o.a.createElement(
                            f.a,
                            { s: 6, md: 8, className: "colPhoto" },
                            o.a.createElement(h.a, {
                              className: "photoProfil",
                              src:
                                "https://s3.amazonaws.com/b.c.bucket.tipourboire/" +
                                this.state.profil.picture,
                              roundedCircle: !0,
                            })
                          )
                        ),
                        o.a.createElement(
                          f.a,
                          { md: { span: 9, offset: 7 }, className: "colTuto" },
                          o.a.createElement(N, null)
                        ),
                        o.a.createElement(
                          "div",
                          { className: "infoProfil" },
                          o.a.createElement(
                            "h1",
                            { className: "titreNice" },
                            "Bienvenue"
                          ),
                          o.a.createElement(
                            "h1",
                            null,
                            this.state.profil.firstname,
                            " ",
                            this.state.profil.lastname
                          )
                        )
                      ),
                      o.a.createElement(
                        f.a,
                        { className: "monrestaurant", sm: 12, md: 12 },
                        o.a.createElement(
                          "h1",
                          { className: "ligne" },
                          "Mes \xe9tablissements de rattachement "
                        ),
                        this.renderMesRestau()
                      )
                    ),
                    o.a.createElement(
                      E.a,
                      { className: "rowButton" },
                      o.a.createElement(
                        f.a,
                        { xs: 12, s: 12, md: 6, lg: 6 },
                        o.a.createElement(
                          v.a,
                          { className: "buttonAbo", href: "/cagnotte" },
                          "Mes pourboires"
                        )
                      ),
                      o.a.createElement(
                        f.a,
                        { xs: 12, s: 12, md: 6, lg: 6 },
                        o.a.createElement(
                          v.a,
                          {
                            className: "buttonModifier marginPhone  ",
                            href: "/mesHistoriques",
                          },
                          "Mon historique de pourboire"
                        )
                      )
                    ),
                    o.a.createElement(
                      E.a,
                      { className: "rowDocument" },
                      o.a.createElement(
                        f.a,
                        { xs: 12, md: 6, lg: 6 },
                        o.a.createElement(
                          v.a,
                          { className: "buttonAbo ", href: "/mesDocuments" },
                          "Mes documents"
                        )
                      ),
                      o.a.createElement(
                        f.a,
                        { classeName: "colModifier", xs: 12, md: 6, lg: 6 },
                        o.a.createElement(
                          d.b,
                          { to: "/modifierMonProfil", className: "modif" },
                          o.a.createElement(
                            "button",
                            { className: "buttonModifier " },
                            "Modifier mon profil"
                          )
                        )
                      )
                    ),
                    o.a.createElement(
                      E.a,
                      { className: "rowHisto" },
                      o.a.createElement(
                        f.a,
                        { md: 6, lg: 6 },
                        o.a.createElement(
                          v.a,
                          {
                            className: "buttonModifier lienCommentaire",
                            href: "/mesTips",
                          },
                          "Mes commentaires re\xe7us"
                        )
                      ),
                      o.a.createElement(
                        f.a,
                        { sm: 12, md: 6, lg: 6 },
                        this.renderCompteReferent()
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        k = a(5),
        w = (a(104), a(79)),
        I = a.n(w),
        j = (function (e) {
          Object(i.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).handleInput = function (e) {
                n.setState(Object(u.a)({}, e.target.name, e.target.value));
              }),
              (n.addLogin = function (e) {
                e.preventDefault();
                var t = { email: n.state.email, password: n.state.password },
                  a = new Headers({
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                  }),
                  o = { method: "POST", body: JSON.stringify(t), headers: a };
                fetch("https://back-end.osc-fr1.scalingo.io/serveur/login", o)
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    n.setState({ message: e.message }),
                      e.token &&
                        (localStorage.setItem("token", e.token),
                        localStorage.setItem("userID", e.userId),
                        n.props.setLogin(!0),
                        n.props.history.push("/monprofil"),
                        setTimeout(function () {
                          localStorage.clear(),
                            n.props.setLogin(!1),
                            n.props.history.push("/");
                        }, 36e5));
                  });
              }),
              (n.state = { email: "" }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  return o.a.createElement(
                    g.a,
                    { className: "connexion-container" },
                    o.a.createElement(
                      I.a,
                      Object(u.a)(
                        {
                          location: "bottom",
                          buttonText: "J'accepte",
                          declineButtonText: "Je refuse",
                          expires: 30,
                          enableDeclineButton: !0,
                          onDecline: function () {
                            alert(
                              "REFUS de cookies, votre choix \xe0 bien \xe9t\xe9 pris en compte."
                            );
                          },
                          cookieName: "Tipourboire",
                          style: { background: "#ffffff", color: "#555" },
                          declineButtonStyle: {
                            borderRadius: 12,
                            padding: 8,
                            color: "#fff",
                            fontSize: "18px",
                            background: "#f5a624",
                            fontWeight: "bold",
                          },
                          buttonStyle: {
                            borderRadius: 12,
                            padding: 8,
                            color: "#fff",
                            fontSize: "18px",
                            background: "#f5a624",
                            fontWeight: "bold",
                          },
                        },
                        "style",
                        {
                          fontSize: "10px",
                          fontfamily: "Montserrat",
                          fontWeight: "bold",
                        }
                      ),
                      "Le Site Tipourboire utilise diff\xe9rents cookies afin d\u2019am\xe9liorer ses services et effectuer des suivis d\u2019audience. Certains cookies sont indispensables au fonctionnement du Site. Vous pouvez accepter ces cookies, les refuser, ou g\xe9rer vos pr\xe9f\xe9rences. Vous pouvez consulter notre",
                      " ",
                      o.a.createElement(
                        "a",
                        {
                          href: "/cookies/POLITIQUE_DE_COOKIES.pdf",
                          target: "_blank",
                          style: {
                            fontSize: "20px",
                            fontfamily: "Montserrat",
                            fontWeight: "bold",
                          },
                        },
                        "Politique de cookies"
                      )
                    ),
                    o.a.createElement(
                      E.a,
                      null,
                      o.a.createElement(
                        f.a,
                        null,
                        o.a.createElement("h1", null, "D\xe9ja inscrit ? "),
                        o.a.createElement("h1", null, "Connectez-vous !")
                      )
                    ),
                    o.a.createElement(
                      k.a.Group,
                      { controlId: "formBasicEmail" },
                      o.a.createElement(k.a.Control, {
                        name: "email",
                        type: "email",
                        ClassName: "formMail",
                        placeholder: "Votre e-mail",
                        id: "email",
                        onChange: this.handleInput,
                        value: this.state.email,
                      }),
                      o.a.createElement(k.a.Control, {
                        name: "password",
                        type: "password",
                        ClassName: "formMail",
                        placeholder: "Votre mot de passe",
                        id: "password",
                        onChange: this.handleInput,
                        value: this.state.password,
                      })
                    ),
                    o.a.createElement(
                      f.a,
                      { className: "colMdp", xs: 12, md: 12 },
                      o.a.createElement(
                        d.b,
                        { className: "forgetpwd", to: "/passwordReset" },
                        o.a.createElement("p", null, "Mot de passe oubli\xe9 ?")
                      )
                    ),
                    o.a.createElement(
                      f.a,
                      { md: 12, className: "blocCompte" },
                      o.a.createElement(
                        v.a,
                        { className: "connectButton", onClick: this.addLogin },
                        "Se connecter"
                      ),
                      o.a.createElement("p", null, this.state.message)
                    ),
                    o.a.createElement(
                      f.a,
                      { className: "alignRight" },
                      o.a.createElement(
                        k.a.Label,
                        { className: "text2" },
                        "Pas encore inscrit ?",
                        " ",
                        o.a.createElement(
                          d.b,
                          { className: "creerCompte", to: "/Inscription" },
                          "Cr\xe9er mon compte"
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        O =
          (a(106),
          (function (e) {
            Object(i.a)(a, e);
            var t = Object(m.a)(a);
            function a(e) {
              var n;
              return (
                Object(l.a)(this, a),
                ((n = t.call(this, e)).handleInput = function (e) {
                  n.setState(Object(u.a)({}, e.target.name, e.target.value));
                }),
                (n.addNewRegister = function (e) {
                  e.preventDefault();
                  var t = {
                      firstname: n.state.firstname,
                      lastname: n.state.lastname,
                      city: n.state.city,
                      adress: n.state.adress,
                      postalCode: n.state.code,
                      date: n.state.date,
                      email: n.state.email,
                      phone: n.state.phone,
                      password: n.state.password,
                      acceptControl: n.state.acceptControl,
                      subscribe: n.state.inscrit,
                      gestioName: n.state.gestioName,
                      gestioID: n.state.gestioID,
                    },
                    a = new Headers({
                      "Content-Type": "application/json",
                      "X-Requested-With": "XMLHttpRequest",
                    }),
                    o = { method: "POST", body: JSON.stringify(t), headers: a };
                  fetch(
                    "https://back-end.osc-fr1.scalingo.io/serveur/register",
                    o
                  )
                    .then(function (e) {
                      return e.json();
                    })
                    .then(
                      function (e) {
                        console.log(e.success),
                          n.setState({ message: e.message });
                      },
                      function (e) {
                        console.log(e);
                      }
                    );
                }),
                (n.test = function () {
                  console.log("fdsfdsf", n.state);
                }),
                (n.state = { inscrit: "", gestioName: "", gestioID: "" }),
                n
              );
            }
            return (
              Object(c.a)(a, [
                {
                  key: "componentDidMount",
                  value: function () {
                    var e = this,
                      t = new URLSearchParams(window.location.search).get(
                        "subscribe"
                      ),
                      a = new URLSearchParams(window.location.search).get(
                        "gestioName"
                      ),
                      n = new URLSearchParams(window.location.search).get(
                        "gestionnaireID"
                      );
                    this.setState({ inscrit: t }),
                      this.setState({ gestioName: a }),
                      this.setState({ gestioID: n }, function () {
                        console.log(e.state, n);
                      });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this;
                    return o.a.createElement(
                      g.a,
                      { className: "inscr" },
                      this.test(),
                      o.a.createElement(
                        E.a,
                        { className: "RowInscr" },
                        o.a.createElement(
                          f.a,
                          { md: 12, className: "Titre", sm: 12 },
                          o.a.createElement(
                            "h1",
                            { className: "titreh1" },
                            "Cr\xe9er mon compte "
                          ),
                          o.a.createElement(
                            "p",
                            { className: "Titrep" },
                            "Merci de remplir les informations ci-dessous pour finaliser la cr\xe9ation de votre compte."
                          )
                        ),
                        o.a.createElement(
                          E.a,
                          { className: "centerInscr" },
                          o.a.createElement(
                            f.a,
                            { md: 9 },
                            o.a.createElement(
                              k.a,
                              { onSubmit: this.addNewRegister },
                              o.a.createElement(
                                k.a.Group,
                                { controlId: "lastname" },
                                o.a.createElement(k.a.Control, {
                                  type: "text",
                                  placeholder: "Nom",
                                  name: "lastname",
                                  onChange: this.handleInput,
                                  value: this.state.lastname,
                                  className: "tailleInscr",
                                })
                              ),
                              o.a.createElement(
                                k.a.Group,
                                { controlId: "firstname" },
                                o.a.createElement(k.a.Control, {
                                  type: "text",
                                  placeholder: "Pr\xe9nom",
                                  name: "firstname",
                                  onChange: this.handleInput,
                                  value: this.state.firstname,
                                  className: "tailleInscr",
                                })
                              ),
                              o.a.createElement(
                                k.a.Group,
                                { controlId: "date" },
                                o.a.createElement(k.a.Control, {
                                  type: "date",
                                  placeholder: "jj/mm/aaaa",
                                  name: "date",
                                  onChange: this.handleInput,
                                  value: this.state.date,
                                  className: "tailleInscr",
                                })
                              ),
                              o.a.createElement(
                                k.a.Group,
                                { controlId: "adress" },
                                o.a.createElement(k.a.Control, {
                                  type: "text",
                                  placeholder: "Adresse",
                                  name: "adress",
                                  onChange: this.handleInput,
                                  value: this.state.adress,
                                  className: "tailleInscr",
                                })
                              ),
                              o.a.createElement(
                                k.a.Group,
                                { controlId: "city" },
                                o.a.createElement(k.a.Control, {
                                  type: "text",
                                  placeholder: "Ville",
                                  name: "city",
                                  onChange: this.handleInput,
                                  value: this.state.city,
                                  className: "tailleInscr",
                                })
                              ),
                              o.a.createElement(
                                k.a.Group,
                                { controlId: "code" },
                                o.a.createElement(k.a.Control, {
                                  type: "text",
                                  placeholder: "Code Postal",
                                  name: "code",
                                  onChange: this.handleInput,
                                  value: this.state.code,
                                  className: "tailleInscr",
                                })
                              ),
                              o.a.createElement(
                                k.a.Group,
                                { controlId: "phone" },
                                o.a.createElement(k.a.Control, {
                                  type: "text",
                                  placeholder: "Telephone(Facultatif)",
                                  name: "phone",
                                  onChange: this.handleInput,
                                  value: this.state.phone,
                                  className: "tailleInscr",
                                })
                              ),
                              o.a.createElement(
                                k.a.Group,
                                { controlId: "email" },
                                o.a.createElement(k.a.Control, {
                                  type: "mail",
                                  placeholder: "Email ",
                                  name: "email",
                                  onChange: this.handleInput,
                                  value: this.state.email,
                                  className: "tailleInscr",
                                })
                              ),
                              o.a.createElement(
                                k.a.Group,
                                { controlId: "password" },
                                o.a.createElement(k.a.Control, {
                                  type: "password",
                                  placeholder: "Password",
                                  name: "password",
                                  onChange: this.handleInput,
                                  value: this.state.password,
                                  className: "tailleInscr",
                                })
                              ),
                              o.a.createElement(
                                k.a.Group,
                                { controlId: "formBasicCheckbox" },
                                o.a.createElement(k.a.Check, {
                                  className: "checkboxCGU",
                                  type: "checkbox",
                                  name: "acceptControl",
                                  label: "J'ai lu et j'accepte les CGU et CGV",
                                  onChange: this.handleInput,
                                  value: this.state.acceptControl,
                                  required: !0,
                                }),
                                o.a.createElement(
                                  "a",
                                  {
                                    className: "cgvLink",
                                    href: "/CGV_TIPTOTHANK.pdf",
                                    target: "_blanck",
                                  },
                                  "CGU & CGV"
                                )
                              ),
                              o.a.createElement(
                                E.a,
                                { className: "centerInscr" },
                                o.a.createElement(
                                  f.a,
                                  { md: 5, className: "centerInscr" },
                                  o.a.createElement(
                                    v.a,
                                    {
                                      className: "connectServeur",
                                      variant: "primary",
                                      block: !0,
                                      type: "submit",
                                      onClick: function () {
                                        e.state.acceptControl
                                          ? e.addNewRegister()
                                          : e.setState({
                                              message:
                                                "Veuillez accepter les conditions g\xe9n\xe9rales d'utilisations.",
                                            });
                                      },
                                    },
                                    "S'inscrire"
                                  )
                                )
                              )
                            ),
                            o.a.createElement(
                              "p",
                              { className: "annonce" },
                              "*TIPOURBOIRE est responsable du traitement des donn\xe9es personnelles collect\xe9es sur ce site. Elles sont collect\xe9es aux fins de : l'ex\xe9cution du contrat/vous informer de nos nouveaut\xe9s et actualit\xe9s/\xe0 des fins statistiques, les bases l\xe9gales respectives des traitements pouvant \xeatre l'ex\xe9cution du contrat, l'int\xe9r\xeat l\xe9gitime, ou le consentement. Pour plus d'informations voir notre politique de confidentialit\xe9."
                            ),
                            o.a.createElement("p", null, this.state.message)
                          )
                        )
                      )
                    );
                  },
                },
              ]),
              a
            );
          })(n.Component)),
        T =
          (a(107),
          (function (e) {
            Object(i.a)(a, e);
            var t = Object(m.a)(a);
            function a(e) {
              var n;
              return (
                Object(l.a)(this, a),
                ((n = t.call(this, e)).handleInput = function (e) {
                  n.setState(Object(u.a)({}, e.target.name, e.target.value));
                }),
                (n.addNewRegister = function (e) {
                  e.preventDefault();
                  var t = {
                      firstname: n.state.firstname,
                      lastname: n.state.lastname,
                      city: n.state.city,
                      adress: n.state.adress,
                      staff: n.state.staff,
                      date: n.state.date,
                      email: n.state.email,
                      phone: n.state.phone,
                      password: n.state.password,
                      acceptControl: n.state.acceptControl,
                    },
                    a = new Headers({
                      "Content-Type": "application/json",
                      "X-Requested-With": "XMLHttpRequest",
                    }),
                    o = { method: "POST", body: JSON.stringify(t), headers: a };
                  fetch(
                    "https://back-end.osc-fr1.scalingo.io/serveur/inscriptionParrainage",
                    o
                  )
                    .then(function (e) {
                      return e.json();
                    })
                    .then(
                      function (e) {
                        n.setState({ message: e.message });
                      },
                      function (e) {
                        console.log(e);
                      }
                    );
                }),
                (n.state = {}),
                n
              );
            }
            return (
              Object(c.a)(a, [
                {
                  key: "render",
                  value: function () {
                    var e = this;
                    return o.a.createElement(
                      g.a,
                      { className: "inscr" },
                      o.a.createElement(
                        f.a,
                        { md: 12, className: "Titre", sm: 12 },
                        o.a.createElement(
                          "h1",
                          { className: "titreh1" },
                          "Vous avez \xe9t\xe9 parrain\xe9, cr\xe9e votre compte afin de profiter de votre offre.",
                          " "
                        ),
                        o.a.createElement(
                          "p",
                          { className: "Titrep" },
                          "Merci de remplir les informations ci-dessous pour finaliser la cr\xe9ation de votre compte."
                        )
                      ),
                      o.a.createElement(
                        E.a,
                        { className: "centerInscr" },
                        o.a.createElement(
                          f.a,
                          { md: 8 },
                          o.a.createElement(
                            k.a.Group,
                            { controlId: "lastname" },
                            o.a.createElement(k.a.Control, {
                              type: "text",
                              placeholder: "Nom",
                              name: "lastname",
                              onChange: this.handleInput,
                              value: this.state.lastname,
                            })
                          ),
                          o.a.createElement(
                            k.a.Group,
                            { controlId: "firstname" },
                            o.a.createElement(k.a.Control, {
                              type: "text",
                              placeholder: "Pr\xe9nom",
                              name: "firstname",
                              onChange: this.handleInput,
                              value: this.state.firstname,
                            })
                          ),
                          o.a.createElement(
                            k.a.Group,
                            { controlId: "date" },
                            o.a.createElement(k.a.Control, {
                              type: "date",
                              placeholder: "Date de naissance",
                              name: "date",
                              onChange: this.handleInput,
                              value: this.state.date,
                            })
                          ),
                          o.a.createElement(
                            k.a.Group,
                            { controlId: "adress" },
                            o.a.createElement(k.a.Control, {
                              type: "text",
                              placeholder: "Adresse",
                              name: "adress",
                              onChange: this.handleInput,
                              value: this.state.adress,
                            })
                          ),
                          o.a.createElement(
                            k.a.Group,
                            { controlId: "city" },
                            o.a.createElement(k.a.Control, {
                              type: "text",
                              placeholder: "Ville",
                              name: "city",
                              onChange: this.handleInput,
                              value: this.state.city,
                            })
                          ),
                          o.a.createElement(
                            k.a.Group,
                            { controlId: "phone" },
                            o.a.createElement(k.a.Control, {
                              type: "text",
                              placeholder: "Telephone(Facultatif)",
                              name: "phone",
                              onChange: this.handleInput,
                              value: this.state.phone,
                            })
                          ),
                          o.a.createElement(
                            k.a.Group,
                            { controlId: "staff" },
                            o.a.createElement(
                              k.a.Control,
                              {
                                as: "select",
                                type: "text",
                                name: "staff",
                                onChange: this.handleInput,
                                value: this.state.staff,
                              },
                              o.a.createElement("option", null, "-"),
                              o.a.createElement("option", null, "Commis"),
                              o.a.createElement("option", null, "Chef de rang"),
                              o.a.createElement(
                                "option",
                                null,
                                "Ma\xeetre d'h\xf4tel"
                              ),
                              o.a.createElement("option", null, "Barman"),
                              o.a.createElement("option", null, "Cuisinier"),
                              o.a.createElement("option", null, "Accueil")
                            )
                          ),
                          o.a.createElement(
                            k.a.Group,
                            { controlId: "email" },
                            o.a.createElement(k.a.Control, {
                              type: "mail",
                              placeholder: "Email ",
                              name: "email",
                              onChange: this.handleInput,
                              value: this.state.email,
                            })
                          ),
                          o.a.createElement(
                            k.a.Group,
                            { controlId: "password" },
                            o.a.createElement(k.a.Control, {
                              type: "password",
                              placeholder: "Password",
                              name: "password",
                              onChange: this.handleInput,
                              value: this.state.password,
                            })
                          ),
                          o.a.createElement(
                            k.a.Group,
                            { controlId: "formBasicCheckbox" },
                            o.a.createElement(k.a.Check, {
                              className: "checkboxCGUParrainage",
                              type: "checkbox",
                              name: "acceptControl",
                              label: "J'ai lu et j'accepte les CGU et CGV",
                              onChange: this.handleInput,
                              value: this.state.acceptControl,
                              required: !0,
                            }),
                            o.a.createElement(
                              "a",
                              {
                                className: "cgvLink",
                                href: "/CGV_TIPTOTHANK.pdf",
                                target: "_blanck",
                              },
                              "CGU & CGV"
                            )
                          ),
                          o.a.createElement(
                            E.a,
                            { className: "centerInscr" },
                            o.a.createElement(
                              f.a,
                              { md: 5, className: "centerInscr" },
                              o.a.createElement(
                                v.a,
                                {
                                  className: "connectServeur",
                                  variant: "primary",
                                  block: !0,
                                  type: "submit",
                                  onClick: function () {
                                    e.state.acceptControl
                                      ? e.addNewRegister()
                                      : e.setState({
                                          message:
                                            "Veuillez accepter les conditions g\xe9n\xe9rales d'utilisations.",
                                        });
                                  },
                                },
                                "S'inscrire"
                              )
                            )
                          ),
                          o.a.createElement(
                            "p",
                            { className: "annonceParrainage" },
                            "*TIPOURBOIRE est responsable du traitement des donn\xe9es personnelles collect\xe9es sur ce site. Elles sont collect\xe9es aux fins de : l'ex\xe9cution du contrat/vous informer de nos nouveaut\xe9s et actualit\xe9s/\xe0 des fins statistiques, les bases l\xe9gales respectives des traitements pouvant \xeatre l'ex\xe9cution du contrat, l'int\xe9r\xeat l\xe9gitime, ou le consentement. Pour plus d'informations voir notre politique de confidentialit\xe9."
                          ),
                          o.a.createElement("p", null, this.state.message)
                        )
                      )
                    );
                  },
                },
              ]),
              a
            );
          })(n.Component)),
        M =
          (a(108),
          (function (e) {
            Object(i.a)(a, e);
            var t = Object(m.a)(a);
            function a(e) {
              var n;
              return (
                Object(l.a)(this, a),
                ((n = t.call(this, e)).getMesCommentaires = function () {
                  console.log("coucou");
                  var e = new Headers({
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                    Authorization: "bearer " + localStorage.getItem("token"),
                  });
                  fetch(
                    "https://back-end.osc-fr1.scalingo.io/serveur/mesCommentaires",
                    { method: "GET", headers: e }
                  )
                    .then(function (e) {
                      return e.json();
                    })
                    .then(
                      function (e) {
                        var t = e;
                        n.setState({ mesComs: t }),
                          console.log(n.state.mesComs);
                      },
                      function (e) {
                        console.log(e);
                      }
                    );
                }),
                (n.renderMesCommentaires = function () {
                  return n.state.mesComs.commentaires.length
                    ? n.state.mesComs.commentaires.map(function (e, t) {
                        return o.a.createElement(
                          "div",
                          { className: "divCom", key: t },
                          o.a.createElement(
                            "div",
                            { className: "nomPrenom" },
                            o.a.createElement(
                              "h2",
                              { className: "prenomCom" },
                              e.prenom
                            ),
                            " ",
                            o.a.createElement(
                              "h2",
                              { className: "nomCom" },
                              e.nom,
                              " "
                            ),
                            o.a.createElement(
                              "h4",
                              { className: "nomCom" },
                              e.date,
                              " "
                            )
                          ),
                          o.a.createElement(
                            "div",
                            null,
                            o.a.createElement(
                              "p",
                              { className: "statut2" },
                              e.texte
                            )
                          )
                        );
                      })
                    : o.a.createElement(
                        "h4",
                        { className: "Nocoms" },
                        "Vous n'avez pas encore de commentaires"
                      );
                }),
                (n.state = { mesComs: { commentaires: [] } }),
                n
              );
            }
            return (
              Object(c.a)(a, [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.getMesCommentaires();
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return o.a.createElement(
                      g.a,
                      { className: "mesComs" },
                      o.a.createElement(
                        E.a,
                        null,
                        o.a.createElement(
                          f.a,
                          null,
                          o.a.createElement(
                            "h1",
                            { className: "titreComs" },
                            "Mes commentaires"
                          )
                        )
                      ),
                      o.a.createElement(
                        E.a,
                        { className: "commentaireBackground" },
                        o.a.createElement(
                          f.a,
                          null,
                          this.renderMesCommentaires()
                        )
                      )
                    );
                  },
                },
              ]),
              a
            );
          })(n.Component));
      a(109);
      function P() {
        var e = Object(n.useState)(""),
          t = Object(p.a)(e, 2),
          a = t[0],
          r = t[1],
          s = Object(n.useState)(""),
          l = Object(p.a)(s, 2),
          c = (l[0], l[1]);
        return (
          Object(n.useEffect)(function () {
            !(function () {
              var e = new Headers({
                Authorization: "Bearer " + localStorage.getItem("token"),
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
              });
              fetch("https://back-end.osc-fr1.scalingo.io/serveur/monProfil", {
                method: "GET",
                headers: e,
              })
                .then(function (e) {
                  return e.json();
                })
                .then(
                  function (e) {
                    console.log("response", e);
                  },
                  function (e) {
                    console.log(e);
                  }
                );
            })();
          }, []),
          Object(n.useEffect)(
            function () {
              console.log("image", a);
            },
            [a]
          ),
          o.a.createElement(
            "div",
            null,
            o.a.createElement(
              "form",
              {
                onSubmit: function (e) {
                  e.preventDefault();
                  var t = new FormData(e.target),
                    a = new Headers({
                      "X-Requested-With": "XMLHttpRequest",
                      Authorization: "Bearer " + localStorage.getItem("token"),
                    });
                  fetch(
                    "https://back-end.osc-fr1.scalingo.io/serveur/editlogo",
                    { method: "PUT", body: t, headers: a }
                  )
                    .then(function (e) {
                      return e.json();
                    })
                    .then(
                      function (e) {
                        c(e.message);
                        var t = new Headers({
                          Authorization:
                            "Bearer " + localStorage.getItem("token"),
                          "Content-Type": "application/json",
                          "X-Requested-With": "XMLHttpRequest",
                        });
                        fetch(
                          "https://back-end.osc-fr1.scalingo.io/serveur/monProfil",
                          { method: "GET", headers: t }
                        )
                          .then(function (e) {
                            return e.json();
                          })
                          .then(
                            function (e) {
                              console.log("coucou", e), r(e.picture);
                            },
                            function (e) {
                              console.log("err", e);
                            }
                          );
                      },
                      function (e) {
                        console.log(e);
                      }
                    );
                },
                className: "formLogo",
              },
              o.a.createElement("img", {
                className: "serveurPicture",
                src: "https://s3.amazonaws.com/b.c.bucket.tipourboire/" + a,
              }),
              o.a.createElement("br", null),
              o.a.createElement("br", null),
              o.a.createElement("input", {
                className: "chargePic",
                type: "file",
                name: "file",
                onChange: function (e) {
                  r(e.target.files[0]);
                },
              }),
              o.a.createElement(
                "button",
                {
                  className: "button",
                  type: "submit",
                  onClick: function (e) {
                    null != a &&
                      C.ref("/PictureServeur/".concat(a.name))
                        .put(a)
                        .on(
                          "state_changed",
                          alert("Votre logo a bien \xe9t\xe9 enregistr\xe9"),
                          alert
                        );
                  },
                },
                "T\xe9l\xe9charger"
              )
            )
          )
        );
      }
      var R = (function (e) {
          Object(i.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).change = function (e) {
                var t = n.state.serveur;
                (t[e.target.name] = e.target.value), n.setState({ serveur: t });
              }),
              (n.postDataServeur = function () {
                var e = new Headers({
                    "Content-Type": "application/json",
                    Authorization: "bearer " + localStorage.getItem("token"),
                  }),
                  t = { userId: localStorage.getItem("userId") },
                  a = { method: "POST", body: JSON.stringify(t), headers: e };
                fetch(
                  "https://back-end.osc-fr1.scalingo.io/serveur/dataProfil",
                  a
                )
                  .then(function (e) {
                    return e.json();
                  })
                  .then(
                    function (e) {
                      var t = e;
                      n.setState({ serveur: t, object: t }),
                        console.log(n.state);
                    },
                    function (e) {
                      console.log(e);
                    }
                  );
              }),
              (n.editserveur = function (e) {
                e.preventDefault();
                var t = {
                    userId: localStorage.getItem("userID"),
                    serveur: n.state.serveur,
                  },
                  a = new Headers({
                    "Content-Type": "application/json",
                    Authorization: "bearer " + localStorage.getItem("token"),
                  }),
                  o = { method: "PUT", body: JSON.stringify(t), headers: a };
                fetch("https://back-end.osc-fr1.scalingo.io/serveur/edit", o)
                  .then(function (e) {
                    return e.json();
                  })
                  .then(
                    function (e) {
                      n.setState({ message: e.message });
                    },
                    function (e) {
                      console.log(e);
                    }
                  );
              }),
              (n.modifProfilLogo = function (e) {
                e.preventDefault();
                var t = new FormData(e.target),
                  a = new Headers({
                    "X-Requested-With": "XMLHttpRequest",
                    Authorization: "Bearer " + localStorage.getItem("token"),
                  });
                fetch("https://back-end.osc-fr1.scalingo.io/serveur/editlogo", {
                  method: "PUT",
                  body: t,
                  headers: a,
                })
                  .then(function (e) {
                    return e.json();
                  })
                  .then(
                    function (e) {
                      n.setState({ message: e.message }), n.postDataServeur();
                    },
                    function (e) {
                      console.log(e);
                    }
                  );
              }),
              (n.state = { serveur: {} }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  this.postDataServeur();
                },
              },
              {
                key: "render",
                value: function () {
                  return o.a.createElement(
                    "div",
                    { className: "bloc-modifierProfil" },
                    o.a.createElement(
                      E.a,
                      null,
                      o.a.createElement(
                        f.a,
                        {
                          md: { span: 12, offset: 3 },
                          className: "titreModif",
                        },
                        o.a.createElement("p", null, "Modifier mon profil"),
                        o.a.createElement(
                          k.a,
                          null,
                          o.a.createElement(
                            k.a.Group,
                            { controlId: "formGroupName" },
                            o.a.createElement(k.a.Control, {
                              name: "lastname",
                              type: "text",
                              placeholder: "Nom",
                              onChange: this.change,
                              value: this.state.serveur.lastname,
                            })
                          ),
                          o.a.createElement(
                            k.a.Group,
                            { controlId: "formGroupPrenom" },
                            o.a.createElement(k.a.Control, {
                              name: "firstname",
                              type: "text",
                              placeholder: "Pr\xe9nom",
                              onChange: this.change,
                              value: this.state.serveur.firstname,
                            })
                          ),
                          o.a.createElement(
                            k.a.Group,
                            { controlId: "formAdresse" },
                            o.a.createElement(k.a.Control, {
                              type: "text",
                              placeholder: "Adresse",
                              name: "adress",
                              onChange: this.change,
                              value: this.state.serveur.adress,
                            })
                          ),
                          o.a.createElement(
                            k.a.Group,
                            { controlId: "formVille" },
                            o.a.createElement(k.a.Control, {
                              type: "text",
                              placeholder: "Ville",
                              name: "city",
                              onChange: this.change,
                              value: this.state.serveur.city,
                            })
                          ),
                          o.a.createElement(
                            k.a.Group,
                            { controlId: "formTel" },
                            o.a.createElement(k.a.Control, {
                              type: "text",
                              placeholder: "Code postal",
                              name: "postalCode",
                              onChange: this.change,
                              value: this.state.serveur.postalCode,
                            })
                          ),
                          o.a.createElement(
                            k.a.Group,
                            { controlId: "formTel" },
                            o.a.createElement(k.a.Control, {
                              type: "text",
                              placeholder: "Telephone(Facultatif)",
                              name: "phone",
                              onChange: this.change,
                              value: this.state.serveur.phone,
                            })
                          ),
                          o.a.createElement(k.a.Group, {
                            controlId: "formPoste",
                          })
                        ),
                        o.a.createElement(P, null),
                        o.a.createElement(
                          v.a,
                          {
                            className: "submitButton",
                            variant: "primary",
                            type: "submit",
                            onClick: this.editserveur,
                          },
                          "Mettre \xe0 jour mon profil"
                        ),
                        o.a.createElement("p", null, this.state.message)
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        x = (a(110), a(44)),
        D = a(80),
        z = a(72),
        H = a.n(z),
        A = a(81),
        L =
          (a(112),
          a(113),
          {
            style: {
              base: {
                color: "#32325d",
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": { color: "#aab7c4" },
              },
              invalid: { color: "#fa755a", iconColor: "#fa755a" },
            },
          }),
        q = (function (e) {
          Object(i.a)(a, e);
          var t = Object(m.a)(a);
          function a() {
            return Object(l.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  return o.a.createElement(
                    "div",
                    null,
                    o.a.createElement(
                      "label",
                      null,
                      "Card details",
                      o.a.createElement(x.CardElement, { options: L })
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component);
      function B() {
        var e = Object(x.useStripe)(),
          t = Object(x.useElements)(),
          a = (function () {
            var a = Object(A.a)(
              H.a.mark(function a(n) {
                var o, r, s, l, c, i;
                return H.a.wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        if (
                          ((i = function (e) {
                            var t = e.customerId,
                              a = e.paymentMethodId,
                              n = e.priceId;
                            return fetch(
                              "https://back-end.osc-fr1.scalingo.io/serveur/createsubscription",
                              {
                                method: "post",
                                headers: {
                                  "Content-type": "application/json",
                                  Authorization:
                                    "Bearer " + localStorage.getItem("token"),
                                },
                                body: JSON.stringify({
                                  customerId: t,
                                  paymentMethodId: a,
                                  priceId: "price_1IGLE1Hoh2Vgz5QdCuVYaQLf",
                                }),
                              }
                            )
                              .then(function (e) {
                                return e.json();
                              })
                              .then(function (e) {
                                if (e.error) throw (window.alert(e.message), e);
                                return e;
                              })
                              .then(function (e) {
                                return (
                                  window.alert(e.message),
                                  {
                                    paymentMethodId: a,
                                    priceId: n,
                                    subscription: e,
                                  }
                                );
                              });
                          }),
                          n.preventDefault(),
                          e && t)
                        ) {
                          a.next = 4;
                          break;
                        }
                        return a.abrupt("return");
                      case 4:
                        return (
                          (o = t.getElement(x.CardElement)),
                          (a.next = 7),
                          e.createPaymentMethod({ type: "card", card: o })
                        );
                      case 7:
                        (r = a.sent),
                          (s = r.error),
                          (l = r.paymentMethod),
                          s
                            ? console.log("[createPaymentMethod error]", s)
                            : (console.log("[PaymentMethod]", l),
                              (c = l.id),
                              "",
                              "",
                              i({
                                customerId: "",
                                paymentMethodId: c,
                                priceId: "",
                              }));
                      case 11:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })();
        return o.a.createElement(
          "form",
          { className: "coForm", onSubmit: a },
          o.a.createElement(q, null),
          o.a.createElement(k.a.Check, {
            className: "checkboxRet",
            type: "checkbox",
            name: "retractation",
            label:
              " Je renonce \xe0 mon droit de r\xe9tractation d'une dur\xe9e de 14 jours, afin que le service commence imm\xe9diatement. ",
            required: !0,
          }),
          o.a.createElement(
            "button",
            { className: "submitButtonSub", disabled: !e },
            "Devenir un Serveur Premium"
          )
        );
      }
      var G = Object(D.a)(
          "pk_live_51HAxRlHoh2Vgz5Qdxu3AGz9GC1q2B453vaXplDn3J0Q5wXRCZqwkuoCG5O1Nsr1VsbNIHmjVWj7XJo9cZmljPw7L00wQbxBO6Y"
        ),
        X = (n.Component, a(114), a(137)),
        V = (function (e) {
          Object(i.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).connect = function () {
                return n.props.login
                  ? o.a.createElement(
                      g.a,
                      { fluid: !0 },
                      o.a.createElement(
                        E.a,
                        { className: "partie1" },
                        o.a.createElement(
                          X.a,
                          { className: "nav justify-content-right" },
                          o.a.createElement(
                            X.a.Toggle,
                            {
                              alignRight: !0,
                              variant: "success",
                              id: "dropdown-basic",
                            },
                            o.a.createElement(
                              "a",
                              { href: "https://tipourboire.com" },
                              o.a.createElement("img", {
                                src: "/images/user.png",
                              })
                            )
                          ),
                          o.a.createElement(
                            X.a.Menu,
                            null,
                            o.a.createElement(
                              X.a.Item,
                              { href: "/MonProfil" },
                              "Profil"
                            ),
                            o.a.createElement(
                              X.a.Item,
                              {
                                onClick: function () {
                                  localStorage.clear(),
                                    n.props.setLogin(!1),
                                    n.props.history.push("/");
                                },
                                href: "/",
                              },
                              "D\xe9connexion"
                            )
                          )
                        ),
                        o.a.createElement(
                          f.a,
                          { className: "logoPartie1", md: 12 },
                          o.a.createElement(
                            "a",
                            { href: "https://tipourboire.com" },
                            o.a.createElement("img", {
                              src: "/images/logoJaune.png",
                            })
                          )
                        )
                      )
                    )
                  : o.a.createElement(
                      g.a,
                      { fluid: !0 },
                      o.a.createElement(
                        E.a,
                        { className: "partie1" },
                        o.a.createElement(
                          X.a,
                          { className: "nav justify-content-right" },
                          o.a.createElement(
                            X.a.Toggle,
                            {
                              alignRight: !0,
                              variant: "success",
                              id: "dropdown-basic",
                            },
                            o.a.createElement("img", {
                              src: "/images/user.png",
                            })
                          ),
                          o.a.createElement(
                            X.a.Menu,
                            null,
                            o.a.createElement(
                              X.a.Item,
                              { href: "/inscription" },
                              "Inscription"
                            ),
                            o.a.createElement(
                              X.a.Item,
                              { href: "/" },
                              "Connexion"
                            )
                          )
                        ),
                        o.a.createElement(
                          f.a,
                          { className: "logoPartie1", md: 12 },
                          o.a.createElement(
                            "a",
                            { href: "https://tipourboire.com/" },
                            o.a.createElement("img", {
                              src: "/images/logoJaune.png",
                            })
                          )
                        )
                      )
                    );
              }),
              (n.state = {}),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidUpdate",
                value: function () {
                  this.connect(), console.log("coucou", this.props.login);
                },
              },
              {
                key: "render",
                value: function () {
                  return o.a.createElement(
                    "div",
                    { className: "barre-de-menu" },
                    this.connect()
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        W =
          (a(116),
          (function (e) {
            Object(i.a)(a, e);
            var t = Object(m.a)(a);
            function a(e) {
              var n;
              return (
                Object(l.a)(this, a),
                ((n = t.call(this, e)).handleInput = function (e) {
                  n.setState(Object(u.a)({}, e.target.name, e.target.value));
                }),
                (n.passwordRenew = function (e) {
                  if ((e.preventDefault(), n.state.email && n.state.password)) {
                    var t = {
                        email: n.state.email,
                        password: n.state.password,
                        token: n.props.match.params.token,
                      },
                      a = {
                        method: "POST",
                        headers: new Headers({
                          "Content-Type": "application/json",
                        }),
                        body: JSON.stringify(t),
                      };
                    fetch(
                      "https://back-end.osc-fr1.scalingo.io/serveur/password-renew",
                      a
                    )
                      .then(function (e) {
                        return e.json();
                      })
                      .then(
                        function (e) {
                          n.setState({ message: e.message });
                        },
                        function (e) {
                          console.log(e);
                        }
                      );
                  }
                }),
                (n.state = { email: "", password: "", message: "" }),
                n
              );
            }
            return (
              Object(c.a)(a, [
                {
                  key: "render",
                  value: function () {
                    return o.a.createElement(
                      g.a,
                      { className: "renewPass" },
                      o.a.createElement(
                        E.a,
                        null,
                        o.a.createElement(
                          f.a,
                          { className: "PassRenewCol", md: 12 },
                          o.a.createElement(
                            "h1",
                            { className: "newPass" },
                            " Votre nouveau mot de passe"
                          ),
                          o.a.createElement(
                            "form",
                            {
                              className: "formRenew",
                              onSubmit: this.passwordRenew,
                            },
                            o.a.createElement("input", {
                              className: "inputRenew",
                              type: "email",
                              id: "email",
                              name: "email",
                              onChange: this.handleInput,
                              placeholder: "Email",
                            }),
                            o.a.createElement("br", null),
                            o.a.createElement("input", {
                              className: "inputRenew",
                              type: "password",
                              id: "password",
                              name: "password",
                              onChange: this.handleInput,
                              placeholder: "Nouveau mot de passe",
                            }),
                            o.a.createElement("br", null),
                            o.a.createElement(
                              v.a,
                              {
                                onClick: this.passwordRenew,
                                className: "renewButton",
                              },
                              "Valider"
                            )
                          ),
                          o.a.createElement("p", null, this.state.message)
                        )
                      )
                    );
                  },
                },
              ]),
              a
            );
          })(n.Component)),
        U =
          (a(117),
          (function (e) {
            Object(i.a)(a, e);
            var t = Object(m.a)(a);
            function a(e) {
              var n;
              return (
                Object(l.a)(this, a),
                ((n = t.call(this, e)).handleInput = function (e) {
                  n.setState(Object(u.a)({}, e.target.name, e.target.value));
                }),
                (n.passwordReset = function (e) {
                  if ((e.preventDefault(), n.state.email)) {
                    var t = { email: n.state.email },
                      a = {
                        method: "POST",
                        headers: new Headers({
                          "Content-Type": "application/json",
                        }),
                        body: JSON.stringify(t),
                      };
                    fetch(
                      "https://back-end.osc-fr1.scalingo.io/serveur/password-reset",
                      a
                    )
                      .then(function (e) {
                        return e.json();
                      })
                      .then(
                        function (e) {
                          n.setState({ message: e.message });
                        },
                        function (e) {
                          console.log(e);
                        }
                      );
                  }
                }),
                (n.state = { email: "", message: "" }),
                n
              );
            }
            return (
              Object(c.a)(a, [
                {
                  key: "render",
                  value: function () {
                    return o.a.createElement(
                      g.a,
                      { className: "passwordReset" },
                      o.a.createElement(
                        E.a,
                        null,
                        o.a.createElement(
                          f.a,
                          { className: "PassResetCol", md: 12 },
                          o.a.createElement(
                            "div",
                            { className: "PassResetDiv" },
                            o.a.createElement(
                              "h1",
                              { className: "taille" },
                              "Veuillez saisir votre mail "
                            ),
                            o.a.createElement(
                              "h1",
                              { className: "titrePass taille" },
                              "pour r\xe9initialiser votre mot de passe",
                              " "
                            ),
                            o.a.createElement(
                              "form",
                              {
                                className: "formReset",
                                onSubmit: this.passwordReset,
                              },
                              o.a.createElement("input", {
                                className: "inputReset",
                                type: "email",
                                id: "email",
                                name: "email",
                                onChange: this.handleInput,
                                placeholder: "Email",
                              })
                            )
                          )
                        ),
                        o.a.createElement(
                          f.a,
                          { className: "ButtonReset", md: 12 },
                          o.a.createElement(
                            v.a,
                            {
                              onClick: this.passwordReset,
                              className: "resetButton",
                            },
                            "Confirmer"
                          ),
                          o.a.createElement("p", null, this.state.message)
                        )
                      )
                    );
                  },
                },
              ]),
              a
            );
          })(n.Component)),
        F = (a(118), a(139)),
        J = a(138),
        _ = (function (e) {
          Object(i.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).deleteProfil = function (e) {
                var t = {
                    userId: localStorage.getItem("userID"),
                    profil: n.state.profil,
                  },
                  a = new Headers({
                    "Content-Type": "application/json",
                    Authorization: "bearer " + localStorage.getItem("token"),
                  }),
                  o = { method: "DELETE", body: JSON.stringify(t), headers: a };
                fetch("https://back-end.osc-fr1.scalingo.io/serveur/delete", o)
                  .then(function (e) {
                    return e.json();
                  })
                  .then(
                    function () {
                      window.location.href = "https://serveur.tipourboire.com/";
                    },
                    function (e) {
                      console.log(e);
                    }
                  );
              }),
              (n.modalDelete = function () {
                return o.a.createElement(
                  b.a,
                  {
                    show: n.state.showModal,
                    onHide: function () {
                      n.setState({ showModal: !1 });
                    },
                  },
                  o.a.createElement(
                    b.a.Header,
                    { closeButton: !0 },
                    o.a.createElement(
                      b.a.Title,
                      { className: "modalTitle" },
                      "Supprimer mon compte"
                    )
                  ),
                  o.a.createElement(
                    b.a.Body,
                    { className: "modalBody" },
                    "Etes vous sur de vouloir supprimer votre compte Tipourboire ?",
                    " "
                  ),
                  o.a.createElement(
                    b.a.Footer,
                    null,
                    o.a.createElement(
                      v.a,
                      {
                        className: "modalButtonDelete",
                        variant: "secondary",
                        onClick: function () {
                          n.deleteProfil();
                        },
                      },
                      "Supprimer"
                    ),
                    o.a.createElement(
                      v.a,
                      {
                        className: "modalButtonDelete",
                        variant: "primary",
                        onClick: function () {
                          n.setState({ showModal: !1 });
                        },
                      },
                      "Annuler"
                    ),
                    n.state.message
                  )
                );
              }),
              (n.state = { showModal: !1 }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return o.a.createElement(
                    "div",
                    { className: "footer" },
                    this.modalDelete(),
                    o.a.createElement(
                      F.a,
                      {
                        fixed: "bottom",
                        collapseOnSelect: !0,
                        expand: "lg",
                        bg: "#edeaea",
                      },
                      o.a.createElement(
                        F.a.Brand,
                        { href: "#home", className: "textFooter" },
                        "@Tipourboire"
                      ),
                      o.a.createElement(F.a.Toggle, {
                        "aria-controls": "responsive-navbar-nav",
                      }),
                      o.a.createElement(
                        F.a.Collapse,
                        { id: "responsive-navbar-nav" },
                        o.a.createElement(
                          J.a,
                          { className: "mr-auto" },
                          o.a.createElement(
                            J.a.Link,
                            {
                              href: "/mentionsLegales/mentionsL\xe9gales.pdf",
                              className: "textFooter",
                            },
                            "Mentions L\xe9gales"
                          ),
                          o.a.createElement(
                            J.a.Link,
                            { href: "/CGV/CGA.pdf", className: "textFooter" },
                            "CGA"
                          ),
                          o.a.createElement(
                            J.a.Link,
                            {
                              href: "/confidentialit\xe9/Politique_de_confidentialit\xe9_serveur.pdf",
                              className: "textFooter",
                            },
                            "Confidentialit\xe9"
                          ),
                          o.a.createElement(
                            J.a.Link,
                            {
                              href: "/cookies/POLITIQUE_DE_COOKIES.pdf",
                              className: "textFooter",
                            },
                            "Cookies"
                          ),
                          o.a.createElement(
                            J.a.Link,
                            {
                              href: "mailto:contact@tipourboire.com",
                              className: "textFooter",
                            },
                            "Contact"
                          ),
                          localStorage.getItem("token")
                            ? o.a.createElement(
                                J.a.Link,
                                {
                                  className: "textFooter",
                                  onClick: function () {
                                    return e.setState({ showModal: !0 });
                                  },
                                },
                                "Supprimer mon compte"
                              )
                            : null
                        ),
                        o.a.createElement(
                          J.a,
                          null,
                          o.a.createElement(
                            J.a.Link,
                            {
                              eventKey: 2,
                              href: "https://tipourboire.com",
                              className: "textFooter",
                            },
                            "A propos"
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        K = (a(119), a(21)),
        Q = (a(120), a(83)),
        Y = (function (e) {
          Object(i.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).renderMesHistory = function () {
                if (Array.isArray(n.state.profil.history))
                  return n.state.profil.history.length > 0
                    ? n.state.profil.history.map(function (e, t) {
                        return o.a.createElement(
                          "tr",
                          null,
                          o.a.createElement(
                            "td",
                            { type: "text", id: "montant", name: "montant" },
                            " ",
                            Math.round(e.amount / 10) / 10,
                            "\u20ac"
                          ),
                          o.a.createElement(
                            "td",
                            { type: "date", id: "date", name: "date" },
                            " ",
                            new Date(e.date).toLocaleDateString()
                          )
                        );
                      })
                    : o.a.createElement(
                        "p",
                        { className: "pourboire" },
                        "Vous n'avez re\xe7u aucun pourboire pour l'instant."
                      );
              }),
              (n.getMonProfil = function () {
                var e = new Headers({
                  Authorization: "Bearer " + localStorage.getItem("token"),
                  "Content-Type": "application/json",
                  "X-Requested-With": "XMLHttpRequest",
                });
                fetch(
                  "https://back-end.osc-fr1.scalingo.io/serveur/monProfil",
                  { method: "GET", headers: e }
                )
                  .then(function (e) {
                    return e.json();
                  })
                  .then(
                    function (e) {
                      var t = e;
                      n.setState({ profil: t }), console.log(n.state.profil);
                    },
                    function (e) {
                      console.log(e);
                    }
                  );
              }),
              (n.state = {
                profil: { restaurantName: {} },
                wallet: 1,
                history: [],
              }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  this.getMonProfil();
                },
              },
              {
                key: "render",
                value: function () {
                  return o.a.createElement(
                    g.a,
                    { className: "mesHisto" },
                    o.a.createElement(
                      E.a,
                      null,
                      o.a.createElement(
                        f.a,
                        null,
                        o.a.createElement(
                          "h1",
                          { className: "titreHisto" },
                          "Mon Historique de pourboire"
                        )
                      )
                    ),
                    o.a.createElement(
                      E.a,
                      { class: "table-responsive-sm" },
                      o.a.createElement(
                        Q.a,
                        {
                          class: "table-responsive-sm",
                          striped: !0,
                          hover: !0,
                        },
                        o.a.createElement(
                          "thead",
                          null,
                          o.a.createElement(
                            "tr",
                            null,
                            o.a.createElement("th", null, "Montant"),
                            o.a.createElement("th", null, "Date")
                          )
                        ),
                        o.a.createElement(
                          "tbody",
                          null,
                          this.renderMesHistory()
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        Z =
          (a(121),
          a(124),
          (function (e) {
            Object(i.a)(a, e);
            var t = Object(m.a)(a);
            function a(e) {
              var n;
              return (
                Object(l.a)(this, a),
                ((n = t.call(this, e)).addBankAccount = function (e) {
                  e.preventDefault();
                  var t = {
                      adress: n.state.adress,
                      password: n.state.password,
                      city: n.state.city,
                      region: n.state.region,
                      zip: n.state.zip,
                      iban: n.state.iban,
                      country: n.state.country,
                    },
                    a = new Headers({
                      "Content-Type": "application/json",
                      "X-Requested-With": "XMLHttpRequest",
                      Authorization: "Bearer " + localStorage.getItem("token"),
                    }),
                    o = { method: "POST", body: JSON.stringify(t), headers: a };
                  fetch(
                    "https://back-end.osc-fr1.scalingo.io/serveur/mangoBank",
                    o
                  )
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (e) {
                      "param_error" === e.Type
                        ? window.alert(
                            "Une erreur s'est produite, veuillez r\xe9essayer."
                          )
                        : window.alert(
                            "Votre compte bancaire \xe0 bien \xe9t\xe9 enregistr\xe9 vous pouvez maintenant retirer votre argent."
                          );
                    });
                }),
                (n.payoutMangoPay = function (e) {
                  e.preventDefault();
                  var t = {
                      adress: n.state.adress,
                      password: n.state.password,
                      city: n.state.city,
                      region: n.state.region,
                      zip: n.state.zip,
                      iban: n.state.iban,
                    },
                    a = new Headers({
                      "Content-Type": "application/json",
                      "X-Requested-With": "XMLHttpRequest",
                      Authorization: "Bearer " + localStorage.getItem("token"),
                    }),
                    o = { method: "POST", body: JSON.stringify(t), headers: a };
                  fetch(
                    "https://back-end.osc-fr1.scalingo.io/serveur/payoutMango",
                    o
                  )
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (e) {
                      n.setState({ messageTransfert: e.messageTransfert });
                    });
                }),
                (n.change = function (e) {
                  var t = n.state.document;
                  (t[e.target.name] = e.target.value),
                    n.setState({ document: t });
                }),
                (n.handleInput = function (e) {
                  n.setState(Object(u.a)({}, e.target.name, e.target.value));
                }),
                (n.getWalletAmount = function () {
                  var e = new Headers({
                    "Content-Type": "application/json",
                    Authorization: "bearer " + localStorage.getItem("token"),
                  });
                  fetch(
                    "https://back-end.osc-fr1.scalingo.io/serveur/getWalet",
                    { method: "get", headers: e }
                  )
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (e) {
                      n.setState({ amount: e });
                    });
                }),
                (n.onSubmit = function (e) {
                  e.preventDefault();
                  var t = new FormData(e.target),
                    a = new Headers({
                      Authorization: "bearer " + localStorage.getItem("token"),
                    });
                  fetch(
                    "https://back-end.osc-fr1.scalingo.io/serveur/mangoKYC",
                    { method: "POST", body: t, headers: a }
                  )
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (e) {
                      "param_error" === e.Type
                        ? window.alert(
                            "Une erreur s'est produite, veuillez r\xe9essayer."
                          )
                        : (console.log(e),
                          window.alert(
                            "Vos documents ont bien \xe9t\xe9 envoy\xe9s une r\xe9ponse vous sera fourni dans les 24 heures."
                          ));
                    });
                }),
                (n.getMonProfil = function () {
                  var e = new Headers({
                    Authorization: "Bearer " + localStorage.getItem("token"),
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                  });
                  fetch(
                    "https://back-end.osc-fr1.scalingo.io/serveur/monProfil",
                    { method: "GET", headers: e }
                  )
                    .then(function (e) {
                      return e.json();
                    })
                    .then(
                      function (e) {
                        var t = e;
                        n.setState({ profil: t }),
                          console.log(
                            "dsqdsqdsqwsxdqsddqsdsq",
                            n.state.profil.kycStatut
                          );
                      },
                      function (e) {
                        console.log(e);
                      }
                    );
                }),
                (n.state = { document: {}, amount: 0, profil: {} }),
                n
              );
            }
            return (
              Object(c.a)(a, [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.getWalletAmount(), this.getMonProfil();
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return o.a.createElement(
                      g.a,
                      { className: "cagnotteCont" },
                      o.a.createElement(
                        E.a,
                        { className: "rowCagn" },
                        o.a.createElement(
                          f.a,
                          null,
                          o.a.createElement(
                            "h1",
                            null,
                            "Montant de vos pourboires :"
                          ),
                          o.a.createElement(
                            "h2",
                            null,
                            o.a.createElement(
                              "strong",
                              null,
                              this.state.amount / 100,
                              " euros"
                            )
                          ),
                          o.a.createElement(
                            v.a,
                            { onClick: this.payoutMangoPay },
                            "Retirer votre argent"
                          ),
                          o.a.createElement("br", null),
                          o.a.createElement(
                            "p",
                            null,
                            this.state.messageTransfert
                          )
                        )
                      ),
                      o.a.createElement(
                        E.a,
                        { className: "rowPasDeCagn" },
                        o.a.createElement(
                          f.a,
                          null,
                          o.a.createElement(
                            "h5",
                            { className: "rappelKYC" },
                            " ",
                            'Pas encore de cagnotte pour percevoir vos pourboires ? Suivez les \xe9tapes dans la partie "Mes Documents" !'
                          )
                        )
                      )
                    );
                  },
                },
              ]),
              a
            );
          })(n.Component)),
        $ =
          (a(125),
          a(126),
          a(127),
          (function (e) {
            Object(i.a)(a, e);
            var t = Object(m.a)(a);
            function a(e) {
              var n;
              return (
                Object(l.a)(this, a),
                ((n = t.call(this, e)).change = function (e) {
                  var t = n.state.referent;
                  (t[e.target.name] = e.target.value),
                    n.setState({ referent: t });
                }),
                (n.getReferentWallet = function () {
                  var e = new Headers({
                    Authorization: "Bearer " + localStorage.getItem("token"),
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                  });
                  fetch(
                    "https://back-end.osc-fr1.scalingo.io/serveur/referentWallet",
                    { method: "GET", headers: e }
                  )
                    .then(function (e) {
                      return e.json();
                    })
                    .then(
                      function (e) {
                        var t = e;
                        n.setState({ amount: t });
                      },
                      function (e) {
                        console.log(e);
                      }
                    );
                }),
                (n.getWaiterList = function () {
                  var e = new Headers({
                    Authorization: "Bearer " + localStorage.getItem("token"),
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                  });
                  fetch(
                    "https://back-end.osc-fr1.scalingo.io/serveur/waiterList",
                    { method: "GET", headers: e }
                  )
                    .then(function (e) {
                      return e.json();
                    })
                    .then(
                      function (e) {
                        n.setState({ waiter: e });
                      },
                      function (e) {
                        console.log(e);
                      }
                    );
                }),
                (n.renderMesServeurs = function () {
                  return n.state.waiter.tabServeur.map(function (e) {
                    return o.a.createElement(
                      f.a,
                      { className: "nameServ", xs: 12, s: 12, md: 6 },
                      o.a.createElement(
                        "h3",
                        null,
                        o.a.createElement(
                          "strong",
                          null,
                          e.serveurName,
                          "",
                          e.serveurLastName
                        )
                      ),
                      o.a.createElement("br", null),
                      o.a.createElement(
                        k.a,
                        null,
                        o.a.createElement(k.a.Control, {
                          type: "number",
                          placeholder: "Montant du transfert",
                          name: "amount",
                          onChange: n.change,
                        })
                      ),
                      o.a.createElement(
                        v.a,
                        {
                          className: "CollectButton",
                          type: "submit",
                          onClick: function () {
                            var t = new Headers({
                                "Content-Type": "application/json",
                                Authorization:
                                  "bearer " + localStorage.getItem("token"),
                              }),
                              a = {
                                email: e.serveurMail,
                                amount: n.state.referent.amount,
                              },
                              o = {
                                method: "POST",
                                headers: t,
                                body: JSON.stringify(a),
                              };
                            fetch(
                              "https://back-end.osc-fr1.scalingo.io/serveur/referentTransfert",
                              o
                            )
                              .then(function (e) {
                                return e.json();
                              })
                              .then(
                                function (e) {
                                  n.setState({ message: e.message }),
                                    n.getReferentWallet();
                                },
                                function (e) {
                                  console.log(e);
                                }
                              );
                          },
                        },
                        "Envoyer"
                      )
                    );
                  });
                }),
                (n.state = { waiter: { tabServeur: [] }, referent: [] }),
                n
              );
            }
            return (
              Object(c.a)(a, [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.getReferentWallet(), this.getWaiterList();
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return o.a.createElement(
                      g.a,
                      { className: "mesHisto" },
                      o.a.createElement(
                        E.a,
                        { className: "commentaireHisto" },
                        o.a.createElement(
                          f.a,
                          { xs: 12, s: 12, md: 12 },
                          o.a.createElement(
                            "h1",
                            null,
                            "Montant du pot commun :"
                          ),
                          o.a.createElement(
                            "h2",
                            { className: "montantCo" },
                            o.a.createElement(
                              "strong",
                              null,
                              this.state.amount / 100,
                              " euros"
                            )
                          ),
                          o.a.createElement(
                            "p",
                            null,
                            "Les frais de gestion seront automatiquement pr\xe9lev\xe9s de la part distribu\xe9e \xe0 chaque b\xe9n\xe9ficiaire."
                          ),
                          o.a.createElement(
                            "h1",
                            null,
                            "Liste des b\xe9n\xe9ficiaires:"
                          )
                        )
                      ),
                      o.a.createElement(
                        E.a,
                        { className: "rowServeurCo" },
                        this.renderMesServeurs()
                      ),
                      o.a.createElement(
                        "p",
                        { style: { textAlign: "center" } },
                        this.state.message
                      )
                    );
                  },
                },
              ]),
              a
            );
          })(n.Component)),
        ee =
          (a(128),
          (function (e) {
            Object(i.a)(a, e);
            var t = Object(m.a)(a);
            function a(e) {
              var n;
              return (
                Object(l.a)(this, a),
                ((n = t.call(this, e)).addBankAccount = function (e) {
                  e.preventDefault();
                  var t = {
                      adress: n.state.adress,
                      password: n.state.password,
                      city: n.state.city,
                      region: n.state.region,
                      zip: n.state.zip,
                      iban: n.state.iban,
                      country: n.state.country,
                    },
                    a = new Headers({
                      "Content-Type": "application/json",
                      "X-Requested-With": "XMLHttpRequest",
                      Authorization: "Bearer " + localStorage.getItem("token"),
                    }),
                    o = { method: "POST", body: JSON.stringify(t), headers: a };
                  fetch(
                    "https://back-end.osc-fr1.scalingo.io/serveur/mangoBank",
                    o
                  )
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (e) {
                      "param_error" === e.Type
                        ? window.alert(
                            "Une erreur s'est produite, veuillez r\xe9essayer."
                          )
                        : window.alert(
                            "Votre compte bancaire \xe0 bien \xe9t\xe9 enregistr\xe9 vous pouvez maintenant retirer votre argent."
                          );
                    });
                }),
                (n.payoutMangoPay = function (e) {
                  e.preventDefault();
                  var t = {
                      adress: n.state.adress,
                      password: n.state.password,
                      city: n.state.city,
                      region: n.state.region,
                      zip: n.state.zip,
                      iban: n.state.iban,
                    },
                    a = new Headers({
                      "Content-Type": "application/json",
                      "X-Requested-With": "XMLHttpRequest",
                      Authorization: "Bearer " + localStorage.getItem("token"),
                    }),
                    o = { method: "POST", body: JSON.stringify(t), headers: a };
                  fetch(
                    "https://back-end.osc-fr1.scalingo.io/serveur/payoutMango",
                    o
                  )
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (e) {
                      n.setState({ messageTransfert: e.messageTransfert });
                    });
                }),
                (n.change = function (e) {
                  var t = n.state.document;
                  (t[e.target.name] = e.target.value),
                    n.setState({ document: t });
                }),
                (n.handleInput = function (e) {
                  n.setState(Object(u.a)({}, e.target.name, e.target.value));
                }),
                (n.onSubmit = function (e) {
                  e.preventDefault();
                  var t = new FormData(e.target),
                    a = new Headers({
                      Authorization: "bearer " + localStorage.getItem("token"),
                    });
                  fetch(
                    "https://back-end.osc-fr1.scalingo.io/serveur/mangoKYC",
                    { method: "POST", body: t, headers: a }
                  )
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (e) {
                      console.log("ezeza", e),
                        0 == e.success
                          ? window.alert(
                              "Une erreur s'est produite, veuillez r\xe9essayer. Pensez \xe0 v\xe9rifier la/les taille(s) de votre/vos image(s)"
                            )
                          : (console.log(e),
                            window.alert(
                              "Vos documents ont bien \xe9t\xe9 envoy\xe9s une r\xe9ponse vous sera fourni dans les 24 heures."
                            ));
                    });
                }),
                (n.checkKyc = function () {
                  var e = new Headers({
                    "Content-Type": "application/json",
                    Authorization: "bearer " + localStorage.getItem("token"),
                  });
                  fetch(
                    "https://back-end.osc-fr1.scalingo.io/serveur/kyc-statut",
                    { method: "get", headers: e }
                  )
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (e) {});
                }),
                (n.getMonProfil = function () {
                  var e = new Headers({
                    Authorization: "Bearer " + localStorage.getItem("token"),
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                  });
                  fetch(
                    "https://back-end.osc-fr1.scalingo.io/serveur/monProfil",
                    { method: "GET", headers: e }
                  )
                    .then(function (e) {
                      return e.json();
                    })
                    .then(
                      function (e) {
                        var t = e;
                        n.setState({ profil: t }),
                          console.log("KYC statut", n.state.profil.kycStatut);
                      },
                      function (e) {
                        console.log(e);
                      }
                    );
                }),
                (n.state = { document: {}, profil: {} }),
                n
              );
            }
            return (
              Object(c.a)(a, [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.checkKyc(), this.getMonProfil();
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return o.a.createElement(
                      g.a,
                      { className: "cagnotteCont" },
                      o.a.createElement(
                        E.a,
                        { className: "rowId" },
                        o.a.createElement(
                          f.a,
                          null,
                          o.a.createElement(
                            "div",
                            { className: "kyc" },
                            o.a.createElement(
                              "form",
                              { onSubmit: this.onSubmit },
                              o.a.createElement(
                                "p",
                                { className: "titleKyc" },
                                "Confirmation d'identit\xe9 "
                              ),
                              o.a.createElement(
                                "p",
                                null,
                                "( Vous pouvez mettre deux images/document PDf maximum 32 Kb taille maximum: 10Mb )"
                              ),
                              o.a.createElement("input", {
                                enctype: "multipart/form-data",
                                className: "chargePic",
                                type: "file",
                                name: "file",
                                multiple: !0,
                                accept:
                                  "image/png, image/jpeg, image/jpg, image/pdf , application/pdf",
                              }),
                              o.a.createElement(
                                v.a,
                                { type: "submit" },
                                "T\xe9l\xe9charger"
                              )
                            ),
                            this.state.message
                          )
                        ),
                        o.a.createElement(
                          "div",
                          { className: "kycStatut" },
                          o.a.createElement(
                            "p",
                            { className: "kycTitleStatut" },
                            "Statut de vos documents:"
                          ),
                          o.a.createElement(
                            "div",
                            { className: "statut" },
                            o.a.createElement(
                              "p",
                              { className: "statutValid" },
                              "VALIDATED" === this.state.profil.kycStatut
                                ? "Valid\xe9"
                                : ""
                            ),
                            o.a.createElement(
                              "p",
                              { className: "statutRefused" },
                              "REFUSED" === this.state.profil.kycStatut
                                ? " Document refus\xe9 veuillez vous assurer que la carte d'identit\xe9 n'ai pas \xe9t\xe9 retouch\xe9 et que le recto et le verso soit bien visible sur la m\xeame page."
                                : ""
                            ),
                            o.a.createElement(
                              "p",
                              { className: "statutIn" },
                              "REFUSED" !== this.state.profil.kycStatut &&
                                "VALIDATED" !== this.state.profil.kycStatut
                                ? "En Cours"
                                : ""
                            )
                          )
                        )
                      ),
                      o.a.createElement(
                        E.a,
                        null,
                        o.a.createElement(
                          f.a,
                          null,
                          o.a.createElement(
                            k.a,
                            null,
                            o.a.createElement(k.a.Control, {
                              type: "text",
                              placeholder: "Votre Adresse",
                              name: "adress",
                              onChange: this.handleInput,
                              value: this.state.adress,
                            }),
                            o.a.createElement(k.a.Control, {
                              type: "text",
                              placeholder: "Code Postal",
                              name: "zip",
                              onChange: this.handleInput,
                              value: this.state.zip,
                            }),
                            o.a.createElement(k.a.Control, {
                              type: "text",
                              placeholder: "Ville",
                              name: "city",
                              onChange: this.handleInput,
                              value: this.state.city,
                            }),
                            o.a.createElement(k.a.Control, {
                              type: "text",
                              placeholder:
                                "Votre r\xe9gion, PACA, AQUITAINE, BRETAGNE... ",
                              name: "region",
                              onChange: this.handleInput,
                              value: this.state.region,
                            }),
                            o.a.createElement(k.a.Control, {
                              type: "text",
                              placeholder: "Votre IBAN, FRXXXXXXXXXXXXXXXXXX",
                              name: "iban",
                              onChange: this.handleInput,
                              value: this.state.iban,
                            }),
                            o.a.createElement(
                              k.a.Control,
                              {
                                as: "select",
                                type: "text",
                                name: "country",
                                onChange: this.handleInput,
                                value: this.state.country,
                              },
                              o.a.createElement("option", null, "FR"),
                              o.a.createElement("option", null, "DE"),
                              o.a.createElement("option", null, "LT"),
                              o.a.createElement("option", null, "GB"),
                              o.a.createElement("option", null, "AT"),
                              o.a.createElement("option", null, "BE"),
                              o.a.createElement("option", null, "BG"),
                              o.a.createElement("option", null, "CY"),
                              o.a.createElement("option", null, "DK"),
                              o.a.createElement("option", null, "ES"),
                              o.a.createElement("option", null, "EE"),
                              o.a.createElement("option", null, "FI"),
                              o.a.createElement("option", null, "GR"),
                              o.a.createElement("option", null, "HU"),
                              o.a.createElement("option", null, "IE"),
                              o.a.createElement("option", null, "IT"),
                              o.a.createElement("option", null, "LV"),
                              o.a.createElement("option", null, "LU"),
                              o.a.createElement("option", null, "MT"),
                              o.a.createElement("option", null, "NL"),
                              o.a.createElement("option", null, "PL"),
                              o.a.createElement("option", null, "PT"),
                              o.a.createElement("option", null, "CZ"),
                              o.a.createElement("option", null, "RO"),
                              o.a.createElement("option", null, "SK"),
                              o.a.createElement("option", null, "SI"),
                              o.a.createElement("option", null, "SE")
                            )
                          ),
                          o.a.createElement(
                            v.a,
                            {
                              className: "butBankAcc",
                              type: "submit",
                              onClick: this.addBankAccount,
                            },
                            "Envoyez vos informations bancaires"
                          ),
                          o.a.createElement("br", null),
                          o.a.createElement("br", null),
                          this.state.messageBA
                        )
                      )
                    );
                  },
                },
              ]),
              a
            );
          })(n.Component)),
        te = (function (e) {
          Object(i.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(l.a)(this, a),
              ((n = t.call(this, e)).setLogin = function (e) {
                n.setState({ login: e });
              }),
              (n.state = { login: !1 }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  null != localStorage.getItem("token") &&
                    this.setState({ login: !0 });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return o.a.createElement(
                    d.a,
                    null,
                    o.a.createElement(
                      "div",
                      { className: "main-container" },
                      o.a.createElement(V, {
                        setLogin: this.setLogin,
                        login: this.state.login,
                      }),
                      o.a.createElement(
                        K.c,
                        null,
                        o.a.createElement(K.a, {
                          exact: !0,
                          path: "/",
                          render: function (t) {
                            return o.a.createElement(
                              j,
                              Object.assign({ setLogin: e.setLogin }, t)
                            );
                          },
                        }),
                        o.a.createElement(K.a, {
                          path: "/inscription",
                          component: O,
                        }),
                        o.a.createElement(K.a, {
                          path: "/inscriptionParrainage",
                          component: T,
                        }),
                        o.a.createElement(K.a, {
                          path: "/mesDocuments",
                          component: ee,
                        }),
                        o.a.createElement(K.a, {
                          path: "/monProfil",
                          component: S,
                        }),
                        o.a.createElement(K.a, {
                          path: "/modifierMonProfil",
                          component: R,
                        }),
                        o.a.createElement(K.a, {
                          path: "/mesTips",
                          component: M,
                        }),
                        o.a.createElement(K.a, {
                          path: "/mesHistoriques",
                          component: Y,
                        }),
                        o.a.createElement(K.a, {
                          path: "/passwordReset",
                          component: U,
                        }),
                        o.a.createElement(K.a, {
                          path: "/passwordRenew",
                          component: W,
                        }),
                        o.a.createElement(K.a, {
                          path: "/cagnotte",
                          component: Z,
                        }),
                        o.a.createElement(K.a, {
                          path: "/referent",
                          component: $,
                        })
                      ),
                      o.a.createElement(_, null)
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      s.a.render(
        o.a.createElement(o.a.StrictMode, null, o.a.createElement(te, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
    87: function (e, t, a) {
      e.exports = a(129);
    },
    92: function (e, t, a) {},
    93: function (e, t, a) {},
    94: function (e, t, a) {},
  },
  [[87, 1, 2]],
]);
//# sourceMappingURL=main.1432a49d.chunk.js.map
