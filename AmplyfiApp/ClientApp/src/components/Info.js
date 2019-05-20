import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Info extends Component {
  render () {
    return (
        <Typography paragraph>
            {this.props.selectedItem.summary}
        </Typography>
    );
  }
}
export default Info;