import React, {Component} from 'react';

import GridView from './gridview/Grid';
import ListView from './listview/List';

import './style/Home.css'

export default class Home extends Component{

  constructor(props){
    super(props);
    this.state = {
      value: this.props.value,
      propertyData: [],
      loading: true
    }

    const success = fetch("http://dev1-sample.azurewebsites.net/properties.json")
      .then(res => res.json())
      .then(data => this.setState({propertyData: data, loading: false}));
  }

  componentDidMount() {
    const success = fetch("http://dev1-sample.azurewebsites.net/properties.json")
    .then(res => res.json())
    .then(data => this.setState({propertyData: data}));
  }

  static getDerivedStateFromProps(props, state){
    return {
      value: props
    }
  }

  render() {
    return( this.state.loading ? (
        <p>Loading data...</p>
      ) : (
        <div className="main">{this.state.value.value ? (
          <GridView data={this.state.propertyData}/>
        ):(
          <ListView data={this.state.propertyData}/>
        )}
        </div>
      )
    )
  }
}