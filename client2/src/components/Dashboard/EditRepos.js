import React from 'react';
import PropTypes from 'prop-types';
// import { UserInput } from '../';

const EditRepos = ({ repositories, handleChange }) => (
  <React.Fragment>
    {/* {
      repositories.map(repo => {
        return (
            <div key={repo._id}>
            {
              Object.keys(repo).map(key => {
                if (repo[key] !== '_id') {
                  return (
                    <UserInput
                      onChange={handleChange}
                      value={repo[key]}
                      name={key}
                      label={key}
                      _id={repo._id}
                    />
                  );
                }
              })
            }
            </div>
        );
      })
    } */}
  </React.Fragment>
);

EditRepos.propTypes = {
  repositories: PropTypes.array.isRequired,
  handleChange: PropTypes.func
};

export default EditRepos;
