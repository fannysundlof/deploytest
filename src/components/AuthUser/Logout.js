
import React, {Component} from "react";
import firebase from "../Firebase/FirebaseConfig";


class Logout extends Component{

    state = {
        user: null
     }

     componentDidMount(){
        firebase.auth()
        .onAuthStateChanged(

            user=>{ if(user) { this.setState({

            user: user.email, 
            displayName: user.displayName
            
            })} else {

            this.setState({user: localStorage.getItem("user")})
            } 

            }
            
        )
    }
    
    logOut(){
        localStorage.clear();
        window.location.reload(false);
        firebase.auth().signOut();
        }
    
        login() {

            window.document.location = "https://fannysapp.netlify.app";
        }


    render(){

        const loggedIn = this.state.user || localStorage.getItem("user");

        return(
            <li>
            {loggedIn ? (
             
            <button className={"logout-btn"} onClick={this.logOut.bind(this)} >Logga ut</button>
            
            )
            :
            (<button className={"logout-btn"} onClick={this.login.bind(this)}>Logga in</button>)
            }

            </li> 
        )
    }
}


export default Logout;