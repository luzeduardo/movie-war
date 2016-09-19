import React from 'react';


class Main extends React.Component {
  render(){
    return <InnerComponent update={this.update} />
  }
}
let Mixin = InnerComponent => class extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0
    }
    this.update = this.update.bind(this)
  }
  update(){
    this.setState({val: this.state.val + 1})
  }
  componentWillMount(){
    console.log("before render");
  }
  componentDidMount(){
    console.log("after rendering");
  }
  componentWillUnmount(){
    console.log("bye");
  }
}

class Button  extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.update}>{this.state.val}</button>
        <Button/>
      </div>
    )
  }
}

export default Main;
