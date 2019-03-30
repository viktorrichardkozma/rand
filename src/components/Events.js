import React, { Component } from 'react'
import {connect} from 'react-redux'; 
import Moment from 'react-moment';

import {getEvents, validateToken} from '../actions/actions';
import FormDialog from './Dialog'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Paper from '@material-ui/core/Paper';
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

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    this.setState({'token': value})
  };

  openNewSessionDialog = () => {
    this.setState({isDialogOpen:true});   
  }

  cancelNewSessionDialog = () => {
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
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={event.thumbnailURL}
            title={event.name}
          />
          <CardContent style={{backgroundColor:'#a3e1c6',color:'white'}}>
            <Typography gutterBottom variant="h5" component="h2" style={{color:'white'}}>
            <b> {event.name}</b>
            </Typography>
            <Typography component="p" style={{color:'white'}}>
            {event.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button id={event.id} size="small" onClick={this.openNewSessionDialog} color="primary">
            Megtekintés
          </Button>
        </CardActions>
      </Card>
    </Grid>
    ))) : (<CircularProgress className={classes.progress} size={24}/>)

    return (
      <div className={classes.root} style={{backgroundColor:'black'}}>
        <AppBar position="fixed" style={{ backgroundColor: 'transparent',
      color: 'white',
      borderBottom: '0.1px solid'}}>
          <Toolbar className="classes.tool" >
            <Typography variant="h6" color="inherit" noWrap>
                <b>KORÁBBI ESEMÉNYEK</b>
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container spacing={12} >
          <main className={classes.content}>
            <div className={classes.toolbar} />
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
  events: state.events
})

export default withStyles(styles)(connect(mapStateToProps,{getEvents,
  validateToken})(Events));



