import React, { Component } from "react";

import firebase from "../Firebase/FirebaseConfig";

class UserBooking extends Component {
  state = {
    displaybtn: true,
  };

  onClickGetBookings() {
    const db = firebase.firestore();
    const docRef = db
      .collection("Booking")
      .doc(firebase.auth().currentUser.uid.toString());

    docRef.get().then((booking) => {
      if (booking.exists) {
        var bookingCard = document.getElementById("booking_card");
        var btn = document.getElementById("btn");

        bookingCard.querySelector(".title").innerHTML = booking.data().title;
        bookingCard.querySelector(".price").innerHTML = booking.data().price;
        bookingCard.querySelector(".id").innerHTML = booking.data().id;

        let productId = booking.data().id;
        localStorage.setItem("id", productId);

        console.log("Det finns:", booking.data());
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
              onClick={this.onClickGetBookings.bind(this)}
              id={"btn"}
              className={"contact_btn"}
            >
              Visa bokingar
            </button>
          )}
          <div id={"booking_card"} >
          
            <h3 className={"title"} > </h3>
            <p className={"id"} hidden></p>
            <p className={"price"}> </p>
          </div>
          </div>
        </div>
     
    );
  }
}

export default UserBooking;
