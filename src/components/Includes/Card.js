import React, { Component } from "react";

import firebase from "../Firebase/FirebaseConfig";

class Card extends Component {
  state = {
    user: "" || localStorage.getItem("user"),
    displayName: "",
  };

  onClickSave() {
    const db = firebase.firestore();
    db.collection("booking")
      .doc(firebase.auth().currentUser.uid.toString())
      .set({
        title: document.getElementById("title").innerHTML,
        price: document.getElementById("price").innerHTML,
        id: document.getElementById("id").innerHTML,
      });

    alert("Tillagd i bokingar");
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user: user.email,
          displayName: user.displayName,
        });
      } else {
        this.setState({ user: localStorage.getItem("user") });
      }
    });
  }

  render() {
    const loggedIn = this.state.user || localStorage.getItem("user");

  //Hårdkodade product cards eftersom starpi ej är deployat
  
    return (
      <div className={"products__cards"}>
        <div className={"product__card"}>
          <img
            className={"product__card-img"}
            src={require("../../img/interior-1.jpeg")}
            alt={"bild"}
          />
          <h2 className={"product__card-name"} id="title">
            Interior 1
          </h2>
          <div className={"product__card-desc"}>
            <p className={"product__card-text"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              iure!
            </p>
          </div>
          <p className={"product__card-price"} id="price">
            10 000 kr
          </p>
          <span id="id" hidden>
            1
          </span>
          {!loggedIn ? (
            <p>Logga in för att boka</p>
          ) : (
            <button
              className={"product__card-btn"}
              onClick={this.onClickSave.bind(this)}
            >
              Boka
            </button>
          )}
        </div>

        <div className={"product__card"}>
          <img
            className={"product__card-img"}
            src={require("../../img/interior-2.jpeg")}
            alt={"bild"}
          />
          <h2 className={"product__card-name"} id="title">
            Interior 2
          </h2>
          <div className={"product__card-desc"}>
            <p className={"product__card-text"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              iure!
            </p>
          </div>
          <p className={"product__card-price"} id="price">
            12 000 kr
          </p>
          <span id="id" hidden>
            2
          </span>
          {!loggedIn ? (
            <p>Logga in för att boka</p>
          ) : (
            <button
              className={"product__card-btn"}
              onClick={this.onClickSave.bind(this)}
            >
              Boka
            </button>
          )}
        </div>

        <div className={"product__card"}>
          <img
            className={"product__card-img"}
            src={require("../../img/interior-4.jpeg")}
            alt={"bild"}
          />
          <h2 className={"product__card-name"} id="title">
            Interior 3
          </h2>
          <div className={"product__card-desc"}>
            <p className={"product__card-text"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              iure!
            </p>
          </div>
          <p className={"product__card-price"} id="price">
            15 000 kr
          </p>
          <span id="id" hidden>
            3
          </span>
          {!loggedIn ? (
            <p>Logga in för att boka</p>
          ) : (
            <button
              className={"product__card-btn"}
              onClick={this.onClickSave.bind(this)}
            >
              Boka
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Card;
