
import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";




import MainBody from "./Pages/MainBody";
import Contact from "./Pages/ContactPage";
import NavigationBar from "./Component/NavigationBar";
import TimeLine from "./Pages/TimeLine";
import Gallery from "./Pages/Gallery";
export default class App extends Component {
  render() {
    return (


        <Router>


          <NavigationBar />
            <Route exact path ="/" component={MainBody}/>
            <Route path ="/MainBody" component={ MainBody}/>
            <Route path ="/TimeLine" component={TimeLine}/>
            <Route path ="/Contact" component={Contact}/>
            <Route path = "/Gallery" component={ Gallery}  />


        </Router>

    );
  }
}