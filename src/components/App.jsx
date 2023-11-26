import { Wrap } from './App.styled';
import { useDispatch } from 'react-redux';
import { NavLink, Route, Routes } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { fetchContacts } from 'redux/contactsSlice';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrap>
      <header className="header-container">
        <nav>
          <NavLink className="header-link" to="/">
            Contacts
          </NavLink>
          <NavLink className="header-link" to="/">
            Sign up
          </NavLink>
          <NavLink className="header-link" to="/movies">
            Log In
          </NavLink>
        </nav>
      </header>

      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <Routes>
          <Route path="/" element={<Contacts />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
    </Wrap>

    
  );
};
export default App;
