import axios from 'axios';
import {
    GET_CONTACTS,
    ADD_CONTACT,
    CLEAR_CONTACTS,
    UPDATE_CONTACT,
    DELETE_CONTACT,
    FILTER_CONTACTS,
    SET_CURRENT,
    CLEAR_CURRENT,
    CONTACT_ERROR
} from "./types";

import { setAlert } from './alert';

//get all contacts from user
export const getContacts = () => async dispatch => {
    try {
        const res = await axios.get('/api/contacts');
        dispatch({
            type: GET_CONTACTS,
            payload: res.data
        });
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: CONTACT_ERROR
        });

        // dispatch({
        //     type: CONTACT_ERROR,
        //     payload: err.response.data.errors
        // });
    }
};

//add contact
export const addContact = (contact) => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    const body = JSON.stringify(contact);
    try {
        const res = await axios.post('/api/contacts', body, config);
        dispatch({
            type: ADD_CONTACT,
            payload: res.data
        });
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: CONTACT_ERROR
        });
    }
};

//set current contact
export const setCurrent = contact => async dispatch => {
    dispatch({
        type: SET_CURRENT,
        payload: contact
    })
};

//clear contact 
export const clearCurrent = () => async dispatch => {
    dispatch({
        type: CLEAR_CURRENT
    });
};

//update contact
export const updateContact = contact => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    try {
        const res = await axios.put(`/api/contacts/${contact._id}`, contact, config);
        dispatch({
            type: UPDATE_CONTACT,
            payload: res.data
        });
    } catch (err) {

    }
}

//delete contact
export const deleteContact = id => async dispatch => {
    try {
        await axios.delete(`/api/contacts/${id}`);
        dispatch({
            type: DELETE_CONTACT,
            payload: id
        });
    } catch (err) {

    }

};

//filter contacts
export const filterContacts = (text = '') => dispatch => {
    dispatch({
        type: FILTER_CONTACTS,
        payload: text
    });
}

//clear contacts
export const clearContacts = () => dispatch => {
    dispatch({
        type: CLEAR_CONTACTS
    });
}