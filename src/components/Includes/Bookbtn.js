import React, {Component} from "react";
import BookModal from "./Modal";
import firebase from "../Firebase/FirebaseConfig";

class Bookbtn extends Component{

    state = {
            openModal: false, 
        }
    

    openModalEvent(){
        this.setState( {openModal:!this.state.openModal})
    }
    

    onSubmitForm(e) {
        e.preventDefault();
    
        if (firebase.auth().currentUser === null) {
         alert("Du behöver vara inloggad för att boka ett möte.");
        } else {
          const db = firebase.firestore();
    
          db.collection("Booking")
            .doc(firebase.auth().currentUser.uid.toString())
            .set({
              username: e.target.elements.username.value,
              time: e.target.elements.time.value,
              tel: e.target.elements.tel.value,
              message: e.target.elements.message.value,
              title: document.getElementById("title").innerHTML,
              price: document.getElementById("price").innerHTML,
              id: document.getElementById("id").innerHTML,
            });
        
            this.setState( {openModal:false});
          console.log("Din boking är skickad");
        }
    }


        render(){
     return (
            <div>
                <BookModal openModal={this.state.openModal} closeModal={this.closeModalEvent} submitForm={this.onSubmitForm.bind(this)} />
                  <button onClick={this.openModalEvent.bind(this)}>Boka</button>
            </div> 
            )
        }
       
             
       
    }


export default Bookbtn;