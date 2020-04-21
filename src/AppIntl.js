import React, { Component } from 'react'

import {Provider} from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import {IntlProvider} from 'react-intl';
import { connect } from 'react-redux';
import messages from './messages'

import {
  createBrowserHistory,
} from 'history'


import { Router, Route, Switch} from 'react-router-dom'
import './App.css';

//Components
import Static from './components/Static'
import Events from './components/Events'
import Videos from './components/Videos'
import VideoView from './components/VideoView'
import Admin from './components/Admin'

import store from './store'
import NotFound from './components/NotFound'

import {addLocaleData} from 'react-intl'
import en from 'react-intl/locale-data/en'
import hu from 'react-intl/locale-data/hu'
import {localeSet} from './actions/actions'

import './index.css';

addLocaleData(en)
addLocaleData(hu)

store.dispatch(localeSet('hu'))

let history = createBrowserHistory()

if(localStorage.alhubLang) 
{ 
  store.dispatch(localeSet(localStorage.alhubLang))
}

class AppIntl extends Component {
  render() {
    const {lang} = this.props;

    return (
      <div>
        <IntlProvider locale={lang} messages={messages[lang]}>

        <Router history={history}>     

              <Switch>
                <Route exact path="/" component={Static} />
                <Route exact path="/events/" component={Events} />
                <Route exact path="/events/videos" component={Videos} />
                <Route exact path="/:eventid/:timestamp" component={VideoView} />
                <Route component={Admin} />
                <Route component={NotFound} />
              </Switch>
            </Router>
        </IntlProvider>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  lang: state.locale.lang
});

export default connect(mapStateToProps,{})(AppIntl);

