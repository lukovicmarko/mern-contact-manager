import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth';
import { clearContacts } from '../../actions/contacts';

const Navbar = ({ title, icon, logout, auth: { isAuthenticated, loading, user }, clearContacts }) => {

    const authLiks = (
        <Fragment>
            <li className="nav-link">
                Hello, {user && user.name}
            </li>
            <li>
                <Link to="/" onClick={() => {
                    logout();
                    clearContacts();
                }}>
                    <i className="fas fa-sign-out-alt"></i>{' '}
                    <span className="hide-sm">Logout</span>
                </Link>
            </li>
        </Fragment>
    );
    const guestLiks = (
        <Fragment>
            <li>
                <Link to="/register">Register</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </Fragment>
    );
    return (
        <div className="navbar bg-primary">
            <h1>
                <i className={icon} /> {title}
            </h1>
            <ul>
                {!loading && (<Fragment>{isAuthenticated ? authLiks : guestLiks}</Fragment>)}
            </ul>
        </div>
    );
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Contact Manager',
    icon: 'fas fa-id-card-alt'
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout, clearContacts })(Navbar);