import React, {PureComponent} from 'react';
import {authenticateUser} from '../../actions/authenticateUser';
import { LOGIN_ERROR } from '../../constants'
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

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
            this.setState({error: LOGIN_ERROR})
        event.preventDefault();
    }

    componentDidUpdate(prevProps, prevState){
        const {user} = this.props;
        if( user.error && (user.error != prevState.error)){
            this.setState({error: LOGIN_ERROR})
        }
        if(user.name){
            this.props.history.push('/search');
        }
    }
  
    render() {
        return (
            <Container>
                <h1>Galaxy Database</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>username:</Form.Label>
                        <Form.Control type='text' 
                            required
                            name='username' 
                            onChange={this.handleChange} 
                            placeholder="Enter username"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>password:</Form.Label>
                        <Form.Control type="text" 
                            required
                            name='password'
                            onChange={this.handleChange} 
                            placeholder="Enter password"/>
                    </Form.Group>
                    <Form.Group>
                        <Button type="submit" variant="primary">Submit</Button>
                    </Form.Group>
                    
                    <Form.Label>{this.state.error}</Form.Label>
                </Form>
            </Container>
        );
    }
}
const mapStateToProps = user => user;

export default connect(mapStateToProps)(LoginPage);