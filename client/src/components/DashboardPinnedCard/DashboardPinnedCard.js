import React from "react";
import "./DashboardPinnedCard.css";


export const DashboardPinnedCard = props => {
  const pinnedRepos = props.pinnedRepos.map(repo => (
    <div className="card">
      <div className="img-container">
        <img className= "pinnedImages" alt={repo.title} src={repo.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {repo.title}
          </li>
          <li>
            <strong>Description:</strong> {repo.description}
          </li>
          <li>
            <strong><a href={repo.githubLink}>GitHub Link</a></strong>
          </li>
          <li>
          <strong><a href={repo.deployedLink}>Deployed Link</a></strong>
          </li>
        </ul>
      </div>
    </div>
  ))
  return(
    pinnedRepos
  );
} 

