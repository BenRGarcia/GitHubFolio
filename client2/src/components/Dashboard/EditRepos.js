import React from 'react';
import PropTypes from 'prop-types';

const EditRepos = ({ repositories, handleChange, handleSubmit }) => {
  let counter = 0
  return repositories.map(repo => {
    const { _id, name, /* imageUrl, */ description, deployedUrl } = repo;
    return (
      <fieldset key={_id} className='card mb-4'>
        <div className="card-header">
          Pinned Repository #{++counter}
        </div>
        <div className="card-body py-2">
          {/* Repo name template */}
          <div className="form-group mb-2 row">
            <label
              className='col-sm-2 col-form-label text-left pb-1 pt-0'
            >
              Repository Name:
          </label>
            <div className='col-sm-10'>
              <input
                name='name'
                type="text"
                value={name || ''}
                onChange={e => handleChange(e, _id)}
                className='form-control'
              />
            </div>
          </div>
          {/* Deployed Website template */}
          <div className="form-group mb-2 row">
            <label
              className='col-sm-2 col-form-label text-left pb-1 pt-0'
            >
              Deployed Site:
            </label>
            <div className='col-sm-10'>
              <input
                name='deployedUrl'
                type="text"
                value={deployedUrl || ''}
                onChange={e => handleChange(e, _id)}
                className='form-control'
              />
            </div>
          </div>
          {/* Description template */}
          <div className="form-group mb-2 row">
            <label
              className='col-sm-2 col-form-label text-left pb-1 pt-0'
            >
              Description:
            </label>
            <div className='col-sm-10'>
              <textarea
                name='description'
                type="text"
                value={description || ''}
                onChange={e => handleChange(e, _id)}
                className='form-control'
                rows='2'
              />
            </div>
          </div>
          <div>
            <button type='submit' className='btn btn-outline-dark'>
              Save Changes
            </button>
          </div>
        </div>
        <hr className='my-0'/>
        <div className="card-body">
          image upload stuff
        </div>
      </fieldset>
    );
  })
};

EditRepos.propTypes = {
  repositories: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default EditRepos;
