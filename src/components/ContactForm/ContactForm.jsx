import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import Notiflix from 'notiflix';
import { Container, FormInput, SubmitButton } from './ContactForm.styled';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contactsSelector = useSelector(state => state.contacts);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      const form = e.target;
      const name = form.elements.name.value;
      const number = form.elements.number.value;

      if (contactsSelector.items.find(contact => contact.name === name)) {
        Notiflix.Notify.failure(`${name} is already in contacts.`);
        return;
      }

      dispatch(addContact({ name, number }));
      form.reset();
    },
    [contactsSelector.items, dispatch]
  );

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormInput>
          Name
          <br />
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            required
          />
        </FormInput>
        <br />
        <FormInput>
          Phone
          <br />
          <input
            type="tel"
            placeholder="Enter phone"
            name="number"
            required
          />
        </FormInput>
        <br />
        <SubmitButton type="submit" >Add contact</SubmitButton>
      </form>
    </Container>
  );
};

export default ContactForm;
