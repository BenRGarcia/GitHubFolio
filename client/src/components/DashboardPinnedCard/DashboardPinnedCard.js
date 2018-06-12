import React from "react";
import "./DashboardPinnedCard.css";


const DashboardPinnedCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Description:</strong> {props.description}
        </li>
        <li>
          <strong>Github Link:</strong> {props.github}
        </li>
        <li>
          <strong>Deployed Link:</strong> {props.link}
        </li>
      </ul>
    </div>
  </div>
);

export default DashboardPinnedCard;