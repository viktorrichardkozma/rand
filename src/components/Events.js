import React, { Component } from 'react'
import {connect} from 'react-redux'; 
import Moment from 'react-moment';

import {FormattedMessage} from 'react-intl'

import {getEvents} from '../actions/actions';
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

import CircularProgress from '@material-ui/core/CircularProgress';

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

class Events extends Component {
  constructor(props){
    super(props);
    this.state={
        isDialogOpen: false,
        errors:null,
        token:'',
        name:''
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    this.setState({'token': value})
  };

  openNewSessionDialog = event => {
    event.preventDefault()
    this.setState({isDialogOpen:true});   
  }

  cancelNewSessionDialog = event => {
    event.preventDefault()
    this.setState({isDialogOpen:false});
  };

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
    let eventsContent= (this.props.events.events) ? (this.props.events.events.map(event =>(
      <Grid key={event.id} item xs={12} sm={4} md={3} lg={2}>
        <Card className={classes.card}>
        <CardActionArea style={{cursor:'pointer'}} id={event.id} onClick={this.openNewSessionDialog} >
         
          <CardContent style={{backgroundColor:'#a3e1c6',color:'white'}}>
            <Typography gutterBottom variant="h5" component="h2" style={{color:'white'}}>
            <b> {event.name}</b>
            </Typography>
       
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button style={{cursor:'pointer'}} id={event.id} onClick={this.openNewSessionDialog} color="primary">
          <FormattedMessage id="check"  defaultMessage="MEGTEKINTÉS" >
                    </FormattedMessage>
          </Button>
        </CardActions>
      </Card>
    </Grid>
    ))) : (<CircularProgress className={classes.progress} size={24}/>)

    return (



      <div className={classes.root} style={{backgroundColor:'black'}}>


        <MetaTags>
          <title>{"360selfie | " + (this.props.locale.lang=="hu") ? ("Események") : ("Events") }</title>
          <meta property="og:image" content={'http://360selfie.hu/icons/logo_360.svg'} />
        </MetaTags> 
<header className="header" id="header" style={{minHeight:'auto'}}>
<AppBar/>

            </header>


        <Grid container spacing={12} >

          <main className={classes.content}>
          <Typography style={{color:'white',padding:'20px 0px 10px 0px',textAlign: 'center'}} variant="h6" > <b> {(this.props.locale.lang=="hu") ? ("Események") : ("Events") } </b></Typography>
            <div className={classes.eventsContent}>
              {eventsContent}
            </div>
          </main>
        </Grid>
        {this.state.isDialogOpen && <FormDialog history={this.props.history} onClose={this.cancelNewSessionDialog}></FormDialog>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  events: state.events,
  locale: state.locale
})

export default withStyles(styles)(connect(mapStateToProps,{getEvents})(Events));



