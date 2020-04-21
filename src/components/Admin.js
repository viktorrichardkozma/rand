import React, { Component } from 'react'
import {connect} from 'react-redux'; 
import Moment from 'react-moment';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment'
import {FormattedMessage} from 'react-intl'

import {getMyEvents,getMe,deleteEvent,submitEvent} from '../actions/actions';


import FormDialog from './Dialog'

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import AppBar from './AppBar'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import MetaTags from 'react-meta-tags';

import Grid from '@material-ui/core/Grid';
import './common/main.css'

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height:'100%'
  },
    card: {
      margin:'15px'
    },
    media: {
      height: 220,
    }, 
    root: {
      flexGrow: 1,
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor:'black'
    },
    eventsContent:{
      display:'flex',
      flexWrap:'wrap'
    },
    progress: {
      margin: theme.spacing.unit * 2,
      color: "#A3E1D4" 
    }
});

class Admin extends Component {
  constructor(props){
    super(props);
    this.state={
        profileId:'',
        eventName: '',
        events:null,
        file:null
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    console.log(value)

    this.setState({'eventName': value})
  };

  handleClick = event => {
    const { target = {} } = event || {};
    target.value = "";
  };

  handleFile = event => {
    const file = event.target.files[0];
    this.setState({'file': file})
  };
  
  submitEvent = () => {
    const {file, eventName} = this.state
    this.props.submitEvent({
      file,
      eventName
    })
  };

  componentDidMount(){
    this.props.getMe()
    this.props.getMyEvents()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.profile !== this.props.profile) {
      this.setState({
        profileId : this.props.profile.id,
        name: this.props.profile.name,
      })
    }

    if (prevProps.myEvents !== this.props.myEvents) {
      this.setState({
        events: this.props.myEvents
      })
    }

  }

  render() {
    const {classes} = this.props;
    const {profileId,events,name} = this.state;
    console.log(this.props.myEvents);

    return (
      <div style={{height:'100%'}}>
        <MetaTags>
          <title>{"360selfie | " + (this.props.locale.lang=="hu") ? ("Admin") : ("Admin") }</title>
          <meta property="og:image" content={'http://360selfie.hu/icons/logo_360.svg'} />
        </MetaTags> 
        <header className="header" id="header" style={{minHeight:'auto'}}>
          <AppBar admin={true}/>
        </header>

        <Grid container spacing={12} style={{ padding: '0px 50px 0px 0'}} >
          <main className={classes.content}>
          <h2 style={{    color: 'white',
    padding: '20px 0px 0px 50px' }}>Admin  { name ? (<span> | <small> {name} </small> </span>) : ''}</h2>


{/*               <a href="https://360-selfie-backend-service.kozmaviktorrichard.now.sh/auth/login">
 */}          
              {
              !profileId ? 
                  <div style={{color:'white', padding:'10px 50px'}}>
                    {(this.props.locale.lang==="hu") ? "A 360selfie esmények létrehozásához bejelentkezés szükséges!" : "You need to sign in to create 360selfie events."}
                  </div>
                : (
                      <div style={{color:'white',display:'flex', paddingTop: '50px'}}>
                        <form  noValidate autoComplete="off"
                          style={{ padding: '0px 50px',width:'30%'}} >
          
                              <div className="input-row" style={{ padding: '20px 0px', width:"200px"}}>
                                <div style={{ padding: '0px'}} className="input-element">
                                  <input type="text"  onChange={this.handleInputChange} placeholder={(this.props.locale.lang==="hu") ? "Esemény neve" : "Event's name"} required />
                                </div>
                              
                              </div>
                              <input style={{border:'none'}}onChange={this.handleFile} id="frame-input" accept=".png" class="u-full-width" type="file" />
                            <button style={{marginTop:'20px'}}class="button-admin"
                              onClick={() => this.submitEvent()}>
                              {(this.props.locale.lang==="hu") ? "LÉTREHOZÁS" : "CREATE"}

                            </button>
                        </form>

                        <div class="divTable">
                          <div class="divTableBody">
                            <div class="divTableRow divTableHead">
                              <div class="divTableCell divTableHeading">
                                {(this.props.locale.lang==="hu") ? "Azonosító" : "Token"}
                              </div>
                              <div class="divTableCell divTableHeading">
                                {(this.props.locale.lang==="hu") ? "Név" : "Name"}
                              </div>
                              <div class="divTableCell divTableHeading">
                                {(this.props.locale.lang==="hu") ? "Létrehozva" : "Created"}
                              </div>
                              <div class="divTableCell divTableHeading">
                                {(this.props.locale.lang==="hu") ? "Selfie Számláló" : "Selfie Counter"}
                              </div>
                              <div class="divTableCell divTableHeading">
                               {(this.props.locale.lang==="hu") ? "Keret" : "Frame"}
                              </div>
                              <div class="divTableCell divTableHeading"></div>

                               </div>
                        
                          { this.props.myEvents ? this.props.myEvents.map((row) => (
                              <div class="divTableRow" key={row.name}>
                               
                                <div class="divTableCell">{row.id}</div>
                                <div class="divTableCell">{row.name}</div>
                                <div class="divTableCell">
                                  {this.props.locale.lang==="hu" ? moment(row.created).format('YYYY MM DD') : moment(row.created).format('MM DD YYYY')
                                }</div>
                                <div class="divTableCell" >{row.items? row.items.length : 0}</div>
                                <div class="divTableCell">
                                    <a href={row.frameURL}>
                                    Link
                                    </a>
                                </div>

                                <div class="divTableCell" align="right">
                                  <button id={row.id} class="button-admin" 
                                    onClick={() => this.props.deleteEvent(row.id)}
                                  >
                                    {(this.props.locale.lang==="hu") ? "ELTÁVOLÍTÁS" : "REMOVE"}
                                  </button>
                                </div>
                              </div>
                            )) : null}

                          </div>
                        </div>
                      </div>
                      
              )}
          </main>
        </Grid>
        {this.state.isDialogOpen && <FormDialog history={this.props.history} onClose={this.cancelNewSessionDialog}></FormDialog>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  myEvents: state.events.myEvents,
  profile: state.auth,
  locale: state.locale
})

export default withStyles(styles)(connect(mapStateToProps,{getMe,getMyEvents,deleteEvent,submitEvent})(Admin));



