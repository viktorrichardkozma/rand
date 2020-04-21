import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


class Validate extends Component{
    constructor(props){
      super(props);

      this.state={
          events:null,
          
      };

    // this.onSubmit=this.onSubmit.bind(this);
    }


    componentDidMount(){
        if(this.props.auth.isAuthenticated){
            this.props.history.push('/dashboard');
        }
    }
    render(){
        return(
            <div className="landing">
                <div className="dark-overlay landing-inner text-light">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12 text-center">
                        <h1 className="display-3 mb-4 title"> {this.props.event_name}
                        </h1>
                        <form>
                        <div className="form-group">
                          <label for="exampleInputPassword1">Jelszó</label>
                          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password">  </input>
                        </div>
                        <button type="submit" className="btn btn-primary">Belépés</button>
                      </form>
                    </div>
                    </div>
                </div>
                </div>
            </div> 
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
});


export default connect(mapStateToProps)(Landing);

