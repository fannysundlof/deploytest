import React, { Component } from "react";
import firebase from "../Firebase/FirebaseConfig";
import Bookbtn from "../Includes/Bookbtn";

class Card extends Component {
  state = {
    user: "" || localStorage.getItem("user"),
    displayName: "",
  };

  
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
            src={"/img/interior-1.jpeg"}
            alt={"bild"}
          />
          <h2 className={"product__card-name"} id="title" name={"title"}>
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
            <Bookbtn
              className={"product__card-btn"}
              
            >
              Boka
            </Bookbtn>
          )}
        </div>

        <div className={"product__card"}>
          <img
            className={"product__card-img"}
            src={"/img/interior-2.jpeg"}
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
            <Bookbtn
            className={"product__card-btn"}
            
          >
            Boka
          </Bookbtn>
          )}
        </div>

        <div className={"product__card"}>
          <img
            className={"product__card-img"}
            src={"/img/interior-4.jpeg"}
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
            <Bookbtn
              className={"product__card-btn"}
            >
              Boka
            </Bookbtn>
          )}
        </div>
      </div>
    );
  }
}

export default Card;
