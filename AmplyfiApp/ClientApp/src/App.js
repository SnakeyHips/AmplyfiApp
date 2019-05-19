import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Explore } from './components/Explore';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#212121'
    },
    secondary: {
      main: '#FFC107'
    },
    typography: {
      useNextVariants: true,
    }
  }
});

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <MuiThemeProvider theme={theme}>
        <Layout>
          <Route exact path='/' component={Home} />
          <Route path='/explore' component={Explore} />
        </Layout>
      </MuiThemeProvider>
    );
  }
}

