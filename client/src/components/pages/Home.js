import React from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import Search from '../contacts/Search';

const Home = () => {
    return (
        <div className="grid-2">
            <div>
                <ContactForm />
            </div>
            <div>
                <Search />
                <Contacts />
            </div>
        </div>
    );
};

export default Home;