import React, { Component } from 'react';
import './App.css';


class Welcome extends React.Component {
  render() {
    console.log(this.props)
    return(
      <div>
    <h1>Hello, {this.props.name}</h1>
    <h1>Hello, {this.props.title}</h1>
    <h1>Hello, {this.props.value}</h1>
    </div>);
  }
}
class App extends Component{
  render() {
    return(<div><Welcome name="Duy" title="React" value="Javascript"/></div>);
  }
}
export default App;
