import { List, Item, Name, Number } from './ListContact.styled';
export const ListContacts = ({ contacts }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Name>{name}</Name>
          <Number>{number}</Number>
        </Item>
      ))}
    </List>
  );
};