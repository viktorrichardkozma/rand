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
import {connect} from 'react-redux'; 
import {FormattedMessage} from 'react-intl'

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
    let valid = this.props.events.events.some(event => { return event.id === token});
    if(valid){
      
      
      this.props.history.push({
        pathname: 'events/videos',
        state: {
          token: token
        }
      })

    } else {
        this.setState({invalid:true})
    }
  }


  handleInputChange = (event) => {
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
        error={ (this.props.locale.lang==="hu") ? ("Hibás token") : ("Token error") }
        helperText={(this.props.locale.lang==="hu") ? ("Nem megfelelő a hozzáférési token, próbáld újra!") : ("Try again!") }
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
  <DialogTitle id="form-dialog-title"> 
      { (this.props.locale.lang==="hu") ? ("Belépés!") : ("Sign in!") } 

   </DialogTitle>
  <DialogContent>
      <Typography variant="p" color="inherit">
      { (this.props.locale.lang==="hu") ? ("Írd be az eseményen kapott tokent a videók megtekintéséhez!") : ("Type that token what you got on the event!") } 
      </Typography>
      <FormGroup>
    {innerContent}

      </FormGroup>
  </DialogContent>
  <DialogActions>
    <Button onClick={this.props.onClose} style={{color:'black'}}>
    <FormattedMessage id="close"  defaultMessage="close" > </FormattedMessage>
    </Button>
    <Button onClick={this.onValidate} variant="contained" style={{color:'black'}}>
    <FormattedMessage id="submit"  defaultMessage="submit" > </FormattedMessage>
    </Button>
  </DialogActions>
</Dialog>
    </div>
  )
}
}
const mapStateToProps = state => ({
  events: state.events,
  locale: state.locale
})

export default withStyles(styles)(connect(mapStateToProps,{
})(FormDialog));
