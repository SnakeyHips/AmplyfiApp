import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    grid: {
      color: 'red'
    },
  });

class Info extends Component {
  render () {

    return (
        <Grid container justify="center" alignContent="center">
            <Typography paragraph>
                {this.props.selectedItem.summary}
            </Typography>
        </Grid>
    );
  }
}

Info.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Info);