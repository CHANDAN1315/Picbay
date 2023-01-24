import React, { Component } from "react";

class Images extends Component {
  render() {
    return <img src={this.props.src} alt= "imge"/>;
  }
}

export default Images;
