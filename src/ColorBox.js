import React, { Component } from 'react';

export default class ColorBox extends Component {
  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {/* If under or equal to 0.2 opacity make another inner box and reduce opacity */}
        {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1} /> : null}
      </div>
    )
  }
}
