import React, { Component } from 'react';
import {Provider} from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import {IntlProvider} from 'react-intl';
import { connect } from 'react-redux';
import messages from './messages'
import AppIntl from './AppIntl'

import {init as firebaseInit} from './Firebase'

import {
  createBrowserHistory,
} from 'history'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css';
import store from './store'; 

//Components
import Static from './components/Static'
import Events from './components/Events'
import Videos from './components/Videos'
import VideoView from './components/VideoView'

import NotFound from './components/NotFound'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFileDownload,faCopy} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebook)
library.add(faInstagram)
library.add(faFileDownload)
library.add(faCopy)

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000001',
      light: '#a3e1c6',
      dark: '#000001'
    },
    secondary: {
      main: '#a3e1c6',
      light: '#a3e1c6',
      contrastText: '#FFCC00'
    },
  },
  typography: {
    useNextVarients: true
  },
  shadows:["none"],
  typography: {
    "fontFamily": "\"Montserrat\", sans-serif",
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
   }
})

let history = createBrowserHistory()

class App extends Component {
  constructor(props) {
    super(props)
    firebaseInit()
  }
  render() {

    return (

        <MuiThemeProvider theme={theme}>
          <Provider store={store}>
            <div className="App">
              <AppIntl/>
            </div>
          </Provider>
        </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  lang: state.locale.lang
});


  export default(App);




