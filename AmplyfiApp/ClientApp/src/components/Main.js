import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Progress from './Progress';
import Info from './Info';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    border: '1px #',
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
          selectedIndex: 0,
          selectedItem: [],
          loading: true
         };
    }

    componentDidMount(){
        if(!this.props.loading) this.fetchItem();
    }

    handleListItemClick = (event, index) => {
        this.setState({ selectedIndex: index, loading: true }, () => {
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

    return (
        <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
            <Grid container justify="center">
            <Typography variant="h6" color="secondary" noWrap>
                AmplyfiApp
            </Typography>
            </Grid>
            </Toolbar>
        </AppBar>
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
            paper: classes.drawerPaper,
            }}
        >
            <div className={classes.toolbar} />
            <List className ={classes.list}>
                {this.props.sampleData.map((item, i) =>
                    <ListItem key={i} button selected={this.state.selectedIndex === i} onClick={event => this.handleListItemClick(event, i)}>
                    <ListItemText>{item}</ListItemText>
                    </ListItem>
                )}
            </List>
        </Drawer>
        <main className={classes.content}>
            <div className={classes.toolbar} />
            {contents}
        </main>
        </div>
    );
}
}

Main.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Main);