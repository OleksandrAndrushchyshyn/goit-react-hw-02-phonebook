import ContactItem from "../ContactItem";
import PropTypes from "prop-types";
import React from "react";
export default function ContactList({ contacts, onDelete }) {
  return (
    <div>
      <p>Contacts</p>
      <ul>
        {contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
