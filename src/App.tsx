import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App
