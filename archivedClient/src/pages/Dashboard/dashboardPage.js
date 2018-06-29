import React from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import  DashboardContainer  from "../../containers/DashbboardContainer/DashboardContainer.js";
import  { DashboardSidebar }  from "../../components/DashboardSidebar/DashboardSidebar.js";


export const DashboardPage = (props) => (
  <div className="d-flex">
    <div className="align-items-stretch">
      <DashboardSidebar />
    </div>
    <div className="flex-grow-1">
      <DashboardContainer />
    </div>
 </div>
);


