import React from 'react';
import { Router } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Routes from './Routes/index';
import history from './Services/history';
import light from './themes/light';

function App() {
  return (
    <MuiThemeProvider theme={light}>
      <Router history={history}>
        <Routes />
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
