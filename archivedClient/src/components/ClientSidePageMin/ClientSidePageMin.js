import React from "react";
import "./ClientSidePageMin.css";
import { MinimalistPinnedCard } from '../../components/MinimalistPinnedCard/MinimalistPinnedCard';


export const ClientSidePageMin = props => {
  const {pinnedRepos} = props;
  return(
  <div className= "minPageContainer">
    <div className="container pt-4">
      <div className="section pt-4 pb-4">
        <div className="titlefont pt-4 pb-4">
            <a>Minimalist</a>
        </div>
      </div>
      <MinimalistPinnedCard pinnedRepos={pinnedRepos} />
      <div className='pt-4 mt-4'>
        <a>Powered by GitHubFolio</a>
      </div>
    </div>
  </div>
  )
}
