import React, { Component, useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from "./Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AboutUs from "./AboutUs";
import Workshops from "./Workshops";
import ContactUs from "./ContactUs";
import Grid from "@material-ui/core/Grid";
import ShopProducts from "./ShopProducts";
import { ProductsContextProvider } from "./ProductsContext";
import {Signup} from "./Signup";
import {Login} from "./Login";
import { browserHistory, Redirect } from 'react-router'
import {auth, db} from "./firebase";
import { CartContextProvider } from "./CartContext";
import {Cart} from "./Cart";
import { Cashout } from "./Cashout";
import { WorkshopsContextProvider } from "./WorkshopsContext";
import RecommendedSupplies from "./RecommendedSupplies";
import BlendingBrushPens from "./BlendingBrushPens";
import WatercolorPaper from "./WatercolorPaper";
import Registration from "./Registration";
import Feedback from "./Feedback";
import { FeedbacksContextProvider } from "./FeedbacksContext";


export class App extends Component{

  state={
    user:null
  }

  componentDidMount(){
    auth.onAuthStateChanged(user=> {
      if(user){
        db.collection("Users").doc(user.uid).get().then(snapshot=>{
          this.setState({
            user: snapshot.data().Name
          })
        })
      }
      else{
        this.setState({
          user:null
        })
      }
    })
  }

  render(){

  return (
    // BEM
    
    <FeedbacksContextProvider>
    <ProductsContextProvider>
    <WorkshopsContextProvider>
      <CartContextProvider>

      <Router>

    <div className="App">
      {/* <Header /> */}

      <Switch>

      <Route path="/workshops">
        <Header user={this.state.user} />
        <Workshops />
      </Route>

      <Route path="/registration">
      <Header user={this.state.user} />
      <Registration />
      </Route>

      <Route path="/recommendedsupplies">
        <Header user={this.state.user} />
        <RecommendedSupplies />
      </Route>

      <Route path="/blendingbrushpens">
        <Header user={this.state.user}/>
        <BlendingBrushPens />
      </Route>

      <Route path="/watercolorpaper">
        <Header user={this.state.user}/>
        <WatercolorPaper />
      </Route>

      <Route path="/feedback">
      <Header user={this.state.user} />
      <Feedback />
      </Route>

      <Route path="/signup">
        <Signup />
        </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/aboutus">
        <Header user={this.state.user} />
        <AboutUs />
      </Route>
        
      <Route path="/shopproducts">
        <Header user={this.state.user}/>
        <ShopProducts />
        </Route>

        <Route path="/cartproducts" > 
         {/* <Header /> */}
         <Header user={this.state.user} /> 
        <Cart />
        </Route>

        <Route path="/cashout" component={() => <Cashout user={this.state.user} /> } >
        <Header user={this.state.user} /> 
        <Cashout />
        </Route>

        <Route path="/contactus">
        <Header user={this.state.user} />
        <ContactUs />
        </Route>

        <Route exact path="/" component={() => <Header user={this.state.user} /> }>
        <Header user={this.state.user} /> 
        <Home /> 
        </Route> 
      
      </Switch>

    </div>
    
    </Router>

    </CartContextProvider>
    </WorkshopsContextProvider>
    </ProductsContextProvider>
    </FeedbacksContextProvider>
    
  );
}
}

export default App;
