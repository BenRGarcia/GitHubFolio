import React from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import  DashboardContainer  from "../../containers/DashbboardContainer/DashboardContainer.js";


export const DashboardPage = (props) => (
  <div className='col-lg-10 offset-lg-2'>
    <div className=''>
    {/* <DashboardSidebar /> */}
    </div>
    <DashboardContainer />
 </div>
);


