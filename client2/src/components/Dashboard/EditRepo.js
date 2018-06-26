import React from 'react';
import PropTypes from 'prop-types';

const EditRepo = ({ _id, name, imageUrl, description, deployedUrl, handleChange }) => (
  <div className="form-group row">
    <label
      className='col-sm-2 col-form-label'
    >
      Repository Name:
    </label>
    <div className='col-sm-10'>
      <input
        name='name'
        type="text"
        value={name}
        onChange={e => handleChange(e, _id)}
        className='form-control'
      />
    </div>
  </div>
);

EditRepo.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  deployedUrl: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default EditRepo;
