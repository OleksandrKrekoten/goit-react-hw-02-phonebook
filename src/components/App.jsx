import React, { Component } from 'react';
import { FormAddContacts } from './FormAddContacts/FormAddContacts';
import { ListContacts } from './ListContacts/ListContacts';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  render() {
    console.log(this.state.contacts);
    return (
      <div>
        <Section title="Phonebook">
          <FormAddContacts />
        </Section>
        <Section title="Contacts">
          <ListContacts contacts={this.state.contacts} />
        </Section>
      </div>
    );

      
  }
}
