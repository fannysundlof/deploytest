import React, { Component } from "react";
import firebase from "../Firebase/FirebaseConfig";


class Footer extends Component {


    state= {
        condition: true,
        user: ""
       }
    
    onSubmitForm(e){
    e.preventDefault();
    
    const db = firebase.firestore();
    const loggedIn = firebase.auth().currentUser.uid;
    if (!loggedIn) {
        console.log("logga in tack")
    } else {
        db.collection("contact")
        .doc(firebase.auth().currentUser.uid.toString())
        .set({
            email : e.target.elements.email.value,
            message : e.target.elements.message.value
        })
    
            console.log("Message sent")
        
    }
    }

render(){
  return(

    <footer className="footer">
        <div className="footer__linknav">
          <div className="linknav__griditem">
          <h2>Kontakta oss</h2>
          </div>
            <form onSubmit={this.onSubmitForm.bind(this)} className={"contact_form"}>
              <input type="email" name="email" placeholder="Email" className={"contact_input"} />
              <input type="textarea" name="message" placeholder="Message..." rows="3" cols="50" className={"contact_input"}/>
              <button className={"contact_btn"}>Kontakta oss</button>
            </form>
        </div>
        <div className="footer__contact">
          <div className="contact__griditem">
            <i className="fas fa-map-marker-alt fa-lg"></i>
            <p><span>Exempelgatan 25</span>123 45 Exempelstaden</p>
          </div>
          <div className="contact__griditem">
            <i className="fas fa-phone-alt fa-lg"></i>
            <p>08 - 123 45 67</p>
          </div>
          <div className="contact__griditem">
            <i className="fas fa-envelope fa-lg"></i>
            <p>Hej@Bokning.se</p>
          </div>
        </div>
        <div className="footer__aboutus">
          <div className="aboutus-wrapper">
            <div className="aboutus-container">
              <h2 className="aboutus__header">Om oss</h2>
              <p className="aboutus__info">
                Boka upplevelser med oss!
              </p>
            </div>
            <ul className="aboutus__icons-container">
              <li className="aboutus__icon">
                <a href="https://www.instagram.com/"><i className="fab fa-instagram fa-2x"></i></a>
              </li>
              <li className="aboutus__icon">
                <a href="https://www.facebook.com/"><i className="fab fa-facebook fa-2x"></i></a>
              </li>
              <li className="aboutus__icon">
                <a href="https://twitter.com/"><i className="fab fa-twitter fa-2x"></i></a>
              </li>
              <li className="aboutus__icon">
                <a href="https://www.linkedin.com/"><i className="fab fa-linkedin fa-2x"></i></a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer__copy-hidden">
          <p><span>&copy;</span>2020</p>
        </div>
      </footer>


    )}

}
    

export default Footer;