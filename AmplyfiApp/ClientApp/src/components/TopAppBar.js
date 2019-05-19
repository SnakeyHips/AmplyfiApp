import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function TopAppBar(props) {
  const { classes } = props;

  return (
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Grid container justify="center">
              <Button color="secondary" component={Link} to="/">Home</Button>
              <Button color="secondary" component={Link} to="/explore">Explore</Button>
          </Grid>
        </Toolbar>
      </AppBar>
  );
}

TopAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopAppBar);