import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import MapChart from './MapChart';

const styles = theme => ({
    text: {
      paddingBottom: theme.spacing.unit
    },
  });

class Info extends Component {
  render () {
    //const { classes}  = this.props;

    return (
        <Fade in={true}>
            <Grid container spacing={24}>
                <Grid item sm={6}>
                    <Typography variant="h4" color="secondary">
                        Title
                    </Typography>
                </Grid>
                <Grid item sm={6}>
                    <Typography variant="h4" color="secondary">
                        Year
                    </Typography>
                </Grid>
                <Grid item sm={6}>
                    <Typography variant="body1">
                        {this.props.selectedItem.title}
                    </Typography>
                </Grid>
                <Grid item sm={6}>
                    <Typography variant="body1">
                        {this.props.selectedItem.year}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4" color="secondary">
                        Summary
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1">
                        {this.props.selectedItem.summary}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4" color="secondary">
                        Body
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1">
                        {this.props.selectedItem.body}
                    </Typography>
                </Grid>
                    <Grid item xs={12}>
                <MapChart places={this.props.selectedItem.places}/>
                </Grid>
            </Grid>
        </Fade>
    );
  }
}

Info.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Info);