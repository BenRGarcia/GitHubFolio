import React from 'react'
import PropTypes from 'prop-types';

const UserInput = ({ handleChange, value, name, label }) => (
  <React.Fragment>
    <label
      htmlFor={name}
      className='mb-0'
    >
      {label}
    </label>
    {
      name === 'bio'
      ?
      <textarea
        type="text"
        onChange={handleChange}
        name={name}
        value={value || ''}
        className='form-control'
      />
      :
      <input
        type="text"
        onChange={handleChange}
        name={name}
        value={value || ''}
        className='form-control'
      />
    }
  </React.Fragment>
);

UserInput.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string
};

export default UserInput;
