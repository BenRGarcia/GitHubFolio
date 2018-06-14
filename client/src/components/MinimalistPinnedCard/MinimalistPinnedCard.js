import React from "react";
import "./MinimalistPinnedCard.css";

export const MinimalistPinnedCard = props => {
  const pinnedRepos = props.pinnedRepos.map(repo => (

  <div className="col-sm-4 mb-4 mt-4  text-center">
    <a href={repo.githubLink}>    
      <div className="mt-4">
          <img className= "tn-size" alt={repo.title} src={repo.image} />
        </div>

        <div className="descriptionfont mt-2">
            <strong>{repo.title}</strong>
        </div>
      </a>
  </div>
      
  ))
  return(
    <div className="row">
      {pinnedRepos}
    </div>
  );
} 