import React from 'react';
import "./TemplatePage.css";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import  { SaveTemplateBtn } from "../../components/SaveTemplateBtn/SaveTemplateBtn";
import  { DashboardSidebar }  from "../../components/DashboardSidebar/DashboardSidebar.js";
import  { TemplateToggleBtns } from "../../components/TemplateToggleBtns/TemplateToggleBtns";

export const TemplatePage = props => {
  return(
    <div className='col-lg-10 offset-lg-2'>
      <div className=''>
      <DashboardSidebar />
      </div>
      <TemplateToggleBtns />
      <SaveTemplateBtn />
      <img src={ require('./minimalist-temp.png') } />
    </div>
  )
}