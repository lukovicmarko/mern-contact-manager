export default (contacts, text) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(text.toLowerCase()));
}
