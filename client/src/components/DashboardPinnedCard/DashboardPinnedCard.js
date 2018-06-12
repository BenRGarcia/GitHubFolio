import React from "react";
import "./DashboardPinnedCard.css";


export const DashboardPinnedCard = props => (
  <div className="card">
    <div className="img-container">
      <img className= "pinnedImages" alt={props.title} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.title}
        </li>
        <li>
          <strong>Description:</strong> {props.description}
        </li>
        <li>
          <strong><a href={props.githubLink}>GitHub Link</a></strong>
        </li>
        <li>
        <strong><a href={props.deployedLink}>Deployed Link</a></strong>
        </li>
      </ul>
    </div>
  </div>
);
