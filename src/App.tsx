import React, { Component } from 'react';
import './App.css';
import * as data from './data.json';
import {
  BrowserRouter,
  Route
} from 'react-router-dom'
import CoolHeader from './components/header'
import Badges from './components/Badges'


export default class App extends Component <any, any> {
 constructor(props:any) {
   super(props)
   this.state = {
     dataFromJson: data
   }
 }






   render() {
    return (

      <BrowserRouter>
        <div className="MainDiv">
          <div className="MainHeader">
            <Route path="/" component= {() => <CoolHeader/>}/>
          </div>
            <div className="App">
            <Route path="/" render= {() => <Badges data = {this.state.dataFromJson.default}/> }/>
        </div>
        </div>
      </BrowserRouter>
    );
  }
}
