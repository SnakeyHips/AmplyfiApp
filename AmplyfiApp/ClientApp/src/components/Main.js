import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Fade from '@material-ui/core/Fade';
import Progress from './Progress';
import Info from './Info';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: 'unset'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#212121"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: -36,
  },
  hide: {
    display: 'none',
  },
  list: {
      padding: 0
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
});

class Main extends Component {
    constructor (props) {
        super(props);
        this.state = {
          open: false,
          selectedIndex: 0,
          selectedItem: [],
          loading: true
         };
    }

    componentDidMount(){
        if(!this.props.loading) this.fetchItem();
    }

    toggleDrawer = (open) => () => {
        this.setState({
          open: open,
        });
      };

    handleListItemClick = (event, index) => {
        this.setState({ open: false, selectedIndex: index, loading: true }, () => {
            this.fetchItem()
        })
    };

    fetchItem() {
        fetch('api/SampleData/GetSampleDataItem?id=' + this.props.sampleData[this.state.selectedIndex])
        .then(response => response.json())
        .then(data => {
            this.setState({ selectedItem: data, loading: false });
        }); 
    }  

    render () {
    const { classes } = this.props;

    let contents = this.state.loading
      ? <Progress />
      : <Info selectedItem={this.state.selectedItem}/>
    ;

    let nav = <List className ={classes.list}>
        {this.props.sampleData.map((item, i) =>
            <ListItem key={i} button selected={this.state.selectedIndex === i} onClick={event => this.handleListItemClick(event, i)}>
            <ListItemText>{item}</ListItemText>
            </ListItem>
        )}
    </List>;

    let drawer = isWidthUp('md', this.props.width)
        ? <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
            paper: classes.drawerPaper,
            }}
        >
            <div className={classes.toolbar} />
            {nav}
        </Drawer>
        : <SwipeableDrawer
            anchor="left"
            open={this.state.open}
            onClose={this.toggleDrawer(false)}
            onOpen={this.toggleDrawer(true)}
        >
            {nav}
        </SwipeableDrawer>
    ;

    return (
        <Fade in={true}>
            <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                <Hidden mdUp>
                    <IconButton
                        color="secondary" 
                        aria-label="Open drawer"
                        onClick={this.toggleDrawer(true)}
                        className={classNames(classes.menuButton, this.state.open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Hidden>
                <Grid container justify="center">
                <Typography variant="h6" color="secondary" noWrap>
                    AmplyfiApp
                </Typography>
                </Grid>
                </Toolbar>
            </AppBar>
            {drawer}
            <main className={classes.content}>
                <div className={classes.toolbar} />
                    {contents}
            </main>
            </div>
        </Fade>
    );
}
}

Main.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default compose(
    withStyles(styles),
    withWidth(),
)(Main);