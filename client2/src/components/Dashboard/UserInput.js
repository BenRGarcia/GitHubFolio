import React from 'react'
import PropTypes from 'prop-types';

const UserInput = ({ handleChange, value, name, label }) => {
  return (
    <div>
      <label
        htmlFor={name}
        className='mb-0'
      >
        {label}
      </label>
      <input
        type="text"
        onChange={handleChange}
        name={name}
        value={value}
        className='form-control'
      />
    </div>
  );
}

UserInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default UserInput;
