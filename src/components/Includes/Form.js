import React, { Component } from "react";
import firebase from "../Firebase/FirebaseConfig";

class Form extends Component {
  onSubmitForm(e) {
    e.preventDefault();

    if (firebase.auth().currentUser === null) {
      alert("Du behöver vara inloggad för att boka ett möte.");
    } else {
      const db = firebase.firestore();

      db.collection("message")
        .doc(firebase.auth().currentUser.uid.toString())
        .set({
          username: e.target.elements.username.value,
          time: e.target.elements.time.value,
          tel: e.target.elements.tel.value,
          message: e.target.elements.message.value,
        });

      alert("Ditt meddelande är skickat");
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitForm} className={"form"}>
          <input
            type={"text"}
            className={"input"}
            placeholder={"Namn"}
            name="username"
          ></input>
          <input
            type={"text"}
            className={"input"}
            placeholder={"Tid"}
            name="time"
          ></input>
          <input
            type={"number"}
            className={"input"}
            placeholder={"Tel"}
            name="tel"
          ></input>
          <textarea
            type={"text"}
            className={"input"}
            placeholder={"Meddelande"}
            name="message"
          ></textarea>

          <button>Boka</button>
        </form>
      </div>
    );
  }
}

export default Form;
