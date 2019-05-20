// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import React from 'react';
// import { connect } from 'react-redux';
// import { closeAlert } from '../actions/actions'


// class AlertDialog extends React.Component {

//   handleClose = () => {
//     this.props.closeAlert()
//   };

//   render() {
//     return (
//       <div>
//         {(this.props.alert.alertState) ? (<Dialog
//           open={this.props.alert.alertState}
//           aria-labelledby="alert-dialog-title"
//           aria-describedby="alert-dialog-description"
//         >
//           <DialogTitle id="alert-dialog-title">{'Error'}</DialogTitle>
//           <DialogContent>
//             <DialogContentText id="alert-dialog-description">
//               {this.props.alert.alertMessage}
//             </DialogContentText>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={this.handleClose} color="primary">
//               OK
//             </Button>
//           </DialogActions>
//         </Dialog>) : null }
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     closeAlert: () => dispatch(closeAlert())
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     alert: state.alert
//   }
// }


// export default (connect(mapStateToProps, mapDispatchToProps)(AlertDialog)) 