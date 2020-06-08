import React, { Component } from "react";

import firebase from "../Firebase/FirebaseConfig";

class UserMessages extends Component {
  state = {
    displaybtn: true,
    
  };

  onClickGetMessage() {
    const db = firebase.firestore();
    const docRef = db
      .collection("message")
      .doc(firebase.auth().currentUser.uid.toString());

    docRef.get().then((message) => {
      if (message.exists) {
        var messageCard = document.getElementById("message_card");
        var btn = document.getElementById("btn");

        messageCard.querySelector(
          ".username"
        ).innerHTML = message.data().username;
        messageCard.querySelector(
          ".message"
        ).innerHTML = message.data().message;
        messageCard.querySelector(".time").innerHTML = message.data().time;

        console.log("Det finns:", message.data());
        this.setState({ displaybtn: false });
        btn.remove();
      } else {
        console.log("error");
      }
    });
  }

  render() {
    return (
      <div>
        <div className={"edit_products__cards"}>
          {this.state.displaybtn && (
            <button
              onClick={this.onClickGetMessage.bind(this)}
              id={"btn"}
              className={"contact_btn"}
            >
              Visa skickade meddelanden
            </button>
          )}
          <div id={"message_card"}>
            <h3 className={"username"}> </h3>
            <p className={"message"}> </p>
            <p className={"time"}></p>
          </div>
        </div>
      </div>
    );
  }
}

export default UserMessages;
