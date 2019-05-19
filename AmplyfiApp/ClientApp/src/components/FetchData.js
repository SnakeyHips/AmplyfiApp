import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor (props) {
    super(props);
    this.state = { sampleData: [], loading: true };

      fetch('api/SampleData/GetSampleDataTitles')
      .then(response => response.json())
      .then(data => {
        this.setState({ sampleData: data, loading: false });
      });
  }

  static renderSampleDataTable (sampleData) {
    return (
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map(sampleItem =>
            <tr key={sampleItem}>
              <td>{sampleItem}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render () {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderSampleDataTable(this.state.sampleData);

    return (
      <div>
        <h1>Sample Data</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }
}
