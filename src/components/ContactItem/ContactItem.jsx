import styles from "./ContactItem.module.css";
import PropTypes from "prop-types";
import React from "react";
export default function ContactItem({ contact, onDelete }) {
  return (
    <li>
      {contact.name}: {contact.number}
      <button
        className={styles.btn}
        type="button"
        onClick={() => onDelete(contact.id)}
      >
        Delete
      </button>
    </li>
  );
}
ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};
