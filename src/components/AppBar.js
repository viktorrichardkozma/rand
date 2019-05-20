import React, { Component } from 'react'
import mainLogo from './common/menulogo.svg'
import hamburgerIcon from './common/icon_menu_hamburger.svg'
import {formattedMessage, FormattedMessage} from 'react-intl'

import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setLocale } from '../actions/actions';


class AppBar extends Component {

  changeLanguage= (event) => {
    const target = event.target;
    const value = target.value;
    this.props.setLocale(value)
 
  };

  componentDidMount(){
    

  }

  shouldComponentUpdate(nextProps,nextState) {
    if(nextProps.locale!==this.props.locale)
      return true
  }

  render() {
    return (
      <div>
            <nav className="mobile-nav">
              <div className="dropdown_button">
                <img className="menu_button" src={hamburgerIcon}/>
              </div>
              <div className="drop-down-menu" id="drop-down">
                <ul>
                <li>
                    <a href="/#aboutus">       <FormattedMessage id="aboutmenu"  defaultMessage="RÓLUNK" >
                    </FormattedMessage></a>
                  </li>
                  <li>
                    <a href="/#details">       <FormattedMessage id="detailmenu"  defaultMessage="RÉSZLETEK" >
                    </FormattedMessage> </a>
                  </li>
                  <li>
                    <a href="/events">        <FormattedMessage id="eventmenu"  defaultMessage="GALÉRIA" >
                    </FormattedMessage> </a>
                  </li>
                  <li>
                    <a href="/#contact">        <FormattedMessage id="contactmenu"  defaultMessage="KAPCSOLAT" >
                    </FormattedMessage> </a>
                  </li>
                  <ul>
                  </ul></ul>
              </div>
                    <img style={{height: '15px', position: 'relative', top: '-2px', left: '17px'}} className="menu-logo" src={mainLogo}/>
            </nav>
            <div className="header-background-video">
              <video loop="loop" muted="true" autoPlay="autoplay" playsInline="playsinline">
              </video>
            </div>
            <div className="menu-logo-wrapper">
              <a href="https://360selfie.hu">
                <img className="menu-logo" src={mainLogo}/>
              </a>

              <menu> 
                <ul>
                  <li>
                    <a href="/#aboutus">       <FormattedMessage id="aboutmenu"  defaultMessage="RÓLUNK" >
                    </FormattedMessage></a>
                  </li>
                  <li>
                    <a href="/#details">       <FormattedMessage id="detailmenu"  defaultMessage="RÉSZLETEK" >
                    </FormattedMessage> </a>
                  </li>
                  <li>
                    <a href="/events">        <FormattedMessage id="eventmenu"  defaultMessage="GALÉRIA" >
                    </FormattedMessage> </a>
                  </li>
                  <li>
                    <a href="/#contact">        <FormattedMessage id="contactmenu"  defaultMessage="KAPCSOLAT" >
                    </FormattedMessage> </a>
                  </li>
                  <li style={{padding:'0px 5px 0px 10px'}}>
                    <a style={(this.props.locale.lang=='en') ? { backgroundColor:'rgba(255,255,255,.2)'}: {borderWidth:'1px'} } className="button" onClick={()=>this.props.setLocale('en')}> EN </a>
                  </li> 
                  <li style={{padding:'0px 5px 0px 10px'}} >
                    <a style={(this.props.locale.lang=='hu') ? { backgroundColor:'rgba(255,255,255,.2)'}: { borderWidth:'1px'}} className="button" onClick={()=>this.props.setLocale('hu')}> HU </a>
                  </li>  
                  </ul>
              </menu>
            </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  locale: state.locale
})

export default (connect(
  mapStateToProps,
  {setLocale}
)(AppBar)
);
