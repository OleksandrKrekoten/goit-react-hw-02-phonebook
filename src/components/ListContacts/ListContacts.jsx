import PropTypes from 'prop-types';
import { List, Item, Name, DeleteBtn } from './ListContact.styled';
export const ListContacts = ({ contact, removeContacts }) => {
  return (
    <List>
      {contact.map(({ id, name, number }) => (
        <Item key={id}>
          <Name>{name}</Name>
          <p>{number}</p>
          <DeleteBtn
            id={id}
            onClick={e => {
              removeContacts(e.target.id);
            }}
          >
            delete
          </DeleteBtn>
        </Item>
      ))}
    </List>
  );
};
ListContacts.propTypes = {
  contact: PropTypes.array.isRequired,
  removeContacts: PropTypes.func.isRequired,
};