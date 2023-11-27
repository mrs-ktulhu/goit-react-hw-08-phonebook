import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { DeleteButton } from './ContactList.styled';

const ContactListItem = ({ id, text, phone }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <span role="img" aria-label="Contact icon">
      👤
      </span>
      <span>{text}</span>:&nbsp;
      <span>{phone}</span>&nbsp;
      <DeleteButton type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </DeleteButton>
    </li>
  );
};

export default ContactListItem;
