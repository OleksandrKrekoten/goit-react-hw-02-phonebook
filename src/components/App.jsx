import React, { Component } from 'react';
import Notiflix from 'notiflix';
import { FormAddContacts } from './FormAddContacts/FormAddContacts';
import { ListContacts } from './ListContacts/ListContacts';
import { SearchForm } from './SearchForm/SearchForm';
import { Section } from './Section/Section';


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  addContacts = newContact => {
    this.state.contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    )
      ? Notiflix.Notify.failure(`${newContact.name} is already in contacts.`)
      : this.setState(prev => ({
          contacts: [newContact, ...prev.contacts],
        }));
  };
  // Notiflix.Notify.success(` ${newContact.name} added to the contact list`);
  removeContacts = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };
  onSearch = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  render() {
     const filter = this.state.contacts.filter(contact => {
       return contact.name
         .toLowerCase()
         .includes(this.state.filter.toLowerCase());
     });
    return (
      <div>
        <Section title="Phonebook">
          <FormAddContacts addContacts={this.addContacts} />
        </Section>
        <Section title="Contacts">
          <SearchForm onSearch={this.onSearch} />
          <ListContacts
            contact={filter}
            removeContacts={this.removeContacts}
          />
        </Section>
      </div>
    );
  }
}
