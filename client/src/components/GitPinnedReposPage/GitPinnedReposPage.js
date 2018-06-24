import React from "react";
import GitPinnedReposBtn from '../../components/GitPinnedReposBtn/GitPinnedReposBtn';
import "./GitPinnedReposPage.css";

export const GitPinnedReposPage = props => {
  return(
  <div className= "minPageContainer">
    <div className="container pt-4">
      <div className="section pt-4 pb-4">
        <div className="titlefont pt-4 pb-4">
            <a>Git Pinned Repos Page</a>
        </div>
        <div>
          <GitPinnedReposBtn />
        </div>
        <a>Powered by GitHubFolio</a>
      </div>
    </div>
  </div>
  )
}