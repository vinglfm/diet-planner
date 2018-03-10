import React from 'react';
import ReactDOM from 'react-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {App} from './src/App';
import {DietPlanner} from './src/DietPlanner';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  (<BrowserRouter>
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <DietPlanner/>
    </MuiThemeProvider>
  </BrowserRouter>),
  document.getElementById('diet-app')
);
