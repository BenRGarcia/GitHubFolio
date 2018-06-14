import React from "react";
import "./MinimalistPage.css";
import { MinimalistPinnedCard } from '../../components/MinimalistPinnedCard/MinimalistPinnedCard';
import { DashboardUserInfo } from '../../components/DashboardUserInfo/DashboardUserInfo';





export const MinimalistPage = props => {
  const {userInfo, pinnedRepos} = props;
  return(
  <div>
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

{/* <a href='/dashboard/templates'><button>GO BACK</button></a>  */}
{/* <a href='/dashboard/templates'><button>USE THIS TEMPLATE</button></a> */}