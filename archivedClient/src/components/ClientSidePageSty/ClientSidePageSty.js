import React from "react";
import "./ClientSidePageSty.css";
import { StylizedPinnedCard } from '../../components/StylizedPinnedCard/StylizedPinnedCard';


export const ClientSidePageSty = props => {
  const {pinnedRepos} = props;
  return(
  <div className= "minPageContainer">
    <div className="container pt-4">
      <div className="section pt-4 pb-4">
        <div className="titlefont pt-4 pb-4">
            <a>Stylized</a>
        </div>
      </div>
      <StylizedPinnedCard pinnedRepos={pinnedRepos} />
      <div className='pt-4 mt-4'>
        <a>Powered by GitHubFolio</a>
      </div>
    </div>
  </div>
  )
}
