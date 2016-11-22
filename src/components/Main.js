import React from 'react';
import '../App.css';

export default class Main extends React.Component {
  render() { return ( <div><div className="container">{this.props.children}</div></div> ) }
}
