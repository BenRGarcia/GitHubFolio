import React from 'react';
import PropTypes from 'prop-types';

const Panel = ({ style, children }) => (
  <div style={style}>
    <div className="container">
      <div className="row">
        <div className="col">
          {children}
        </div>
      </div>
    </div>
  </div>
)

Panel.propTypes = {
  style: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired
};

export default Panel
