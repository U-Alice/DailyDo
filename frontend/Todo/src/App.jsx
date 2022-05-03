import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Main from "./components/dashboard";
import Signup from "./components/signUp";
import React, { Component } from "react";
import SignIn from "./components/signIn";
import Home from "./components/home";
class App extends Component {
  render(){
  return (
    // < Home />
    // <div><p>Hello world</p></div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
}
  

export default App;
