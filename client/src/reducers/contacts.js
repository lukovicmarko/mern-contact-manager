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
} from '../actions/types';

const initalState = {
    contacts: [],
    current: null,
    loading: true,
    text: ''
};

export default (state = initalState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_CONTACTS:
            return {
                ...state,
                contacts: payload,
                loading: false
            }
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, payload],
                loading: false
            }
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(contact => contact._id === payload._id ? payload : contact),
                loading: false
            }
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact._id !== payload),
                loading: false
            }
        case FILTER_CONTACTS:
            return {
                ...state,
                text: payload
            }
        case SET_CURRENT:
            return {
                ...state,
                current: payload
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }
        case CLEAR_CONTACTS:
            return {
                ...state,
                contacts: []
            }
        case CONTACT_ERROR:
            return {
                ...state,
                error: payload
            };
        default:
            return state;
    }
}