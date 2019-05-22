import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

const styles = {
  title: {
    color: '#FFC107',
  },
  avatar: {
    color: '#FFC107',
  },
};

class CompaniesDialog extends Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };
    
  render () {
    const { classes, onClose, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">
          <span className={classes.title}>
            Companies
          </span>
        </DialogTitle>
        <div>
          <List>
            {this.props.companies.map((company, i) => (
              <ListItem key={ `company-${ i }` }>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    {company.charAt(0)}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={company} />
              </ListItem>
            ))}
          </List>
        </div>
        <DialogActions>
          <Button onClick={this.handleClose} color="secondary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

CompaniesDialog.propTypes = {
  onClose: PropTypes.func
};

export default withStyles(styles)(CompaniesDialog);