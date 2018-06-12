import React from 'react';

export const HelloWorld = props => (
  <div>
    <h1 className='display-2'>{props.title}</h1>
    {/* <p>{props.apiServerStatus}</p> */}
    <button
      type="button"
      className="btn btn-secondary"
      data-toggle="tooltip"
      data-placement="top"
      title="It Works!"
    >
      Tooltip
    </button>
    <br />
    <button
      type="button"
      className="btn btn-lg btn-danger"
      data-toggle="popover"
      title="Popover works, too"
      data-content="Magic...."
    >
      Popover
    </button>
  </div>
);