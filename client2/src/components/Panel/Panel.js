import React from 'react';
import PropTypes from 'prop-types';

const Panel = ({ style, children }) => (
  <div style={style}>
    <div className="container">
      <div className="row" style={{ minHeight: '100vh' }}>
        <div className="col d-flex justify-content-center align-items-center">
          {children}
        </div>
      </div>
    </div>
  </div>
)

Panel.propTypes = {
  style: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired
};

export default Panel
