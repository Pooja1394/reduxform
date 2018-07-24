import React, { Component } from "react";
import "./App.css";
import SimpleForm from "./SimpleForm";
import { Provider } from "react-redux";
import { Values } from "redux-form-website-template";
import showResults from "./showResults";
import styled from 'styled-components';
import store from "./store";

const Div = styled.div`
  width:400px;
  margin:auto;
  text-align:center;
  background: teal;
  color: #fff;
  padding-top:10px;
`



class App extends Component {
  showResults = () => {
    console.log("hello");
  };
  render() {
    return (
      <Provider store={store}>
        <Div>
          <h2>Redux Form</h2>
          <SimpleForm onSubmit={this.showResults} />
          <Values form="simple" />
        </Div>
      </Provider>
    );
  }
}

export default App;
