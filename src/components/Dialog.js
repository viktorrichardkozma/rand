import React, { Component } from 'react'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import {getEvents, validateToken} from '../actions/actions';
import {connect} from 'react-redux'; 



const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  }
});


class FormDialog extends Component {
  constructor(props){
    super(props);
    this.state={
        errors:null,
        token:'',
        inValid:false
        
    };

  }


  onValidate = () => {
    let token=this.state.token;
    let valid = this.props.events.events.some(event => { console.log(event.id+ " " +token); return event.id === token});
    if(valid){
        sessionStorage.setItem('token', this.state.token);
        this.props.history.push('/events/videos')
        this.setState({invalid:false})
    } else {
        this.setState({invalid:true})
    }
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    this.setState({'token': value})
  };
  
  static getDerivedStateFromProps(nextProps, prevState) {
    if(prevState){
    return nextProps.permissions === prevState.permissions
      ? {}
      : {permissions: nextProps.permissions}
    } else return {}
  }

  render() {
    let innerContent=(this.state.invalid)?(
        <TextField
        id="token"
        label="Token"
        margin="normal"
        value={this.state.token}
        error={ "Hibás token"}
        helperText={"Nem megfelelő a hozzáférési token, próbáld újra!"}
        onChange={this.handleInputChange}
    /> )  : ( 
     <TextField
          id="token"
          label="Token"
          margin="normal"
          value={this.state.token}
          onChange={this.handleInputChange}
      />

      )

  return (
    <div>


<Dialog
    open={true}
    aria-labelledby="form-dialog-title"
  >
  <DialogTitle id="form-dialog-title">Belépés</DialogTitle>
  <DialogContent>
      <Typography variant="p" color="inherit">
            Írd be az eseményen kapott tokent a videók megtekintéséhez!
      </Typography>
      <FormGroup>
    {innerContent}

      </FormGroup>
  </DialogContent>
  <DialogActions>
    <Button onClick={this.props.onClose} color="primary">
      bezár
    </Button>
    <Button onClick={this.onValidate} variant="contained" color="primary">
      megerősít
    </Button>
  </DialogActions>
</Dialog>



    </div>
  )
}
}

const mapStateToProps = state => ({
  events: state.events
})

export default withStyles(styles)(connect(mapStateToProps,{
  validateToken})(FormDialog));
