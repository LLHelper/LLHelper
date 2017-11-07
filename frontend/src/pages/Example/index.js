import React, { Component } from 'react';
import { withRouter } from 'react-router';

@withRouter
export default class Example extends Component {
  render() {
    return (
      <div>
        example
        {JSON.stringify(this.props.location)}
      </div>
    )
  }
}
