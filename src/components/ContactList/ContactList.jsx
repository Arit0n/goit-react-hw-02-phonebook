import { ListItem } from 'components/ListItem/ListItem';
import { WrapBox, List } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  console.log(contacts);
  return (
    <WrapBox>
      <List>
        <ListItem onDelete={onDelete} contacts={contacts}></ListItem>
      </List>
    </WrapBox>
  );
};
