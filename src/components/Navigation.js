import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "./Includes/Header";
import App from "./Pages/App";
import Products from './Pages/Products';
import Booking from "./Pages/Booking";
import NotFound from "./Pages/NotFound";
import Footer from './Includes/Footer';


const Navigation = ()=> {

    return (

        <div>
            <BrowserRouter>
             <Header />
                    <Switch>
                    <Route path="/" component={App} exact   ></Route>
                    <Route path="/products" component={Products}></Route>
                    <Route  render={(props)=>{
                        return   <Booking />}} >
                    </Route>
                    <Route component= {NotFound} exact></Route>

                    </Switch>

                    <Footer />
            </BrowserRouter>
        
        </div>


    )


}

export default Navigation;