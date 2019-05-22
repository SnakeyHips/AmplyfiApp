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
      .then(response => {
        if(response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok: ' + response.status)
        }
      })
      .then(data => {
        this.setState({ sampleData: data, loading: false });
      }).catch(error => {
        console.log(error.message);
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
