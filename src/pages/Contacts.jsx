import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading } from 'redux/tasks/selectors';
import { fetchContacts } from 'redux/contactsSlice';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
        <title>Your contacts</title>
      <ContactsEditor />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactsList />
    </>
  );
}