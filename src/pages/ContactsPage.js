import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, addContact, deleteContact } from '../redux/actions';
import css from './ContactsPage.module.css';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangePhone = e => {
    setPhone(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isDuplicate = contacts.some(
      contact => contact.name === name || contact.phone === phone
    );

    if (isDuplicate && edit === null) {
      alert('Contact already exists');
      return;
    }

    dispatch(
      addContact({
        name,
        phone,
      })
    );

    setName('');
    setPhone('');
    setEdit(null);
  };

  const handleEdit = index => {
    setName(contacts[index].name);
    setPhone(contacts[index].phone);
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
            <label>Phone</label>
            <input type="text" value={phone} onChange={handleChangePhone} />
          </div>
          <button type="submit">{edit !== null ? 'Edit' : 'Add'}</button>
        </form>
      </div>
      <h2>Contacts</h2>
      <ul className={css.contactsList}>
        {contacts &&
          contacts.map((contact, index) => (
            <li key={contact.id}>
              {contact.name}: {contact.phone}
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
};
