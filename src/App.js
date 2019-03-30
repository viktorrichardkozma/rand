import React, { Component } from 'react';
import {Provider} from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'



import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css';
import store from './store'; 

//Components
import Static from './components/Static'
import Events from './components/Events'
import Admin from './components/Admin'
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

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
        <div className="App">
          <Router>        
            <Switch>
              <Route exact path="/" component={Static} />
              <Route exact path="/events/" component={Events} />
              <Route path="/admin" component={Admin} />
              <Route exact path="/events/videos" component={Videos} />
              <Route exact path="/:eventid/:timestamp" component={VideoView} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </div>
        </Provider>
      </MuiThemeProvider>

    );
  }
}

export default App;


