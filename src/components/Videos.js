/*global $*/
/*global WOW*/

import React, { Component } from 'react'
import {connect} from 'react-redux'; 
import Moment from 'react-moment';

import {getEvents} from '../actions/actions';
import { withStyles } from '@material-ui/core/styles';
import AppBar from './AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from 'axios'


import download from './assets/DOWNLOAD.svg'
import copy from './assets/COPY.svg'
import share from './assets/SHARE.svg'

import MetaTags from 'react-meta-tags';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import CircularProgress from '@material-ui/core/CircularProgress';

import { CopyToClipboard } from 'react-copy-to-clipboard'


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

class Videos extends Component {
  constructor(props){
    super(props);
    this.state={
        isDialogOpen: false,
        errors:null,
        token:'',
        name:''
    };
  }

  componentDidMount(){
    this.props.getEvents(); 
    
    window.onload = () => {
      var extended=true;
      var onclicked;
      var logo;

      /*menu*/
      $( ".menu_button" ).click(function() {
        if(extended){
          $(".drop-down-menu").css("visibility",'visible');
          document.getElementById("drop-down").style.top = "50px";
          extended=false;
        } else {
          $(".drop-down-menu").css("visibility",'hidden');
          extended=true;
        }
      });
  }
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

  
  shouldComponentUpdate(nextProps,nextState) {

    if(nextProps!==this.props)
      return true

    if(nextState!==this.state)
      return true

  }

  facebookShare = (event) => {
    let id =event.currentTarget.getAttribute('value')
    let url='https://www.facebook.com/sharer/sharer.php?u='+'https://360selfie.hu/'+this.props.location.state.token+"/"+id
    window.location.replace(url)
  }

  render() {
    const {classes} = this.props
    let found = this.props.events.events ? (this.props.events.events).find((event) => (event.id == this.props.location.state.token)) : (null)
    let name = found ? (found.name) : (" ")

    let videos = found ? (found.items.map((video) => (
      <Grid key={video.created} item xs={12} sm={3} lg={3} md={3}>
        <Paper className={classes.paper}>
            <Video style={{fontSize:'0px', backgroundColor:'white'}} loop muted controls={[]}>
                <source src={video.url} type="video/mp4" />
            </Video>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <div className={classes.icons}  value={video.created} onClick={this.facebookShare}>
                <img className="actions" src={share}/>
              </div>
              <div className={classes.icons} value={video.url} onClick={this.download} >
              <img className="actions" src={download}/>
              </div>
              <div className={classes.icons}> 
                <CopyToClipboard text={'https://360selfie.hu/'+found.id+"/"+video.created}>
                  <img className="actions" src={copy}/>
                </CopyToClipboard>
              </div>
            </div>
        </Paper>
        </Grid>
        ))) : (<CircularProgress className={classes.progress} size={24}/>)

    return (
     
  
      <div className={classes.root} style={{backgroundColor:'black'}}>
          <MetaTags>
            <title>{(found) ? ("360selfie | " + found.name): ("360selfie")}</title>
            <meta property="og:image" content={'http://360selfie.hu/icons/logo_360.svg'} />
          </MetaTags> 
          <header className="header" id="header" style={{minHeight:'35px'}}>
          <AppBar/>
              </header>
          <main className={classes.content}>
            <div className={classes.root}>
              <Grid container spacing={24}>
                {videos}
              </Grid>
            </div>
          </main>
      </div>

    )
  }
}



const mapStateToProps = state => ({
  events: state.events,
  locale:state.locale
})


export default withStyles(styles)(connect(mapStateToProps,{getEvents})(Videos));



