import React from "react";
import "./StylizedPage.css";
import { StylizedPinnedCard } from '../../components/StylizedPinnedCard/StylizedPinnedCard';
import { DashboardUserInfo } from '../../components/DashboardUserInfo/DashboardUserInfo';





export const StylizedPage = props => {
  const {userInfo, pinnedRepos} = props;
  return(
  <div className= "minPageContainer">
    <div className="container pt-4">
      <div className="section pt-4 pb-4">
        <div className="titlefont pt-4 pb-4">
            <a>Stylized</a>
        </div>
        <div>
          <DashboardUserInfo userInfo={userInfo}/>
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
