
import React, {Component} from 'react';
//import Main from './Page/Main'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";


import MainPage from "./Pages/Main";

import MainBody from "./Component/MainBody";
import Contact from "./Pages/ContactPage";
import LoginPage from "./Pages/Login";

import ArticlePage from "./Pages/ArticlePage";
import AuthUser from "./Pages/AuthUser";


class App extends Component {
  render() {
    return (

        <Router>
          {/*All our Routes goes here!*/}
          <Route path="/" component={MainPage} />
          <Redirect exact from="/" to="/MainBody" />

            <Route exact path ="/MainBody" component={MainBody}/>
            <Route exact path ="/Contact" component={Contact}/>
            <Route exact path ="/LoginPage" component={LoginPage}/>
            <Route exact path ="/ArticlePage" component={ArticlePage}/>
            <Route exact path ="/AuthPage" component={AuthUser}/>
        </Router>

    );
  }
}

export default App;
/*

<Route exact path="/users" component={UsersPage} />
<Route exact path="/users2" component={UsersPage2} />
<Route exact path="/404" component={NotFoundPage} />
<Redirect to="/404" />*/
