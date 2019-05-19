import React, { Component } from 'react';
import { Container } from 'reactstrap';
import TopAppBar from './TopAppBar';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <TopAppBar />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
