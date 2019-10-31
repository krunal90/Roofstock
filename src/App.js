import React, { Component } from 'react';
import DetailView from './DetailView/Detail';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListAlt, faTh } from '@fortawesome/free-solid-svg-icons'

import './style/App.css';
import Home from './Home';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {value: true}
  }

  changeToGridView() {
    this.setState({value: true});
  }

  changeToListView() {
    this.setState({value: false});
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <h2>Welcome to RoofStock</h2>
            <div className="change_view">
              <FontAwesomeIcon className="font_icon" 
                               icon={faTh}
                               size="2x"
                               onClick={() => {this.changeToGridView()}}/>
              <FontAwesomeIcon className="font_icon"
                               icon={faListAlt}
                               size="2x" 
                               onClick={() => {this.changeToListView()}}/>
            </div>
          </div>
          <Route path="/" exact render={() => <Home value={this.state.value}/>}/>
          <Route path="/details/:id" component={DetailView}/>
        </div>
      </Router>
    );
  }
}

export default App;
