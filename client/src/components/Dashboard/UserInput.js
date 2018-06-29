import React from 'react'
import PropTypes from 'prop-types';

const UserInput = ({ handleChange, value, name, label, _id }) => (
  <div className='text-left'>
    <label
      htmlFor={name}
      className='mb-0 pl-1'
    >
      {label}
    </label>
    {
      name === 'bio'
      ?
      <textarea
        type="text"
        rows='3'
        onChange={handleChange}
        name={name}
        value={value || ''}
        className='form-control mb-3'
      />
      :
      <input
        type="text"
        onChange={handleChange}
        name={name}
        value={value || ''}
        className='form-control mb-3'
        _id={_id || ''}
      />
    }
  </div>
);

UserInput.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  _id: PropTypes.string
};

export default UserInput;
