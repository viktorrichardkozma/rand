import React, { Component } from 'react'
import {connect} from 'react-redux'; 
import Moment from 'react-moment';

import {getEvents, validateToken} from '../actions/actions';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

import MetaTags from 'react-meta-tags';
import { CopyToClipboard } from 'react-copy-to-clipboard'


const styles = theme => ({
  toolbar: theme.mixins.toolbar,
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
      height: '100vh'
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
      backgroundColor:'black'
    },
    root: {
        flexGrow: 1,
        height:'100vh'
    },
    paper: {
        borderRadius:'0px',
        textAlign: 'center',
        color: 'black'
    },
    icons:{
      cursor:'pointer',
      padding:'10px'

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

  
  onValidate = () => {
    let token=this.state.token;
    let valid = this.props.events.events.some(event => { console.log(event.id+ " " +token); return event.id === token});
    if(valid){
      this.props.validateToken(valid, this.props.history)
    }
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    this.setState({'token': value})
  };

  facebookShare = (event) => {
    let id =event.currentTarget.getAttribute('value')
    let url='https://www.facebook.com/sharer/sharer.php?u='+'https://frozen-lake-61201.herokuapp.com/'+this.state.token+"/"+id
    window.location.replace(url)
  }

  cancelNewSessionDialog = () => {
    this.setState({isDialogOpen:false});
  };

  componentDidMount(){
    this.props.getEvents(); 
    this.setState({token:sessionStorage.getItem('token')});
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return nextProps.events === prevState.events
      ? {}
      : {events: nextProps.events}
  }

  render() {
    const {classes} = this.props;
    const {eventid,timestamp} = this.props.match.params;

    let found = this.props.events.events ? (this.props.events.events).find((event) => {
      return  (event.id === eventid)
    }) : (null)

    let videoURL = found ? (found.items).find((video) => {
       return  (video.created == timestamp)
    }) : (null)

    let video = videoURL ?
    (<Video style={{fontSize:'0px', backgroundColor:'white'}} loop muted
      controls={[]}>
      <source src={videoURL.url}  type="video/mp4" />
      </Video>)
    : (null)

    return (
      <div className={classes.root} style={{backgroundColor:'black'}}>
         <MetaTags>
            <title></title>
            <meta name="description" content={(found)? (found.description):("loading") } />
            <meta property="og:title" content={(found) ? ("360selfie - " + found.name):("loading") } />
            <meta property="og:video" content="" />
          </MetaTags> 
          <img src={require('../components/common/logo_360.svg')} />

        <main className={classes.content}>
          <div className={classes.root}>
            <div className={classes.toolbar} />
            <Grid style={{color:'white',  display:'flex', justifyContent:'center'}} container spacing={24}>
              <Grid key={video.created} item xs={12} sm={6} lg={3} md={3}>
                <Paper className={classes.paper}>
                  {video}
                  <div style={{padding:'10px', display: 'flex', justifyContent: 'center'}}>
                    <div className={classes.icons}  value={timestamp} onClick={this.facebookShare}>
                      <FontAwesomeIcon  icon={['fab', 'facebook']} />
                    </div>
                    <div className={classes.icons}> 
                      <CopyToClipboard text={videoURL ? ('https://frozen-lake-61201.herokuapp.com/'+eventid+"/"+timestamp): ('https://frozen-lake-61201.herokuapp.com/')}>
                          <FontAwesomeIcon icon={['fas', 'copy']} />
                      </CopyToClipboard>
                    </div>
                  </div>

                </Paper>
              </Grid>
            </Grid>
          </div>
        </main>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  events: state.events
})

export default withStyles(styles)(connect(mapStateToProps,{getEvents,
  validateToken})(VideoView));



