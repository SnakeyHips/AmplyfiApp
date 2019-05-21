import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const DialogTitle = withStyles(theme => ({
    root: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      margin: 0,
      padding: theme.spacing.unit * 2,
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing.unit,
      top: theme.spacing.unit,
      color: theme.palette.grey[500],
    },
  }))(props => {
    const { children, classes, onClose } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

class BodyDialog extends Component {
    constructor(props) {
        super(props)
        this.state = {
          open: false,
        }
      }

    handleClose = () => {
    this.setState({ open: false });
    };
    
  render () {

    return (
        <Dialog
        onClose={this.handleClose}
        aria-labelledby="customized-dialog-title"
        open={this.state.open}
      >
        <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
          Modal title
        </DialogTitle>
        <DialogContent>
          <Typography gutterBottom>
            {this.props.itemBody}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

BodyDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BodyDialog);