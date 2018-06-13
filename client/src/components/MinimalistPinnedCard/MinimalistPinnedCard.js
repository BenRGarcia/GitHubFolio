import React from "react";
import "./MinimalistPinnedCard.css";


export const MinimalistPinnedCard = props => {
  const pinnedRepos = props.pinnedRepos.map(repo => (
    <a href={repo.githubLink}>    
      <div className="card">
        <div className="img-container">
          <img className= "pinnedImages" alt={repo.title} src={repo.image} />
        </div>
          <div className="content">
            <ul>
              <li>
                <strong>{repo.title}</strong> 
              </li>
            </ul>
          </div>
      </div>
    </a>
      
  ))
  return(
    pinnedRepos
  );
} 