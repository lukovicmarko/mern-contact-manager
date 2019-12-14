import React from 'react';
import { connect } from 'react-redux';
import { filterContacts } from '../../actions/contacts';

const Search = ({ filter, filterContacts }) => {
    return (
        <input
            type="text"
            placeholder="Search contacts"
            value={filter}
            onChange={(e) => filterContacts(e.target.value)}
        />
    );
};

const mapStateToProps = state => ({
    filter: state.contacts.text
});

export default connect(mapStateToProps, { filterContacts })(Search);