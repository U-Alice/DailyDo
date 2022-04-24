import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Main from "./components/main"; 
import Signup from "./components/signUp";
import React, { Component } from "react";
import SignIn from "./components/signIn";
import Home from "./components/home";
class App extends Component {
  render() {
    return (
      // <div><p>Hello</p></div>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<Signup />} />
          <Route  path="/main" element= {<Main />}/>
        </Routes>
          {/* 
        {/* //   <div className="App">
      //     <Routes>
      //     </Routes>
      //   </div> */}
      </Router>
    );
  }
}

export default App;
