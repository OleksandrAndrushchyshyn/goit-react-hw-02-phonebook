import React from "react";
import styles from "./ContactForm.module.css";
import PropTypes from "prop-types";
class ContactForm extends React.Component {
  state = {
    name: "",
    number: "",
  };
  handleInputNameChange = (event) => {
    this.setState({ name: event.currentTarget.value });
  };
  handleInputNumberChange = (event) => {
    this.setState({ number: event.currentTarget.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit({
      name: this.state.name,
      number: this.state.number,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit} className={styles.form}>
        <h3>Name</h3>
        <input
          type="text"
          name="name"
          onChange={this.handleInputNameChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <h3>Number</h3>
        <input
          type="tel"
          name="number"
          onChange={this.handleInputNumberChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
        <br />
        <button className={styles.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
export default ContactForm;
