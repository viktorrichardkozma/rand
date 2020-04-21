/*global $*/
/*global WOW*/

import React, { Component } from 'react'
import {connect} from 'react-redux'; 
import Moment from 'react-moment';

import {getEvents} from '../actions/actions';
import { withStyles } from '@material-ui/core/styles';

import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AppBar from './AppBar';

import {FormattedMessage} from 'react-intl'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

import download from './assets/DOWNLOAD.svg'
import copy from './assets/COPY.svg'
import share from './assets/SHARE.svg'

import MetaTags from 'react-meta-tags';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import fileDownload from 'js-file-download'

import './common/main.css';

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
    card: {
      margin:'15px',
      color: '#A3E2C6',
      backgroundColor:'white',
    },
    media: {
      height: 140,
    }, 
    root: {
      flexGrow: 1,
    },
    toolbar: theme.mixins.toolbar,

    paper: {
        borderRadius:'0px',
        textAlign: 'center',
        color: 'black'
    },
    icons:{
      cursor:'pointer',
      padding:'10px',
      height:'60px'
    },
    logo:{
      display:'flex',
      justifyContent: 'center'
    }
 
});

class VideoView extends Component {
  constructor(props){
    super(props);
    this.state={
        isDialogOpen: false,
        token:'',
        name:'',
        play:'',
   
    };
  }


  facebookShare = (event) => {
    let id = event.currentTarget.getAttribute('value')
    let url='https://www.facebook.com/sharer/sharer.php?u='+'https://360selfie.hu/'+this.props.match.params.eventid+"/"+this.props.match.params.timestamp
    window.location.replace(url)
  }

  download = (event) => {

      let downloadLink = event.currentTarget.getAttribute('value')
   
    axios({
       url: downloadLink,
       method: 'GET',
       responseType: 'blob', // important
     }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', '360selfie.mp4'); //or any other extension
        document.body.appendChild(link);
        link.click();
     });

  }

  componentDidMount(){
    this.props.getEvents(); 
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return nextProps.events === prevState.events
      ? {}
      : {events: nextProps.events}
  }
  

  render() {
    const {classes} = this.props;
    const {eventid} = this.props.match.params;

    let found = this.props.events.events ? (this.props.events.events).find((event) => {
      return  (event.id === eventid)
    }) : (null)

    let videoURL = (found) ? (found.items).find(video => {
       return (video.created == this.props.match.params.timestamp)
    }) : null


    let video = (videoURL) ?
    (
    <div>
      <Video style={{fontSize:'0px', backgroundColor:'white'}} loop muted
      controls={[]}>
      <source src={videoURL.url}  type="video/mp4" />
      </Video>
          <div style={{display: 'flex', justifyContent: 'center'}}>
          <div className={classes.icons}  onClick={this.facebookShare}>
            <img className="actions" src={share}/>
          </div>
          <div className={classes.icons} value={videoURL.url} onClick={this.download} >
              <img className="actions" src={download}/>
          </div>
          <div className={classes.icons}> 
            <CopyToClipboard text={'https://360selfie.hu/'+found.id+"/"+videoURL.created}>
              <img className="actions" src={copy}/>
            </CopyToClipboard>
          </div>
        </div>
      </div>
      )
    : (<div > </div>)

    return (
      <div className={classes.root} style={{backgroundColor:'black'}}>
        <MetaTags>
          <title>{(found) ? ("360selfie | " + found.name): ("360selfie") }</title>
          <meta name="description" content={(found)? (found.description):("loading") } />
          <meta property="og:title" content={(found) ? ("360selfie - " + found.name):("loading") } />
          <meta property="og:image" content={'http://360selfie.hu/icons/logo_360.svg'} />
        </MetaTags> 
        <main className={classes.content}>
            <Grid style={{color:'white',  display:'flex', justifyContent:'center'}} container spacing={24}>
              <Grid item xs={12} sm={6} lg={3} md={3}>
                <Paper className={classes.paper}>
                  {video}
                </Paper>
              </Grid>
            
            </Grid>
            <div className={classes.logo}>
            <img style={{padding:'30px', height: '200px', width: '200px' }} src={require('../components/common/360.gif')} />
          </div>
        </main>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  events: state.events
})

export default withStyles(styles)(connect(mapStateToProps,{getEvents})(VideoView));



