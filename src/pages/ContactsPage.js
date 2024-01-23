import React, { useEffect, useState } from 'react';
import css from './ContactsPage.module.css';

export const ContactsPage = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, []);

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

    const newContact =
      edit !== null
        ? contacts.map(contact =>
            contact.id === edit ? { id: contact.id, name, phone } : contact
          )
        : [...contacts, { id: Date.now(), name, phone }];

    setContacts(newContact);
    setName('');
    setPhone('');
    setEdit(null);
    localStorage.setItem('contacts', JSON.stringify(newContact));
  };

  const handleEdit = index => {
    setName(contacts[index].name);
    setPhone(contacts[index].phone);
    setEdit(contacts[index].id);
  };

  const handleDelete = idex => {
    const newContacts = contacts.filter((_, index) => index !== idex);
    setContacts(newContacts);
    localStorage.setItem('contacts', JSON.stringify(newContacts));
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
        {contacts.map((contact, index) => (
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
