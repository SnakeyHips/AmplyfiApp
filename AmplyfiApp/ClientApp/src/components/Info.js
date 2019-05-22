import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import BodyDialog from './BodyDialog';
import CompaniesDialog from './CompaniesDialog';
import MapChart from './MapChart';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    title: {
        order: 1,
    },
    titletext: {
        order: 4,
        [theme.breakpoints.only('xs')]: {
            order: 2
        }
    },
    year: {
        order: 2,
        [theme.breakpoints.only('xs')]: {
            order: 3
        }
    },
    yeartext: {
        order: 5,
        [theme.breakpoints.only('xs')]: {
            order: 4
        }
    },
    from: {
        order: 3,
        [theme.breakpoints.only('xs')]: {
            order: 5
        }
    },
    fromtext: {
        order: 6
    }
  });

class Info extends Component {
    constructor(props) {
        super(props)
        this.state = {
          openBody: false,
          openCompanies: false
        }
    }

    handleClickOpenBody = () => {
        this.setState({openBody: true});
      };
    
    handleCloseBody = () => {
        this.setState({ openBody: false });
    };

    handleClickOpenCompanies = () => {
        this.setState({openCompanies: true});
      };
    
    handleCloseCompanies = () => {
        this.setState({ openCompanies: false });
    };

    render () {
        const { classes}  = this.props;

        return (
            <Fade in={true}>
                <div>
                    <Grid container spacing={24} >
                        <Grid item sm={4} xs={12} className={classes.title}>
                            <Typography variant="h4" color="secondary">
                                Title
                            </Typography>
                        </Grid>
                        <Grid item sm={4} xs={12} className={classes.year}>
                            <Typography variant="h4" color="secondary">
                                Year
                            </Typography>
                        </Grid>
                        <Grid item sm={4} xs={12} className={classes.from}>
                            <Typography variant="h4" color="secondary">
                                From
                            </Typography>
                        </Grid>
                        <Grid item sm={4} xs={12} className={classes.titletext}>
                            <Typography variant="body1">
                                {this.props.selectedItem.title}
                            </Typography>
                        </Grid>
                        <Grid item sm={4} xs={12} className={classes.yeartext}>
                            <Typography variant="body1">
                                {this.props.selectedItem.year}
                            </Typography>
                        </Grid>
                        <Grid item sm={4} xs={12} className={classes.fromtext}>
                            <Typography variant="body1">
                                {this.props.selectedItem.geo1}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={24}>
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
                                Content
                            </Typography>
                        </Grid>
                        <Grid container direction="row" justify="space-evenly">
                            <Button variant="outlined" color="secondary" className={classes.button} onClick={this.handleClickOpenBody}>
                                Body 
                            </Button>
                            <BodyDialog open={this.state.openBody} onClose={this.handleCloseBody} itembody={this.props.selectedItem.body} />
                            <Button variant="outlined" color="secondary" className={classes.button} onClick={this.handleClickOpenCompanies}>
                                Companies 
                            </Button>
                            <CompaniesDialog open={this.state.openCompanies} onClose={this.handleCloseCompanies} companies={this.props.selectedItem.companies} />
                            <Button variant="outlined" color="secondary" className={classes.button} onClick={()=> window.open(this.props.selectedItem.srcUrl)}>
                                Source 
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h4" color="secondary">
                                Places
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <MapChart countries={this.props.selectedItem.countries}/>
                        </Grid>
                    </Grid>
                </div>
            </Fade>
        );
    }
}

Info.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Info);