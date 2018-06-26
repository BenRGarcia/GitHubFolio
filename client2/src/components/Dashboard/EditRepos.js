import React from 'react';
import PropTypes from 'prop-types';

const EditRepos = ({ repositories, handleChange }) => (
  repositories.map(repo => {
    const { _id, name,/* imageUrl, description, */deployedUrl } = repo;
    return (
      <fieldset key={_id} className='card mb-4'>
        <div className="card-body">
          {/* Repo name template */}
          <div className="form-group row">
            <label
              className='col-sm-2 col-form-label text-right'
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
          {/* Deployed Website template */}
          <div className="form-group row">
            <label
              className='col-sm-2 col-form-label text-right'
            >
              Deployed Website:
          </label>
            <div className='col-sm-10'>
              <input
                name='deployedUrl'
                type="text"
                value={deployedUrl}
                onChange={e => handleChange(e, _id)}
                className='form-control'
              />
            </div>
          </div>
        </div>
      </fieldset>
    );
  })
);

EditRepos.propTypes = {
  repositories: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default EditRepos;
