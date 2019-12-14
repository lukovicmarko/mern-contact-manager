import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getContacts } from '../../actions/contacts';
import selectContacts from '../../selector/contacts';

import Contact from '../contacts/Contact';
import Spinner from '../layout/Spiner';

const Contacts = ({ contacts, loading, getContacts, selectContacts }) => {
    useEffect(() => {
        getContacts();
    }, [getContacts]);

    if (contacts !== null && contacts.length === 0 && !loading) {
        return <h4>No contacts to show</h4>
    }

    return (
        <Fragment>
            {
                (contacts !== null && !loading && contacts.length !== 0) ?
                    (contacts.map(contact =>
                        <Contact key={contact._id} contact={contact} />
                    ))
                    : <Spinner />
            }
        </Fragment>
    );
};

const mapStateToProps = state => ({
    contacts: selectContacts(state.contacts.contacts, state.contacts.text),
    loading: state.contacts.loading
});

export default connect(mapStateToProps, { getContacts })(Contacts);