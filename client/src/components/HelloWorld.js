import React from 'react';

export const HelloWorld = props => (
  <div>
    <h1>{props.title}</h1>
    <p>{props.apiServerStatus}</p>
  </div>
);