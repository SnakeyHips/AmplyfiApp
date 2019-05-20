import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

class Progress extends Component {
  render () {
    return (
      <Grid container justify="center" alignContent="center">
        <CircularProgress color="secondary" />
      </Grid>
    );
  }
}
export default Progress;