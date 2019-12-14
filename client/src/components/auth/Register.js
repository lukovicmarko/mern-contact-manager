import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../actions/auth';
import { setAlert } from '../../actions/alert';

const Register = ({ register, isAuthenticated, setAlert }) => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });
    const { name, email, password, password2 } = user;

    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = e => {
        e.preventDefault();
        if (password !== password2) {
            setAlert('Passwords do not match', 'danger');
        } else {
            register({ name, email, password });
            setUser({
                name: '',
                email: '',
                password: '',
                password2: ''
            });
        }
    };

    //Redirect if registered
    if (isAuthenticated) {
        return <Redirect to="/" />
    }

    return (
        <div className="form-container">
            <h1>
                Account  <span className="text-primary">Register</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password2">Confirm password</label>
                    <input
                        type="password"
                        name="password2"
                        value={password2}
                        onChange={onChange}
                    />
                </div>
                <input type="submit" value="Register" className="btn btn-primary btn-block" />
            </form>
        </div >
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register, setAlert })(Register);