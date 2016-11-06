import React from 'react';
import 'bulma/css/bulma.css'
import '../App.css';

export default class Main extends React.Component {
  render() { return ( <div>{this.props.children}</div> ) }
}
