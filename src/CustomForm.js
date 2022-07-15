import * as React from 'react';

const minStringLength = 5;
const maxStringLength = 15;

export default class CustomForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };

        this.handleUserNameInput = this.handleUserNameInput.bind(this);
        this.handleEmailInput = this.handleEmailInput.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
        this.handleConfirmPasswordInput = this.handleConfirmPasswordInput.bind(this);
        this.checkIfUserNameisValid = this.checkIfUserNameisValid.bind(this);
        this.checkIfEmailisValid = this.checkIfEmailisValid.bind(this);
        this.checkIfPasswordisValid = this.checkIfPasswordisValid.bind(this);
        this.checkIfPasswordsMatch = this.checkIfPasswordsMatch.bind(this);
        this.checkIsFormValid = this.checkIsFormValid.bind(this);
    }

    render() {
        return (
        <div>
            <form>
                <div>
                    <label>Username</label>
                    <input onChange={this.handleUserNameInput} type='text'/>
                </div>
                <div>
                    <label>Email</label>
                    <input onChange={this.handleEmailInput} type='email'/>
                </div>
                <div>
                     <label>Password</label>
                     <input onChange={this.handlePasswordInput} type='password'/>
                </div>
                <div>
                    <label>Password confirmation</label>
                    <input onChange={this.handleConfirmPasswordInput} type='password'/>
                </div>
                <div>
                    <button disabled={!this.checkIsFormValid()} type='submit'>Submit form</button>
                </div>
            </form>
        </div>
        )
    }

    handleUserNameInput(event) {
        this.setState({userName: event.target.value});
    }

    handleEmailInput(event) {
        this.setState({email: event.target.value});
    }

    handlePasswordInput(event) {
        this.setState({password: event.target.value});
    }

    handleConfirmPasswordInput(event) {
        this.setState({confirmPassword: event.target.value});
    }

    checkIfUserNameisValid() {
        return (this.state.userName.length > minStringLength && this.state.userName.length < maxStringLength && !this.state.userName.includes('_'));
    }

    checkIfPasswordisValid() {
        return (this.state.password.length > minStringLength && this.state.password.length < maxStringLength && this.state.password.includes('_'));
    }

    checkIfEmailisValid() {
        const regEx = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
        return regEx.test(this.state.email);
    }

    checkIfPasswordsMatch() {
        return this.state.password === this.state.confirmPassword;
    }

    checkIsFormValid = () => {
        return (this.checkIfUserNameisValid() && this.checkIfEmailisValid() && this.checkIfPasswordisValid() && this.checkIfPasswordsMatch());
    }
}

