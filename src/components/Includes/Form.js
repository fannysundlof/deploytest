import React, { Component } from "react";
import firebase from "../Firebase/FirebaseConfig";
import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


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

  render(props) {
    return (
      <div>

      
     <Modal isOpen={props.openModal} style={customStyles} contentLabel="BookingForm">


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

        </Modal>
      </div>
    );
  }
}

export default Form;
