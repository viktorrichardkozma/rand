import React, { Component } from 'react'
import mainLogo from './common/menulogo.svg'
import hamburgerIcon from './common/icon_menu_hamburger.svg'
import {formattedMessage, FormattedMessage} from 'react-intl'
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setLocale,getMe } from '../actions/actions';

import './common/main.css';

class AppBar extends Component {
  constructor(props){
    super(props);
    this.state={
        profileId:null,
    };
  }


  componentDidMount(){
    this.props.getMe()
  }


  changeLanguage = (event) => {
    const target = event.target;
    const value = target.value;
    this.props.setLocale(value)
  };


  componentDidUpdate(prevProps) {
    if (prevProps.profile !== this.props.profile) {
      // reset the search field
      this.setState({
        profileId : this.props.profile.id
      })
    }
  }

  shouldComponentUpdate(nextProps,nextState) {
    if(nextProps.locale!==this.props.locale || nextProps.profile!==this.props.profile)
      return true
  }

  render() {
    const {profileId} = this.state;
    const {admin} = this.props

    console.log(admin)
    return (
      <div>
            <nav className="mobile-nav">
              <div className="dropdown_button">
                <img className="menu_button" src={hamburgerIcon}/>
              </div>
              <div className="drop-down-menu" id="drop-down">
                <ul>
                <li className="menu_element">
                    <a href="/#aboutus">       <FormattedMessage id="aboutmenu"  defaultMessage="RÓLUNK" >
                    </FormattedMessage></a>
                  </li>
                  <li className="menu_element">
                    <a href="/#details">       <FormattedMessage id="detailmenu"  defaultMessage="RÉSZLETEK" >
                    </FormattedMessage> </a>
                  </li>
                  <li className="menu_element">
                    <a href="/events">        <FormattedMessage id="eventmenu"  defaultMessage="GALÉRIA" >
                    </FormattedMessage> </a>
                  </li>
                  <li className="menu_element" style={{borderBottom: '1px solid'}}>
                    <a href="/#contact">        <FormattedMessage id="contactmenu"  defaultMessage="KAPCSOLAT" >
                    </FormattedMessage> </a>
                  </li>
                  <li style={{
                    display: 'inline-flex',
                    justifyContent: 'center',
                    margin: '15px 0px 15px 0px'
                    }}>
                    <div >
                      <a style={(this.props.locale.lang=='en') ? { backgroundColor:'rgba(255,255,255,.2)'}: {borderWidth:'1px'} } className="button" onClick={()=>this.props.setLocale('en')}> EN </a>
                    </div> 
                    <div style={{padding:'0px 0px 0px 10px'}} >
                      <a style={(this.props.locale.lang=='hu') ? { backgroundColor:'rgba(255,255,255,.2)'}: { borderWidth:'1px'}} className="button" onClick={()=>this.props.setLocale('hu')}> HU </a>
                    </div> 
                   
                  </li>
                  <li> 
                    dssd
                  </li> 

                  { admin ? 
                    ( !profileId  ? 
                          <li>
                            <a href="http://localhost:5000/auth/login">
                              <Button variant="contained" color="primary">
                                {(this.props.locale.lang=="hu") ? "Bejelentkezés Facebookkal" : "Login with Facebook"}

                              </Button>
                            </a> 
                          </li>
                        :                       
                          <li>
                            <a href="http://localhost:5000/auth/logout">
                              <Button variant="contained" color="primary">
                              {(this.props.locale.lang=="hu") ? "Kijelentkezés" : "Logout"}
                              </Button>
                            </a>
                          </li>
                      )
                       
                    : null }
                    
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
                  { admin ? 
                    ( !profileId  ? 
                          <li>
                            <a href="http://localhost:5000/auth/login">
                                Login with Facebook
                            </a> 
                          </li>
                        :                       
                          <li>
                            <a href="http://localhost:5000/auth/logout">
                                Logout
                            </a>
                          </li>
                      )
                       
                    : null }
                  </ul>
              </menu>
            </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  locale: state.locale,
  profile: state.auth

})

export default (connect(
  mapStateToProps,
  {setLocale,getMe}
)(AppBar)
);
