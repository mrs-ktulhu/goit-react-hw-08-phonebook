import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { nanoid } from '@reduxjs/toolkit';
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
      <FormInput onSubmit={handleSubmit}>
        <label htmlFor={nanoid()}>
          Name <br />
        </label>
        <input type="text" name="name" title="Enter name" required />
        <label htmlFor={nanoid()}>
          Number
          <br />
        </label>
        <input type="tel" name="number" title="Enter Number" required />
        <SubmitButton type="submit">Add contact</SubmitButton>
      </FormInput>
    </Container>
  );
};

export default ContactForm;
