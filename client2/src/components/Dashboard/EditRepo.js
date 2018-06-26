import React from 'react';
import PropTypes from 'prop-types';

const EditRepo = ({ handleChange, repositories }) => {
  let counter = 0
  return repositories.map(repo => {
    const { _id, name, /* imageUrl, */ description, deployedUrl } = repo;
    return (
      <fieldset key={_id} className='card'>
        <div className="card-header" id="headingOne">
          <button
            className="btn btn-link"
            type="submit"
            data-toggle="collapse"
            data-target={`#collapse${_id}`}
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Pinned Repository #{++counter}
          </button>
        </div>
        <div
          id={`collapse${_id}`}
          className={counter === 1 ? "collapse show" : "collapse"}
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div className="card-body py-2">
            {/* Repo name template */}
            <div className="form-group mb-3 row">
              <label
                className='col-sm-3 col-form-label text-left pb-1 pt-0'
              >
                Repository Name:
          </label>
              <div className='col-sm-9'>
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
            <div className="form-group mb-3 row">
              <label
                className='col-sm-3 col-form-label text-left pb-1 pt-0'
              >
                Deployed Site:
            </label>
              <div className='col-sm-9'>
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
            <div className="form-group mb-3 row">
              <label
                className='col-sm-3 col-form-label text-left pb-1 pt-0'
              >
                Description:
            </label>
              <div className='col-sm-9'>
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
        </div>
      </fieldset>
    );
  })
};

EditRepo.propTypes = {
  handleChange: PropTypes.func.isRequired,
  repositories: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default EditRepo;
