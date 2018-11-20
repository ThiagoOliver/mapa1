import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Images from './components/Images';
import List from './components/List';
import Map from './components/Map';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import firebase from 'firebase';

// Initialize Firebase
/*var config = {
    apiKey: "AIzaSyAg7DexkaC0Fn_xWtK-nhvdk1U5IH3g9YY", AIzaSyDWc-bIxXW2k_6OEWmHw3Ybf4hHkNqCiBQ
    authDomain: "pweb-map.firebaseapp.com",
    databaseURL: "https://pweb-map.firebaseio.com",
    projectId: "pweb-map",
    storageBucket: "pweb-map.appspot.com",
    messagingSenderId: "440694380279"
};
firebase.initializeApp(config);*/

// Initialize Firebase
      var config = {
        apiKey: "AIzaSyATpnEXevqylU22Hl_e6GnH0_ahhV5ETsI",
        authDomain: "mapa-219112.firebaseapp.com",
        databaseURL: "https://mapa-219112.firebaseio.com",
        projectId: "mapa-219112",
        storageBucket: "mapa-219112.appspot.com",
        messagingSenderId: "237874026717"
      };
      firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/images" component={Images} />
          <Route path="/list" component={Map} />
          <Route path="/map" component={Map} />
        </div>
      </Router>
    );
  }
}

export default App;
