import React from 'react';
import PropTypes from 'prop-types';

const EditRepo = ({ handleChange, count, _id, name, site, description }) => (
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
        Pinned Repository #{count}
      </button>
    </div>
    <div
      id={`collapse${_id}`}
      className={count === 1 ? "collapse show" : "collapse"}
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
              value={site || ''}
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

EditRepo.propTypes = {
  handleChange: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default EditRepo;
