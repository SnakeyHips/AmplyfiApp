import React, { Component } from 'react';
import Progress from './Progress';
import Main from './Main';

export class Home extends Component {

  constructor (props) {
    super(props);
    this.state = { 
      sampleData: [],
      loading: true
     };

    fetch('api/SampleData/GetSampleDataIds')
      .then(response => response.json())
      .then(data => {
        this.setState({ sampleData: data, loading: false });
    });
  }

  render () {
    let contents = this.state.loading
      ? <Progress />
      : <Main sampleData={this.state.sampleData} />
    ;

    return (
      <div>
        {contents}
      </div>
    );
  }
}
