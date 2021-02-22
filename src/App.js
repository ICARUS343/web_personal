
import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";




import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import NavigationBar from "./Component/NavigationBar";
import TimeLine from "./Pages/TimeLine";
import Gallery from "./Pages/Gallery";
export default class App extends Component {
  render() {
    return (


        <Router>


          <NavigationBar />
            <Route exact path ="/MainBody" component={Home}/>
            <Route path ="/MainBody" component={Home}/>
            <Route path ="/TimeLine" component={TimeLine}/>
            <Route path ="/Contact" component={Contact}/>
            <Route path = "/Gallery" component={Gallery}  />


        </Router>

    );
  }
}