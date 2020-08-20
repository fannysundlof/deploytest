import React, { Component } from "react";
import firebase from "../Firebase/FirebaseConfig";


class Form extends Component {

  state={
    username:"Namn",
    time:"00:00",
    tel:"Tel",
    message:"Meddelande",
  }

  // Controlled Components FORM 
  onChangeUsername(e) {
    this.setState({username: e.target.value});
    
  }

  onChangeTime(e) {
    this.setState({time: e.target.value});
    
  }

  onChangeTel (e) {
    this.setState({tel: e.target.value});
    
  }

  onChangeMsg (e) {
    this.setState({message: e.target.value});
    
  }



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

      alert("Ditt meddelande är skickats");
      
    }
  }

    

  render() {

    return (
      <div>


        <form onSubmit={this.onSubmitForm} className={"form"}>
          <input
            type={"text"}
            className={"input"}
            name="username"
            value={this.state.username} onChange={this.onChangeUsername.bind(this)}
          ></input>
          <input
            type={"text"}
            className={"input"}
            placeholder={"Tid"}
            name="time"
            value={this.state.time} onChange={this.onChangeTime.bind(this)}
          ></input>
          <input
            type={"number"}
            className={"input"}
            placeholder={"Tel"}
            name="tel"
            value={this.state.tel} onChange={this.onChangeTel.bind(this)}
          ></input>
          <textarea
            type={"text"}
            className={"input"}
            placeholder={"Meddelande"}
            name="message"
            value={this.state.message} onChange={this.onChangeMsg.bind(this)}
          ></textarea>

          <button>Boka</button>
        </form>
      </div>
    );
  }
}

export default Form;
