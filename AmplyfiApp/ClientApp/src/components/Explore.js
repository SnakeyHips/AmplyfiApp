import React, { Component } from 'react';
import classNames from 'classnames';
import Progress from './Progress';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export class Explore extends Component {
  static displayName = Explore.name;

  constructor (props) {
    super(props);
    this.state = { 
      sampleData: [], 
      selectedIndex: 0, 
      loading: true
     };

      fetch('api/SampleData/GetSampleDataTitles')
      .then(response => response.json())
      .then(data => {
        this.setState({ sampleData: data, loading: false });
      });
  }

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

  static renderSampleDataTable (sampleData) {
    const { classes } = this.props;

    return (
      <Drawer
        variant="permanent" className={classes.drawerPaper}>
        <List component="nav">
          {sampleData.map((sampleItem, i) =>
            <ListItem key={i} button selected={this.state.selectedIndex === i} onClick={event => this.handleListItemClick(event, i)}>
              <ListItemText>{sampleItem}</ListItemText>
            </ListItem>
          )}
        </List>
      </Drawer>
    );
  }

  render () {
    let contents = this.state.loading
      ? <Progress />
      : Explore.renderSampleDataTable(this.state.sampleData);

    return (
      <div>
        {contents}

      </div>
    );
  }
}
