import React from 'react';
import { connect } from 'react-redux';
import { setCurrent, clearCurrent, deleteContact } from '../../actions/contacts';

const Contact = ({ contact, setCurrent, clearCurrent, deleteContact }) => {
    const { _id, name, email, phone, type } = contact;
    return (
        <div className="card bg-light">
            <h3 className="text-primary text-left">
                {name}{' '}
                <span style={{ float: "right" }}
                    className={`badge ${type === 'professional' ? 'badge-success' : 'badge-primary'}`}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
            </h3>
            <ul className="list">
                {email && (<li><i className="fas fa-envelope-open icons"></i>{email}</li>)}
                {phone && (<li><i className="fas fa-phone icons"></i>{phone}</li>)}
            </ul>
            <button className="btn btn-dark btn-sm" onClick={() => setCurrent(contact)}>Edit</button>
            <button className="btn btn-danger btn-sm" onClick={() => {
                deleteContact(_id);
                clearCurrent();
            }}>Delete</button>
        </div>
    );
};

export default connect(null, { setCurrent, clearCurrent, deleteContact })(Contact);