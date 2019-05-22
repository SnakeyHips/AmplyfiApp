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
import SvgIcon from '@material-ui/core/SvgIcon';
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
    marginLeft: -12
  },
  githubButton: {
    marginRight: -12
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
      .then(response => {
        if(response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok: ' + response.status)
        }
      })
      .then(data => {
        this.setState({ selectedItem: data, loading: false });
      }).catch(error => {
        console.log(error.message);
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
      ? <Drawer className={classes.drawer} variant="permanent" classes={{ paper: classes.drawerPaper, }}>
        <div className={classes.toolbar} />
        {nav}
      </Drawer>
      : <SwipeableDrawer anchor="left" open={this.state.open} 
          onClose={this.toggleDrawer(false)} onOpen={this.toggleDrawer(true)} >
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
              <IconButton color="secondary" aria-label="Open drawer" onClick={this.toggleDrawer(true)}
                className={classNames(classes.menuButton, this.state.open && classes.hide)}>
                <MenuIcon />
              </IconButton>
          </Hidden>
          <Grid container justify="center">
          <Typography variant="h6" color="secondary" noWrap>
            AmplyfiApp
          </Typography>
          </Grid>
          <IconButton color="secondary" aria-label="GitHub" className={classes.githubButton}
            onClick={() => {window.open('https://github.com/SnakeyHips/AmplyfiApp')}}>
              <SvgIcon>
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </SvgIcon>
          </IconButton>
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