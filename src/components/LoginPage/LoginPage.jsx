import React, {PureComponent} from 'react';
import {authenticateUser} from '../../actions/authenticateUser';
import { CONSTANTS } from '../../constants'
import { connect } from 'react-redux';

class LoginPage extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {username:'', password:'', error:''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        const {name, value} = event.target;
        (name === 'username')
        ? this.setState({username: value})
        : this.setState({password: value});
    }

    handleSubmit(event) {
        const {username, password} = this.state;
        if(username!='' && password!='')
            this.props.dispatch(authenticateUser(username, password));
        else
            this.setState({error: CONSTANTS.LOGIN_ERROR})
        event.preventDefault();
    }

    componentDidUpdate(prevProps, prevState){
        const {user} = this.props;
        if( user.error && (user.error != prevState.error)){
            (user.error === '')
            ?this.setState({error: CONSTANTS.LOGIN_ERROR})
            :this.setState({error: ''});
        }
        if(user.name){
            this.props.history.push('/search');
        }
    }
  
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    username:
                    <input type='text' 
                        name='username' 
                        onChange={this.handleChange} />
                </label>
                <label>
                    password:
                    <input type="text" 
                    name='password'
                    onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
                {this.state.error}
            </form>
        );
    }
}
const mapStateToProps = user => user;

export default connect(mapStateToProps)(LoginPage);