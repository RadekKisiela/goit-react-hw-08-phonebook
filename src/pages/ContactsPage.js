import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, addContact, deleteContact } from '../redux/actions';
import css from './ContactsPage.module.css';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeNumber = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isDuplicate =
      Array.isArray(contacts) &&
      contacts.some(
        contact => contact.name === name || contact.number === number
      );

    if (isDuplicate && edit === null) {
      alert('Contact already exists');
      return;
    }

    dispatch(
      addContact({
        name,
        number,
      })
    );

    setName('');
    setNumber('');
    setEdit(null);
  };

  const handleEdit = index => {
    setName(contacts[index].name);
    setNumber(contacts[index].number);
    setEdit(contacts[index].id);
  };

  const handleDelete = async index => {
    const contactId = contacts[index].id;

    try {
      await dispatch(deleteContact(contactId));
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <div className={css.container}>
      <div className={css.formContainer}>
        <h2>{edit !== null ? 'Edit Contact' : 'Add Contact'}</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input type="text" value={name} onChange={handleChangeName} />
          </div>
          <div>
            <label>Number</label>
            <input type="text" value={number} onChange={handleChangeNumber} />
          </div>
          <button type="submit">{edit !== null ? 'Edit' : 'Add'}</button>
        </form>
      </div>
      <h2>Contacts</h2>
      <ul className={css.contactsList}>
        {Array.isArray(contacts) &&
          contacts.map((contact, index) => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
};
