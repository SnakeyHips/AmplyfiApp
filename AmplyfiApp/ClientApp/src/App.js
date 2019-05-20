import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route } from 'react-router';
import { Home } from './components/Home';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#212121'
    },
    secondary: {
      main: '#FFC107'
    },
    background: {
      default: "#303030"
    },
    type: "dark",
    typography: {
      useNextVariants: true,
    },
  }
});

export default class App extends Component {
  render () {
    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
              <Route path='/' component={ Home } />
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

