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
      }, icons:{
        cursor:'pointer',
        padding:'10px'
        
      }
});

class Events extends Component {
  constructor(props){
    super(props);
    this.state={
        isDialogOpen: false,
        token:'',
        name:'',
        play:''
    };
  }


  downloadFile = (event) => {

    var link = document.createElement('a');
    console.log(event.target.value)
    link.href = 
    link.download = 'true';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
 };

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
    let id = event.currentTarget.getAttribute('value')
    let url ='https://www.facebook.com/sharer/sharer.php?u='+'https://frozen-lake-61201.herokuapp.com/'+this.state.token+"/"+id
    window.location.replace(url)
  }

  openNewSessionDialog = () => {
    this.setState({isDialogOpen:true});   
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
    let found = this.props.events.events ? (this.props.events.events).find((event) => (event.id === this.state.token)) : (null)
    let name = found ? (found.name) : ("loading")

    let videos = found ? (found.items.map((video) => (
      <Grid key={video.created} item xs={12} sm={3} lg={3} md={3}>
        <Paper className={classes.paper}>
            <Video style={{fontSize:'0px', backgroundColor:'white'}} loop muted controls={[]}>
                <source src={video.url} type="video/mp4" />
            </Video>
            <div style={{padding:'10px', display: 'flex', justifyContent: 'center'}}>
              <div className={classes.icons}  value={video.created} onClick={this.facebookShare}>
                <FontAwesomeIcon  icon={['fab', 'facebook']} />
              </div>
              <div className={classes.icons}> 
                <CopyToClipboard text={'https://frozen-lake-61201.herokuapp.com/'+found.id+"/"+video.created}>
                    <FontAwesomeIcon icon={['fas', 'copy']} />
                </CopyToClipboard>
              </div>
            </div>
        </Paper>
        </Grid>
        ))) : (<CircularProgress className={classes.progress} size={24}/>)

    return (



      <div className={classes.root} style={{backgroundColor:'black'}}>
          <header className="header" id="header" style={{minHeight:'auto'}}>
              <nav className="mobile-nav">
                <div className="dropdown_button">
                  <img className="menu_button" src="images/icon_menu_hamburger.svg" />
                </div>
                <div className="drop-down-menu" id="drop-down">
                  <ul>
                    <li>
                      <a href="/#aboutus">RÓLUNK</a>
                    </li>
                    <li>
                      <a href="/#details"> RÉSZLETEK </a>
                    </li>
                    <li>
                      <a href="/#gallery"> GALÉRIA </a>
                    </li>
                    <li>
                      <a href="/#contact"> KAPCSOLAT </a>
                    </li>
                    <ul>
                    </ul></ul></div>
                <img style={{height: '15px', position: 'relative', top: '-2px', left: '17px'}} className="menu-logo" src="icons/menulogo.svg" />
              </nav>
        
              <div className="menu-logo-wrapper">
                <img className="menu-logo" src="../icons/menulogo.svg" />
                <menu>
                  <ul>
                    <li>
                      <a href="/#aboutus">RÓLUNK</a>
                    </li>
                    <li>
                      <a href="/#details"> RÉSZLETEK </a>
                    </li>
                    <li>
                      <a href="/#gallery"> GALÉRIA </a>
                    </li>
                    <li>
                      <a href="/#contact"> KAPCSOLAT </a>
                    </li>
                    <ul>
                    </ul></ul></menu>
              </div>
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
  events: state.events
})

export default withStyles(styles)(connect(mapStateToProps,{getEvents,
  validateToken})(Events));



