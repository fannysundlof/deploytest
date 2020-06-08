import React, { Component } from "react";
import firebase from "../Firebase/FirebaseConfig";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

class UserLogin extends Component {
  state = {
    loginRegi: true,
    user: "",
    forgotP: true,
  };

  onClickRegister() {
    this.setState({ loginRegi: false });
  }

  onClickLogin() {
    this.setState({ loginRegi: true });
  }

  onSubmitLogin(e) {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.props.userCredential(res.user.email);
        console.log("Välkommen" + res.user.displayName);
      });
  }

  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl:'/userprofile',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      
    ]
  };

  onSubmitRegister(e) {
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const displayName = e.target.elements.username.value;
    e.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        this.props.userCredential(res.user.email);
        this.props.showDisplayName(displayName);
        res.user.sendEmailVerification();
        console.log("Välkommen" + displayName);
      });
  }

  forgotPassword(e) {
    this.setState({ forgotP: false });
  }

  resetPassword(e) {
    var auth = firebase.auth();
    var emailAddress = e.target.elements.resetEmail.value;

    auth.sendPasswordResetEmail(emailAddress).then(function () {
      // Email sent.
      console.log("Email sent");
    });
    e.preventDefault();
  }

  render() {
    return (
      <div className="margin">
        {this.state.loginRegi && (
          <div>
          <h1 className={"margin-bottom"}>Välkommen till Fanny's App</h1>
            <h3 >Logga in</h3>
            <form onSubmit={this.onSubmitLogin.bind(this)} className={"form"}>
              <input
                type="text"
                name="email"
                placeholder="Email"
                className={"input"}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className={"input"}
              />
              <button >Logga in</button>
            </form>
            <div className={"margin-bottom"}>
            </div>
            <button
              onClick={this.onClickRegister.bind(this)}
              className={"contact_btn"}
              >
              Registrera
            </button>
            {this.state.forgotP && (
              <button
                onClick={this.forgotPassword.bind(this)}
                className={"contact_btn"}
              >
                Glömt lösenord?
              </button>
              
            )} 
            
            {!this.state.forgotP && (
              <form onSubmit={this.resetPassword.bind(this)} className={"form"}>
                <input
                  type="email"
                  name="resetEmail"
                  placeholder="Email"
                  className={"input"}
                ></input>
                <button className={"contact_btn"}>Återställ lösenord</button>
              </form>
            )}
          </div>
        )}

        {!this.state.loginRegi && (
          <div>
            <h3>Registera</h3>

            <form
              onSubmit={this.onSubmitRegister.bind(this)}
              className={"form"}
            >
              <input
                type="text"
                name="username"
                placeholder="Username"
                className={"input"}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={"input"}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className={"input"}
              />

              <button>Registrera</button>
            </form>
            <h3>Har du redan ett konto?</h3>
            <button
              onClick={this.onClickLogin.bind(this)}
              className={"contact_btn"}
            >
              Login
            </button>
            <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
          </div>
        )}
      </div>
    );
  }
}

export default UserLogin;
