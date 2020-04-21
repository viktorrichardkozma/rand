/*global $*/
/*global WOW*/

import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import AppBar from './AppBar';

import photo_1 from './common/1.jpg';
import photo_2 from './common/2.jpg';
import photo_3 from './common/3.jpg';
import {connect} from 'react-redux'; 
import Alert from './Alert';
import Lollipop from './assets/props.png';
import Background from './assets/props_background.jpg';
import {storeFASZOM} from '../actions/actions'
import {FormattedMessage} from 'react-intl'
import './common/main.css'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

import {getEvents} from '../actions/actions';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from 'axios'

import download from './assets/DOWNLOAD.svg'
import copy from './assets/COPY.svg'
import share from './assets/SHARE.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
    card: {
      margin:'15px',
      color: '#A3E2C6',
      backgroundColor:'white',
      width:'250px'
    },
    media: {
      height: 140,
    }, 
    root: {
      flexGrow: 1,
      height: '100vh',
      backgroundColor:'black'
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
      backgroundColor:'black'
    }
      ,root: {
        flexGrow: 1,
      },
      paper: {
        borderRadius:'0px',
        textAlign: 'center',
        color: 'black'
      },
      progress: {
        margin: theme.spacing.unit * 2,
        color: "#A3E1D4"
      },
      icons:{
        cursor:'pointer',
        padding:'10px',
        height:'60px'
      }
});

 class HomePage extends Component {
   


  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  static getDerivedStateFromProps(nextProps, prevState) {

    if(prevState){
      return nextProps.retkesGECI === prevState.retkesGECI
        ? {}
        : {retkesGECI: nextProps.retkesGECI}
      } else return {}
  }

  componentDidMount() {
    window.onload = () => {
      var extended=true;
      var onclicked;
      var logo;
      var kikurtlolli;


      new WOW().init();
      if(document.getElementById("spinning-logo")){
        logo=document.getElementById("spinning-logo")
      }
      if(document.getElementById("kikurtlolli")){
        kikurtlolli=document.getElementById("kikurtlolli")
      }

      var testDiv = document.getElementById("details");

      $(document).scroll(function() {
        if(logo!==undefined) {
          logo.style.transform="rotate(" + ($(document).scrollTop()/5) + "deg)";
        }

        if(kikurtlolli!==undefined) {
          let offset= ((($(document).scrollTop())+600) - testDiv.offsetTop)/10;
          kikurtlolli.style.transform="translateY(-" + offset + "px)";
        }
      });

      var figure = $(".small_video").hover( hoverVideo, hideVideo );

      function hoverVideo(e) {  
          $('video', this).get(0).play(); 
      }
      
      function hideVideo(e) {
          $('video', this).get(0).pause(); 
      }

    };
  }

  render() {
    const {classes} = this.props

    return (
        <div>
        <MetaTags>
          <meta property="og:title" content={'360selfie.hu'} />
          <meta property="og:image" content={'icons/thumbnail.png'} />
        </MetaTags>

      <div className="page">
            <div className="errorwrapper">
            <div className="allthefields">
              All fields are required.
              
              <div className="error-box-close">
                X
              </div>
            </div>
          </div>
          <header className="background" id="header">
          <AppBar/>
          <div className="header-background-video">
          <video loop="loop" muted="true" autoPlay="autoplay" playsInline="playsinline">
            <source src="https://firebasestorage.googleapis.com/v0/b/selfie-10b2c.appspot.com/o/360SELFIE.mp4?alt=media" type="video/mp4" />
            <source src="https://firebasestorage.googleapis.com/v0/b/selfie-10b2c.appspot.com/o/360SELFIE.webm?alt=media" type="video/webm" />
          </video>
          </div>
          <div className="header-social-media-icons-wrapper">
            <div className="row">
              <div className="column">
                <div className="header-social-media-icons">
                  <a target="_blank" href="https://www.facebook.com/360selfie.hu/">
                    <img src="icons/facebook.svg" />
                  </a>
                </div>
                <div className="header-social-media-icons">
                  <a target="_blank" href="https://www.instagram.com/360selfiehu/">
                    <img src="icons/instagram.svg" />
                  </a>
                </div>
             
              </div>
            </div>
            <div className="header-title-wrapper">
              <h1 className="header-title">
                <img className="header-logo" src="icons/logo_360.svg" />
              </h1>
            </div>
          </div>
        </header>
        <section id="projects" className="projects">
          <div className="projects-wrapper">
            <div className="projects-part">
              <div className="projects-part-left-wrapper">
                <img className="spinning-logo" id="spinning-logo" src="icons/circles.svg" />
              </div>
            </div>
            <div className="projects-part">
              <div className="projects-part-right-wrapper">
                <div className="projects-description">
                {(this.props.locale.lang==="hu") ?  (<img className="right" src="icons/emlekek360fokban.svg" />) : (<img className="right" src="icons/en_360_memories.svg" />)}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about" id="aboutus">
          <div className="part-title">
            <div className="title title-black" >
            <FormattedMessage id="abouttitle"  defaultMessage="Rólunk" > </FormattedMessage>
            </div>
          </div>
          <div className="about-part-content">
            <div className="half-border-width" />
            <div className="text-wrapper">
              <h1 className="step wow fadeIn " data-wow-duration="1s" data-wow-delay=".1s">             <FormattedMessage id="aboutdetailtitle"  defaultMessage="Hogy mi is az a 360 SELFIE?" > </FormattedMessage>
              </h1>
              <div className="text">
                <p className="step wow fadeIn " data-wow-duration="1s" data-wow-delay=".1s">

                <FormattedMessage id="aboutdetailpart1"  defaultMessage="Egy rendezvény nem telhet el a pillanatok megörökítése nélkül.
                  Legyen szó baráti vagy céges összejövetelről, esküvőről vagy születésnapról,
                  a 360 SELFIE teljes panorámájában ragadja meg a pillanatot,
                  mindezt mozgókép formájában!" >
                  </FormattedMessage>
                </p>
                <p className="step wow fadeIn " data-wow-duration="1s" data-wow-delay=".1s">
                <FormattedMessage id="aboutdetailpart2"  defaultMessage="Tapasztald meg a forgó fotószínpadunk általi egyedülálló 360 fokos élményt
                  és tedd felejthetetlenné rendezvényed a szelfik új generációjával!" >
                  </FormattedMessage>
                
                </p>
              </div>
            </div>
            <div className="half-border" />
            <div className="logo-wrapper">
              <div className="logo wow bounceIn" data-wow-delay=".2s">
                <img className="logo-image" src="icons/icon1.svg" />
                <div className="description">
                <FormattedMessage id="360turn"  defaultMessage="360 FOKOS FORDULAT" >
                  </FormattedMessage>
                  
                </div>
              </div>
              <div className="logo wow bounceIn" data-wow-delay=".4s">
                <img className="logo-image" src="icons/icon2.svg" />
                <div className="description">
                <FormattedMessage id="livephotos"  defaultMessage="ÉLŐ FÉNYKÉPEK" >
                  </FormattedMessage>
                </div>
              </div>
              <div className="logo wow bounceIn" data-wow-delay=".6s">
                <img className="logo-image" src="icons/icon3.svg" />
                <div className="description">
                <FormattedMessage id="instantsharing"  defaultMessage="AZONNALI MEGOSZTÁS" >
                  </FormattedMessage>
                 
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="photos">
          <div className="photo-wrapper">
            <img className="photo" src={photo_1}>
                      
            </img>   
          </div>   
          <div className="photo-wrapper">
              <img className="photo" src={photo_2}>
                     
              </img>
          </div>          
          <div className="photo-wrapper">
              <img className="photo" src={photo_3}>
                   
              </img>
          </div>          
        </section>
        <section className="details" id="details" style={{backgroundImage: `url(${Background}`,backgroundPosition:'bottom', position:'relative'}}>
        
          <div  style={{position: 'absolute', bottom:'-150px'}}>
            <img src={Lollipop} id="kikurtlolli" style={{width:'125vh', zIndex:'0'}}>
            </img>
          </div>
          <div className="part-title">
            <div  style={{color:'#65318f'}}  className="title">
                <FormattedMessage id="detailstitle"  defaultMessage="RÉSZLETEK" >
                </FormattedMessage>
              </div>
          </div>
          <div className="part-content" style={{color:'#65318f'}}>
            <div className="how-to">
              <div className="step wow fadeIn " data-wow-duration="1s" data-wow-delay=".1s">
                <div className="number">
                  <img className="logo-image" src="icons/1.svg"   style={{color:'#65318f'}} />
                </div>
                <div className="command">
                  <h2 style={{color:'#65318f'}}  >  <FormattedMessage id="steponthestage"  defaultMessage="LÉPJ A SZÍNPADRA!" >
                    </FormattedMessage>
                  </h2>
                </div>
                <div className="description" style={{color:'#65318f'}} >
                <FormattedMessage id="steponthestagedetail"  defaultMessage="  A színpad lehetővé teszi, hogy akár párban
                  is kipróbáljátok a 360 SELFIE-t!" >
                    </FormattedMessage>
                </div>
              </div>
              <div className="step wow fadeIn" data-wow-duration="1s" data-wow-delay=".1s">
                <div className="number">
                  <img  style={{color:'#65318f'}}  className="logo-image" src="icons/2.svg" />
                </div>
                <div className="command">
                  <h2 style={{color:'#65318f'}} >
                  <FormattedMessage id="pose"  defaultMessage="PÓZOLJ!" >
                    </FormattedMessage>
                  
                  </h2>
                </div>
                <div style={{color:'#65318f'}}  className="description">
                <FormattedMessage id="posedetail"  defaultMessage="     A kamera a visszaszámlálást követően elindul.
                  Amíg körbehalad, neked csak annyi a dolgod,
                  hogy belenézz a kamerába és felvedd a
                  tökéletes pózt!" >
                    </FormattedMessage>
                </div>
              </div>
              <div className="step wow fadeIn" data-wow-duration="1s" data-wow-delay=".1s">
                <div className="number">
                  <img style={{color:'#65318f'}}  className="logo-image" src="icons/3.svg" />
                </div>
                <div className="command">
                  <h2 style={{color:'#65318f'}} >  <FormattedMessage id="shareit"  defaultMessage="NÉZD MEG, OSZD MEG!" >
                    </FormattedMessage></h2>
                </div>
                <div style={{color:'#65318f'}}  className="description">
                <FormattedMessage id="shareitdetail"  defaultMessage=" Azonnal láthatod magad a 360 fokos
                  mozgókép formájában, amit elküldhetsz
                  magadnak és rögtön meg is oszthatsz!" >
                    </FormattedMessage> 
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{position: 'relative', zIndex:'1'}} className="contact" id="contact">
          <div className="part-title">
            <div className="title">
              
              <FormattedMessage id="contacttitle"  defaultMessage="KAPCSOLAT" >
              </FormattedMessage>
            </div>
          </div>
          <div className="part-content">
           <div className="contact-video" >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width:'33%'}}>
                  <div className="small_video">
                    <video  loop="loop" muted="true"  playsInline="playsinline">
                      <source src="https://firebasestorage.googleapis.com/v0/b/selfie-10b2c.appspot.com/o/left.mp4?alt=media" type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div   style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',width:'33%'}}>
                  <div className="small_video">
                    <video loop="loop" muted="true"  playsInline="playsinline">
                      <source src="https://firebasestorage.googleapis.com/v0/b/selfie-10b2c.appspot.com/o/middle.mp4?alt=media" type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',width:'33%'}}>
                  <div className="small_video">
                    <video  loop="loop" muted="true"  playsInline="playsinline">
                      <source src="https://firebasestorage.googleapis.com/v0/b/selfie-10b2c.appspot.com/o/right.mp4?alt=media" type="video/mp4" />
                    </video>
                  </div>
                </div>
            </div>
            <div className="contact-subsection">
              <div className="contact-subsection-left">
                 {/* <div className="quarter-border" /> */}
                 <div className="contact-title-wrapper">
            <h2  style={{textAlign:'center'}}>
             
             <FormattedMessage id="writeus"  defaultMessage=" ÍRJ NEKÜNK!" >
                   </FormattedMessage>
           </h2>
           <div className="contact-description">
           <FormattedMessage id="writeusdetail"  defaultMessage="Kérj ajánlatot az alábbiak kitöltésével és mi hamarosan felvesszük veled a kapcsolatot." >
                   </FormattedMessage>
    
           </div>
           </div>
                <div className="contact-subsection-left-wrapper">
                  <form>
                    <div className="input-row">
                      <div className="input-element">
                        <input type="text" name="lastname" id="lastname"  onChange={this.onChange} placeholder={(this.props.locale.lang==="hu") ? "Vezetéknév" : "Last name"} required >
                        </input>

                      </div>
                      <div className="input-element">
                        <input type="text" name="firstname" id="firstname"  placeholder={(this.props.locale.lang==="hu") ? "Keresztnév" : "First name"}  required />
                      </div>
                    </div>
                    <div className="input-row">
                      <div className="input-element">
                        <input type="text" name="mail" id="mail" placeholder={(this.props.locale.lang==="hu") ? "E-mail cím" : "E-mail address"} required />
                      </div>
                      <div className="input-element">
                        <input type="phone" name="phone" id="phone"  placeholder={(this.props.locale.lang==="hu") ? "Telefonszám" : "Phone Number"}  required />
                      </div>
                    </div>
                    <div className="input-row">
                      <div className="input-element">
                        <input type="text" name="eventname"  id="eventname" placeholder={(this.props.locale.lang==="hu") ? "Esemény neve" : "Event's name"} required />
                      </div>
                      <div className="input-element">
                        <input type="text" name="eventdate" id="eventdate" placeholder={(this.props.locale.lang==="hu") ? "Esemény dátuma" : "Event's date"}  required />
                      </div>
                    </div>
                    <div className="input-row">
                      <div className="input-element">
                        <textarea cols="num" rows="num" type="message" name="message"  id="message" placeholder={(this.props.locale.lang==="hu") ? "Üzenet" : "Message"}  required defaultValue={""} />
                      </div>
                    </div>
                    <div className="submit-wrapper">
                      <div className="button" id="sendbutton">
                      <FormattedMessage id="sendtitle"  defaultMessage="KÜLDÉS" >
                    </FormattedMessage>
                      </div>
                    </div>
                  </form>
                  <div className="contact-section-logo-wrapper">
                    <img className="contact-section-logo" src="icons/360.gif" />
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
        <footer>
          <div className="border" >
            <div className="footer-content-wrapper">
              <div className="logo">
                <img className="footer-logo" src="icons/logo_footer.svg" />
              </div>
              <div className="icons">
                <div className="footer-social-media-icons-wrapper">
                  <div className="text" style={{display:'flex',flexWrap:'wrap',justifyContent:"center"}}>	               <div className="distance" >
+36 20 823 3319                </div>
     info@360selfie.hu</div>
                  <div className="text" style={{textAlign:'center'}}> 
                    © 2018  
                    <FormattedMessage id="allrights"  defaultMessage=" Minden jog fenntartva." >
                    </FormattedMessage>
                  </div>
                  <div className="social">
                    <div className="footer-social-media-icons">
                      <a target="_blank" href="https://www.facebook.com/360selfiehu/">
                        <img src="./facebook.svg" />
                      </a>
                    </div>
                    <div className="footer-social-media-icons">
                      <a target="_blank" href="https://www.instagram.com/360selfiehu/">
                        <img src="./instagram.svg" />
                      </a>
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      {/* { <Alert />} */}

    </div>
    );
  }
};


const mapStateToProps = state => ({
  locale: state.locale,
  retkesGECI: state.retkesGECI
})


export default withStyles(styles)(connect(mapStateToProps,{storeFASZOM})(HomePage));



